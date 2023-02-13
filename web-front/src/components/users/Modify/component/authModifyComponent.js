import background from "../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Box, Typography} from "@mui/material";
import * as React from "react";
import AuthModifyService from "../service/AuthModifyService";
import {useEffect, useState} from "react";


export default function AuthModifyComponent(props){

    const theme = createTheme();
    const { userData, srcAddress, CheckCompany } = props;

    const [isMarginTopsSet, setIsMarginTopSet] =useState(false)

    useEffect(()=>{
        if(CheckCompany === 'LG HelloVision'){
            setIsMarginTopSet(true)
        }else if(CheckCompany === 'LG U+'){
            setIsMarginTopSet(true)
        }else if(CheckCompany === 'Blaubit'){
            setIsMarginTopSet(true)
        }else {
            setIsMarginTopSet(false)
        }
    },[])


    return(
        <>
            <body style={{
                backgroundImage: `url(${background})`,
                width:'100%',
                height:'100%',
                position:'fixed',
                display: 'flex',
                flexDirection:"column",
                alignItems:"center",}}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        component='form'
                        sx={{
                            marginTop: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '500px',
                            borderRadius:'0.5rem',
                            border:1,
                            borderColor:'grey.500'

                        }}
                    ><br/>
                        {isMarginTopsSet ? (
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 5,
                                     paddingBottom:30
                                 }}/>
                        ):(
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 30,
                                     paddingBottom:40
                                 }}/>
                            )}

                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"250px",
                                 paddingBottom:30
                             }}/>
                        <div style={{paddingBottom:40}}>
                            <Typography component="h3" variant="h7">
                                고객정보 수정 전 비밀번호를 입력해주세요.
                            </Typography>
                        </div>
                        <AuthModifyService userData={userData}/>
                    </Box>
                </ThemeProvider>
            </body>
        </>
    )
}