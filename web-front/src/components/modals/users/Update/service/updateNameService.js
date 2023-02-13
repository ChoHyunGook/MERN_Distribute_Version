import styled from "styled-components";
import {Box, Button, FormHelperText, Grid, TextField, Typography} from "@mui/material";
import {
    editUser,
    sendEditNameSMS,
    signCheck
} from "../../../../../api";
import React,{useState,useEffect} from "react";
import MustLogin from "../../../contents/RequiredLoginModal";

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

export default function UpdateNameService(props){

    const{ userData, srcAddress } = props;

    let useridMap = userData.map(item=>item.userid)
    let nameMap = userData.map(item=>item.name)
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

    const [name, setName] = useState('')
    const [NameMessage, setNameMessage] = useState('')


    const onChangeName = (e) => {
        const currentName = e.currentTarget.value;
        setName(currentName)
        const nameRegExp = /^[가-힣a-zA-Z]+$/;

        if (!nameRegExp.test(currentName) || name.length<1) {
            setNameMessage('이름을 두 글자 이상 입력하세요!');
        } else {
            setNameMessage('');
        }
    }


    const [sign, setSign] =useState("")
    const [isSign,setIsSign]= useState(false)
    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            userid:useridMap[0],
            name:nameMap[0],
            changeName:name,
            phoneNum:phoneMap[0],
            phoneSubject: '고객 이름정보 수정'
        }
        sendEditNameSMS(data)
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


    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = {
            userid: useridMap[0],
            name: name,
            authNum: signNum
        }
        editUser(data)
            .then((res) => {
                setRes(res.data)
                alert('수정 완료')
                window.location.replace('/profile')
            })
            .catch(function (err) {
                alert(err.response.data)
            })

    }

    return(
        <>
            {isLogin ? (
                <div style={{height: 600, width: '100%'}}>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '520px',
                            width: '530px',
                            borderRadius: '1rem',
                        }}
                    ><br/>
                        <img alt="No Images" src={srcAddress}
                             style={{
                                 marginTop: 1
                             }}/><br/>

                        <Typography component="h4" variant="h0">
                            이름 변경
                        </Typography><br/><br/>
                        <Grid container spacing={1}>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    autoFocus
                                    required
                                    fullWidth
                                    type="text"
                                    name="name"
                                    label='기존 이름(성함)'
                                    defaultValue={nameMap[0]}
                                    disabled
                                /><br/><br/>
                            </Grid>
                            <br/>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    autoFocus
                                    required
                                    fullWidth
                                    type="text"
                                    name="name"
                                    label='수정하실 이름을 작성해주세요.'
                                    value={name}
                                    onChange={onChangeName}
                                    error={NameMessage === '이름을 두 글자 이상 입력하세요!' || false}
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={1}/>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <FormHelperTextsRED>{NameMessage}</FormHelperTextsRED><br/>
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={7.5}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    name="phone"
                                    label='전화번호("-" 하이픈 자동생성)'
                                    defaultValue={phoneMap[0]}
                                    disabled
                                />
                            </Grid>
                            <br/>
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
                                disabled={name.length<1}
                            >
                                인증받기
                            </Button><br/><br/>
                            </Grid>
                            <Grid item xs={1.5}/>

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
                                    disabled={name.length < 1 || isSign === false}
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