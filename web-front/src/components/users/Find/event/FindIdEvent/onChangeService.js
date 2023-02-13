import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";


export default function OnChangeService(props){

    const {setName, setPhone, setPhoneMessage, setIsPhone, Name, Phone, PhoneMessage}  = props

    const onNameHandler = (e) => {
        setName(e.target.value);
    }
    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("올바른 형식이 아닙니다.");
            setIsPhone(false);
        } else {
            setPhoneMessage("");
            setIsPhone(true);
        }
    }
    const addHyphen =(e) =>{
        const currentNumber = e.target.value;
        setPhone(currentNumber);
        if (currentNumber.length === 3 || currentNumber.length === 8) {
            setPhone(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    }

    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TextField
                    value={Name}
                    margin="normal"
                    required
                    fullWidth
                    label="이름"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={onNameHandler}
                />
            </Grid>
            <Grid item xs={1}/>

            <Grid item xs={1}/>
            <Grid item xs={7.5}>
                <TextField
                    fullWidth
                    value={Phone}
                    margin="normal"
                    required
                    name="Phone"
                    label="전화번호( - 빼고 기입)"
                    type="text"
                    error={PhoneMessage === '올바른 형식이 아닙니다.' || false}
                    onChange={addHyphen}
                />
            </Grid>
        </>
    )
}