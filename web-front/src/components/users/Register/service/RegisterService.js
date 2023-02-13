import React from "react";
import {
    Box,
    FormControl,
    Grid,
} from "@mui/material";
import styled from "styled-components";
import OnSubmitService from "../event/RegisterEvent/onSubmitService";
import OnChangeService from "../event/RegisterEvent/onChangeService";



const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;

export default function RegisterService(props){


    const {name, setName, userid, setUserId, password, setPassword, PwConfirm, setPwConfirm,
        phone, setPhone, NameMessage, setNameMessage, EmailMessage, setEmailMessage, PwMessage,
        setPwMessage, PwConfirmMessage, setPwConfirmMessage, PhoneMessage, setPhoneMessage,setIsName, setIsEmail,
        setIsPw, setIsPwConfirm,setIsPhone, setRes, CheckCompany,isExclusive,company,setCompany,CompanyList,authNum,setAuthNum,
        isName,isEmail,isPw,isPwConfirm,isPhone,isAuthNum,isSendAuth,setIsAuthNum,setIsSendAuth}=props




    return(
        <>
            <Boxs component="form" noValidate  sx={{ mt: 3, width: 500}}>
                                <FormControl component="fieldset" variant="standard" autoComplete="off">
                                    <Grid container spacing={1}>
                                        <OnChangeService name={name} setName={setName} userid={userid} setUserId={setUserId} password={password}
                                                         setPassword={setPassword} PwConfirm={PwConfirm} setPwConfirm={setPwConfirm}
                                                         phone={phone} setPhone={setPhone} NameMessage={NameMessage} setNameMessage={setNameMessage}
                                                         EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                                         setPwMessage={setPwMessage} PwConfirmMessage={PwConfirmMessage}
                                                         setPwConfirmMessage={setPwConfirmMessage} PhoneMessage={PhoneMessage}
                                                         setPhoneMessage={setPhoneMessage} setIsName={setIsName} setIsEmail={setIsEmail}
                                                         setIsPw={setIsPw} setIsPwConfirm={setIsPwConfirm} setIsPhone={setIsPhone}
                                                         CheckCompany={CheckCompany} isExclusive={isExclusive}
                                                         setCompany={setCompany} CompanyList={CompanyList} authNum={authNum} setAuthNum={setAuthNum}
                                                         isName={isName} isEmail={isEmail}
                                                         isPw={isPw} isPwConfirm={isPwConfirm} isSendAuth={isSendAuth}
                                                         isPhone={isPhone} setIsAuthNum={setIsAuthNum} setIsSendAuth={setIsSendAuth}
                                                         />

                                        <OnSubmitService name={name} userid={userid} password={password}  PwConfirm={PwConfirm}
                                                         phone={phone} authNum={authNum} setRes={setRes} CheckCompany={CheckCompany} company={company}
                                                         isExclusive={isExclusive} isAuthNum={isAuthNum} isSendAuth={isSendAuth} isName={isName} isEmail={isEmail}
                                                         isPw={isPw} isPwConfirm={isPwConfirm}
                                                         isPhone={isPhone}/>

                                    </Grid>
                                </FormControl>
                            </Boxs>

        </>
    )
}