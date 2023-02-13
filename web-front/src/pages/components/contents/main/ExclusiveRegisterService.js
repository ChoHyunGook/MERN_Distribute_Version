import {createTheme, ThemeProvider} from "@mui/material/styles";
import { Typography} from "@mui/material";
import LgHelloService from "../../../services/lgHelloService";
import LgUService from "../../../services/lgUService";
import S1Service from "../../../services/s1Service";
import RaemianService from "../../../services/raemianService";
import CowayService from "../../../services/cowayService";
import React from "react";


export default function ExclusiveRegisterService(){

    const theme = createTheme({
        typography: {
            // In Chinese and Japanese the characters are usually larger,
            // so a smaller fontsize may be appropriate.
            fontSize: 15,
        },
    });

    return(
        <>
            <div style={{display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                }}>
                <ThemeProvider theme={theme}>
                    <Typography  color='white' component="h3" variant="h5" sx={{marginTop:15}}>
                        고객사 전용 회원가입 서비스입니다.
                    </Typography>
                    <div style={{alignItems: "center", display: "flex", padding:40}}>
                        <LgHelloService/>
                        <div style={{width: 15}}></div>
                        <LgUService/>
                        <div style={{width: 15}}></div>
                        <S1Service/>
                        <div style={{width: 15}}></div>
                        <RaemianService/>
                        <div style={{width: 15}}></div>
                        <CowayService/>
                        <div style={{width: 15}}></div>
                    </div>
                    <div style={{height:180}}></div>
                </ThemeProvider>
            </div>

        </>
    )
}