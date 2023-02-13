import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import {signAllCheck} from "../../../api";


export default function BeforeLoginService(){


    const joinButton = (e) =>{
        e.preventDefault()
        signAllCheck()
            .then((res)=>{
                console.log(res.data)
            })
            .catch(function (err){
            })
        window.location.replace("/agreeRegister")
    }


    const loginButton = (e) =>{
        e.preventDefault()
        window.location.replace("/login")
    }

    return(
        <>
                <Button
                    onClick={joinButton}
                    variant="text"
                    size="large"
                >
                    <Typography color="black" component="h2" variant="h6">
                        회원가입
                    </Typography>
                </Button>
            <div style={{width:20}}/>
                <Button
                    onClick={loginButton}
                    variant="text"
                    size="large"
                >
                    <Typography color="black" component="h2" variant="h6">
                        로그인
                    </Typography>
                </Button>
        </>
    )
}