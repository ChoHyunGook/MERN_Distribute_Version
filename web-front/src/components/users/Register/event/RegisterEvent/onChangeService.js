import {FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import React from "react";
import OnChangeEvent from "../AgreeRegisterEvent/OnChangeEvent.js";


export default function OnChangeService(props){

    const {name, setName, userid, setUserId, password, setPassword, PwConfirm, setPwConfirm,
        phone, setPhone, NameMessage, setNameMessage, EmailMessage, setEmailMessage, PwMessage,
        setPwMessage, PwConfirmMessage, setPwConfirmMessage, PhoneMessage, setPhoneMessage,setIsName, setIsEmail,
        setIsPw, setIsPwConfirm,setIsPhone, CheckCompany,isExclusive, company, setCompany,CompanyList,
        authNum,setAuthNum,isName,isEmail,isPw,isPwConfirm,isPhone,setIsAuthNum,setIsSendAuth, isSendAuth}=props

    const onChangeCompany = (e) =>{
        setCompany(e.target.value)
    }


    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                {isExclusive ? (
                    <TextField
                        value = {CheckCompany}
                        required
                        fullWidth
                        id="company"
                        name="company"
                        label="소속 회사"
                        disabled
                    />
                ):(
                    <FormControl sx={{width:415}}>
                        <InputLabel>소속(회사) *</InputLabel>
                        <Select
                            value={company}
                            name="company"
                            onChange={onChangeCompany}
                            input={<OutlinedInput label="name" />}
                        >
                            {CompanyList.map((item) => (
                                <MenuItem
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </Grid>
            <Grid item xs={1}/>
            <OnChangeEvent name={name} setName={setName} userid={userid} setUserId={setUserId} password={password}
                           setPassword={setPassword} PwConfirm={PwConfirm} setPwConfirm={setPwConfirm}
                           phone={phone} setPhone={setPhone} NameMessage={NameMessage} setNameMessage={setNameMessage}
                           EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                           setPwMessage={setPwMessage} PwConfirmMessage={PwConfirmMessage}
                           setPwConfirmMessage={setPwConfirmMessage} PhoneMessage={PhoneMessage}
                           setPhoneMessage={setPhoneMessage} setIsName={setIsName} setIsEmail={setIsEmail}
                           setIsPw={setIsPw} setIsPwConfirm={setIsPwConfirm} setIsPhone={setIsPhone}
                           authNum={authNum} setAuthNum={setAuthNum} isName={isName} isEmail={isEmail}
                           isPw={isPw} isPwConfirm={isPwConfirm} isPhone={isPhone} setIsAuthNum={setIsAuthNum}
                           setIsSendAuth={setIsSendAuth} isSendAuth={isSendAuth}/>
        </>
    )
}