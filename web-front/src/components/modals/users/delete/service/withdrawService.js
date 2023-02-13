import React, {useEffect, useState} from "react";
import {signCheck, withdrawUser,logout} from "../../../../../api";
import RequiredLoginModal from "../../../contents/RequiredLoginModal";
import {Box, Button, FormHelperText, TextField, Typography} from "@mui/material";
import styled from "styled-components";

const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;
export default function WithdrawService(props){

    const { userData, srcAddress } = props

    let useridMap = userData.map(item=>item.userid)
    let nameMap = userData.map(item=>item.name)
    let phoneMap = userData.map(item=>item.phone)
    let companyMap = userData.map(item=>item.company)


    const [password, setPassword] = useState('');
    const [PwMessage, setPwMessage] = useState("")
    const [isPw,setIsPw] = useState(false)


    const onChangePassword = (e) => {
        const currentPw = e.currentTarget.value;
        setPassword(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
        } else {
            setPwMessage("");
            setIsPw(true)
        }
    };

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        if(window.confirm('확인을 누르면 회원탈퇴됩니다. 회원을 탈퇴하시겠습니까?')){
            let data ={
                userid:useridMap[0],
                name:nameMap[0],
                phone:phoneMap[0],
                company:companyMap[0],
                password:password
            }
            withdrawUser(data)
                .then((res)=>{
                    alert(res.data)
                    logout().then((res)=>{
                        window.location.replace('/')
                    }).catch((err)=>{
                        alert(JSON.stringify(err.response.data))
                    })
                })
                .catch(function (err){
                    alert(JSON.stringify(err.response.data))
                })

        }else {
            return;
        }
    }


    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})


    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                })

        }catch (err){
        }
    }, [])

    return(
        <>
            {isLogin ? (
                <>
                    <div style={{height: 400, width: '100%'}}>
                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '300px',
                                width: '530px',
                                borderRadius: '1rem',
                            }}
                        ><br/>
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 1
                                 }}/><br/>
                            <Typography component="h4" variant="h0" sx={{paddingBottom:3}}>
                                회원 탈퇴 전 비밀번호를 재입력 해주세요.
                            </Typography><br/><br/>
                            <div style={{width:400}}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                type="password"
                                name="password"
                                label='비밀번호'
                                value={password}
                                onChange={onChangePassword}
                                error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                            />

                            <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
                        <br/><br/>
                        <Button
                            onClick={onSubmitHandler}
                            variant="contained"
                            type="submit"
                            size="medium"
                            fullWidth
                            sx={{
                                marginTop: 1,
                                height: '45px',
                                border: 3,
                                "&.MuiButton-root:hover": {
                                    color: '#008DDC',
                                    backgroundColor: '#c7ebff',
                                    borderColor: '#008DDC'
                                }
                            }}
                            disabled={isPw === false }
                        >
                            회원탈퇴
                        </Button>
                            </div>
                        </Box>
                    </div>
                </>
            ):(
                <RequiredLoginModal />
            )}
        </>
    )
}