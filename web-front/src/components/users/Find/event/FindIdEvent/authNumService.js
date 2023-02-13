import {FormHelperText, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import {sendFindIdSMS} from "../../../../../api";
import styled from "styled-components";


const FormHelperTextsBLUE = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #0f27d9 !important;
`;

export default function AuthNumService(props){

    const { Phone, Name, setSign, setSignNum, sign, signNum } = props

    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            phoneNum:Phone,
            name:Name,
            phoneSubject:'아이디 찾기'
        }
        sendFindIdSMS(data)
            .then((res)=>{
                setSign(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.response.data)
            })
    }

    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
    }

    return(
        <>
            <Grid item xs={2}>
                <Button
                    value={sign}
                    type="submit"
                    variant="outlined"
                    sx={{
                        marginTop: 2,
                        width: '90px',
                        height: '55px',
                        border: 3,
                        "&.MuiButton-root:hover": {
                            color: '#008DDC',
                            backgroundColor: '#c7ebff',
                            borderColor: '#008DDC'
                        }
                    }}
                    onClick={sendSMSHandler}
                    disabled={Phone.length<13}
                    fullWidth
                >
                    인증받기
                </Button>
            </Grid>
            <Grid item xs={1}/>

            <Grid item xs={12}/>

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
                <FormHelperTextsBLUE>{sign}</FormHelperTextsBLUE><br/>
            </Grid>
            <Grid item xs={1}/>
        </>
    )
}