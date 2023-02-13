import React, {useEffect, useState} from 'react';
import {
    Box, Button, FormHelperText, Grid, TextField,
    Typography
} from "@mui/material";

import MustLogin from '../../../contents/RequiredLoginModal'
import {
    editUserPhone,
    sendEditPhoneSMS,
    signCheck
} from "../../../../../api";
import styled from "styled-components";

const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;

const FormHelperTextsBLUE = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #0f27d9 !important;
`;


const UpdatePhoneService = (props) => {

    const { userData,srcAddress } = props;


    let useridMap = userData.map(item=>item.userid)
    let phoneMap = userData.map(item=>item.phone)



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

    const [phone, setPhone] = useState("");
    const [PhoneMessage, setPhoneMessage] = useState("")


    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage('올바른 핸드폰번호를 입력해주세요. (" - " <= 하이픈 필수입니다.)');
        } else {
            setPhoneMessage("");
        }
    };
    const addHyphen = (e) => {
        const currentNumber = e.currentTarget.value;
        setPhone(currentNumber);
        if (currentNumber.length === 3 || currentNumber.length === 8) {
            setPhone(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    };

    const [sign, setSign] =useState("")
    const [isSign,setIsSign]= useState(false)
    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            userid:useridMap[0],
            phone:phone,
            phoneNum:phoneMap[0],
            phoneSubject: '고객 전화번호 변경'
        }
        sendEditPhoneSMS(data)
            .then((res)=>{
                setSign(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.response.data)
            })
    }
    const [signNum, setSignNum] = useState("");

    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
        setIsSign(true)
    }


    const [res,setRes] = useState('')

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            userid: useridMap[0],
            changePhoneNum:phone,
            phone:phoneMap[0],
            authNum:signNum
        }

        editUserPhone(data)
            .then((res)=>{
                setRes(res.data)
                alert('수정 완료')
                window.location.replace('/profile')
            })
            .catch(function (err){
                alert(err.response.data)
            })


    }


    return (
        <>
            {isLogin ? (
                <div style={{height: 520, width: '100%'}}>
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
                            전화번호 수정
                        </Typography><br/><br/>
                        <Grid container spacing={1}>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    name="phone"
                                    label='기존 전화번호'
                                    defaultValue={phoneMap[0]}
                                    disabled
                                /><br/><br/>
                            </Grid>
                            <br/>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={7.5}>
                                <TextField
                                    autoFocus
                                    required
                                    fullWidth
                                    type="text"
                                    name="phone"
                                    label='변경하실 전화번호("-" 하이픈 자동생성)'
                                    value={phone}
                                    onChange={addHyphen}
                                    error={PhoneMessage === '올바른 핸드폰번호를 입력해주세요. (" - " <= 하이픈 필수입니다.)' || false}
                                /><br/>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    value={sign}
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
                                    onClick={sendSMSHandler}
                                    disabled={phone.length<13}
                                >
                                    인증받기
                                </Button><br/>
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <FormHelperTextsRED>{PhoneMessage}</FormHelperTextsRED>
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    label="인증번호"
                                    value={signNum}
                                    type="text"
                                    onChange={onChangeSignHandler}
                                />
                            </Grid>
                            <Grid item xs={1}/>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>

                                <FormHelperTextsBLUE>{sign}</FormHelperTextsBLUE>
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
                                    disabled={phone.length < 13 || isSign === false}
                                >
                                    수정하기
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            ) : (
                <MustLogin/>
            )}
        </>

    )
}
export default UpdatePhoneService

