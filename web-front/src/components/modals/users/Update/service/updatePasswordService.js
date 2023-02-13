import React,{useState,useEffect} from "react";
import MustLogin from "../../../contents/RequiredLoginModal";
import styled from "styled-components";
import {Box, Button, FormHelperText, Grid, TextField, Typography} from "@mui/material";
import {
    editUserPassword,
    logout,
    sendEditPasswordSMS,
    signCheck
} from "../../../../../api";

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

export default function UpdatePasswordService(props){

    const { userData, srcAddress } = props;

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

    const [PwConfirm, setPwConfirm] = useState("");
    const [password, setPassword]= useState('');
    const [samePassword,setSamePassword] = useState('');


    const [PwConfirmMessage, setPwConfirmMessage] =useState("")
    const [PwMessage, setPwMessage] = useState("")
    const [SamePwMessage, setSamePwMessage] = useState('')

    const[isPwConfirm,setIsPwConfirm] = useState(false)
    const[isPw,setIsPw] =useState(false)
    const[isSamePw,setIsSamePw] = useState(false)


    const onChangeConfirmPw = (e)=>{
        const currentPw = e.currentTarget.value;
        setPwConfirm(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwConfirmMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
        } else {
            setPwConfirmMessage("");
            setIsPwConfirm(true)
        }
    }

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

    const onChangeSamePassword= (e) => {
        const currentSamePassword = e.currentTarget.value;
        setSamePassword(currentSamePassword);
        if (password !== currentSamePassword) {
            setSamePwMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setSamePwMessage("");
            setIsSamePw(true)
        }
    };

    const [sign, setSign] =useState("")
    const [isSign,setIsSign]= useState(false)
    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            userid:useridMap[0],
            phone:phoneMap[0],
            password:PwConfirm,
            changePassword:password,
            phoneSubject: '고객 비밀번호 변경'
        }
        sendEditPasswordSMS(data)
            .then((res)=>{
                setSign(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.message)
            })
    }


    const [signNum, setSignNum] = useState("");

    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
        setIsSign(true)
    }




    const [res,setRes] = useState('')

    const [isLogout,setIsLogout] = useState(false)
    const [logoutUser,setLogoutUser] = useState({})

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            userid: useridMap[0],
            confirmPassword:PwConfirm,
            password:password,
            authNum:signNum
        }

        editUserPassword(data)
            .then((res)=>{
                setRes(res.data)
                alert('비밀번호가 변경되었습니다. 다시 로그인해주세요~!')
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
                <div style={{height: 650, width: '100%'}}>
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
                            비밀번호 변경
                        </Typography><br/><br/>
                        <Grid container spacing={1}>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    autoFocus
                                    required
                                    fullWidth
                                    type="password"
                                    name="PwConfirm"
                                    label='기존 비밀번호(숫자+영문자+특수문자 8자리 이상)'
                                    value={PwConfirm}
                                    onChange={onChangeConfirmPw}
                                    error={PwConfirmMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <FormHelperTextsRED>{PwConfirmMessage}</FormHelperTextsRED>
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    name="password"
                                    label='새로운 비밀번호 (숫자+영문자+특수문자 8자리 이상)'
                                    value={password}
                                    onChange={onChangePassword}
                                    error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    name="samePassword"
                                    label='새로운 비밀번호 재입력 (숫자+영문자+특수문자 8자리 이상)'
                                    value={samePassword}
                                    onChange={onChangeSamePassword}
                                    error={SamePwMessage === '비밀번호가 일치하지 않습니다.' || false}
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                                <FormHelperTextsRED>{SamePwMessage}</FormHelperTextsRED>
                            </Grid>
                            <Grid item xs={1}/>

                            <Grid item xs={1}/>
                            <Grid item xs={7.5}>
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
                                    disabled={isPwConfirm === false || isPw === false || isSamePw === false}
                                >
                                    인증받기
                                </Button><br/>
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
                                    disabled={isPwConfirm === false || isPw === false || isSamePw === false}
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