import {findEditPassword} from "../../../../../api";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as React from "react";


export default function OnSubmitService(props){

    const { setRes, Pw, PwConfirm, isPw, isPwConfirm } = props
    const completePW = (e) =>{
        e.preventDefault()
        let data = {password: Pw}

        findEditPassword(data)
            .then(res=>{
                setRes(res.data)
                alert('비밀번호 변경완료. 로그인페이지로 이동됩니다.')
                window.location.replace('/login')
            })
            .catch((err)=>{
                alert(err.response.data)
            })


    }

    return (
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Button
                    size= "large"
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 ,
                        justifyContent: 'center',
                        alignItems: 'center' }}
                    disabled={Pw.length<8 || PwConfirm.length<8 || isPw === false || isPwConfirm === false}
                    fullWidth
                    onClick={completePW}
                >
                    비밀번호변경
                </Button>
            </Grid>
            <Grid item xs={1}/>
        </>
    )
}