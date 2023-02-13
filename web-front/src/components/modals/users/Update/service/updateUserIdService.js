import React, {useEffect, useState} from "react";
import { editEmailAdress, logout, sendModifyEmail, signCheck} from "../../../../../api";
import MustLogin from "../../../contents/RequiredLoginModal";
import {Box, Button, FormHelperText, Grid, TextField, Typography} from "@mui/material";
import styled from "styled-components";


const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;

export default function UpdateUserIdService(props){

    const {userData, srcAddress} =props

    let nameMap = userData.map(item=>item.name)
    let userIdMap = userData.map(item=>item.userid)



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




    const [changeUserid, setChangeUserId] = useState("");
    const [EmailMessage, setEmailMessage] = useState("")
    const [IsEmail,setIsEmail] = useState(false)

    const onChangeEmail = (e) => {
        const currentEmail = e.currentTarget.value;
        setChangeUserId(currentEmail)
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false)
        } else {
            setEmailMessage("");
            IsEmail(true)
        }
    };

    const [mail, setMail] = useState('')
    const onSendEmail = (e)=>{
        e.preventDefault()
        let data = {
            emailSubject:'아이디(이메일) 변경',
            name:nameMap[0],
            userid:userIdMap[0],
            changeUserid:changeUserid
        }
        setMail(data)
        sendModifyEmail(data)
            .then(res=>{
                setMail(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.response.data)
            })

    }

    const [signNum, setSignNum] = useState("");
    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
    }



    const [res,setRes] = useState('')

    const [isLogout,setIsLogout] = useState(false)
    const [logoutUser,setLogoutUser] = useState({})

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            userid: userIdMap[0],
            changeUserid: changeUserid,
            signNum:signNum
        }

        editEmailAdress(data)
            .then((res)=>{
                setRes(res.data)
                alert('이메일(아이디) 수정완료. 변경된 아이디로 다시 로그인해주세요~!')
                logout().then((res)=>{
                    setIsLogout(true);
                    setLogoutUser(res.data)
                    window.location.replace('/login')
                }).catch((err)=>{
                    alert(JSON.stringify(err))
                })

            })
            .catch(function (err){
                alert(JSON.stringify(err.response.data))
            })


    }




    return(
        <>
            {isLogin ? (
                <div style={{height: 500, width: '100%'}}>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '530px',
                            borderRadius: '1rem',
                        }}
                    ><br/>
                        <img alt="No Images" src={srcAddress}
                             style={{
                                 marginTop: 1
                             }}/><br/>

                        <Typography component="h4" variant="h0">
                            이메일 주소 변경
                        </Typography><br/><br/>
                        <Grid container spacing={1}>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    name="userid"
                                    label='기존 이메일주소'
                                    defaultValue={userIdMap}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={12}/>
                            <Grid item xs={1}/>
                            <Grid item xs={7.5}>
                                <TextField
                                    autoFocus
                                    required
                                    fullWidth
                                    type="email"
                                    name="changeUserid"
                                    label='변경하실 이메일주소(아이디)를 입력해주세요.'
                                    value={changeUserid}
                                    onChange={onChangeEmail}
                                    error={EmailMessage === "이메일의 형식이 올바르지 않습니다!" || false}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    onClick={onSendEmail}
                                    variant="contained"
                                    type="submit"
                                    size="medium"
                                    sx={{
                                        marginTop:0,
                                        width:'105px',
                                        height:'55px',
                                        border:3,
                                        "&.MuiButton-root:hover":{
                                            color:'#008DDC',
                                            backgroundColor:'#c7ebff',
                                            borderColor:'#008DDC'
                                        }
                                    }}
                                    disabled={changeUserid.length<10}
                                >
                                        인증받기
                                </Button>
                            </Grid>
                            <br/>
                            <Grid item xs={1}/>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <FormHelperTextsRED>{EmailMessage}</FormHelperTextsRED>
                            </Grid>

                            <Grid item xs={1}/>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    name="signNum"
                                    label='인증번호'
                                    value={signNum}
                                    onChange={onChangeSignHandler}
                                />
                            </Grid>
                            <Grid item xs={1}/>


                            <Grid item xs={1}/>
                            <Grid item xs={10}>
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
                                    disabled={signNum.length<6 || false}
                                >
                                    수정하기
                                </Button>
                            </Grid>
                        </Grid>

                    </Box>
                </div>
            ):(
                <MustLogin/>
                )}
        </>
    )


}