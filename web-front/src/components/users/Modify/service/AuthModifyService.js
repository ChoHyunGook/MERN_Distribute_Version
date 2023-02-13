import {Button, FormHelperText, TextField} from "@mui/material";
import React, {useState} from "react";
import styled from "styled-components";
import {authModify} from "../../../../api";

const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;

export default function AuthModifyService(props){

    const { userData } = props;

    let useridMap = userData.map(item=>item.userid)

    const [password, setPassword]= useState('');
    const [PwMessage, setPwMessage] = useState("")
    const[isPw,setIsPw] =useState(false)

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

    const onSubmitHandler = (e)=>{
        e.preventDefault()

        let data = {
            userid: useridMap[0],
            password:password
        }

        authModify(data)
            .then((res)=>{
                alert(res.data)
                window.location.replace('/profile')
            })
            .catch((err)=>{
                alert(err.response.data)
            })


    }

    
    return(
        <>
            <TextField
                required
                sx={{width:400}}
                type="password"
                name="password"
                label='비밀번호'
                value={password}
                onChange={onChangePassword}
                error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
            />
            <div style={{paddingTop:20}}>
            <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
            </div>
            <div style={{paddingTop:20,width:400}}>
                <Button
                    onClick={onSubmitHandler}
                    variant="contained"
                    type="submit"
                    size="medium"
                    fullWidth
                    sx={{
                        marginTop: 1,
                        height: '45px',
                        border: 1,
                        "&.MuiButton-root:hover": {
                            color: '#008DDC',
                            backgroundColor: '#c7ebff',
                            borderColor: '#008DDC'
                        }
                    }}
                    disabled={ isPw === false }
                >
                    확인
                </Button>
            </div>
        </>
    )
}