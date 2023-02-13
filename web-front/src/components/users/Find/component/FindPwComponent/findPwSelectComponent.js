import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { Container, Grid, Typography} from "@mui/material";
import React from "react";
import FindPwSelectService from "../../service/FindPw/findPwSelectService";


export default function FindPwSelectComponent(props){

    const {Email, setEmail, Phone, setPhone}= props

    const theme = createTheme({
        typography: {
            // In Chinese and Japanese the characters are usually larger,
            // so a smaller fontsize may be appropriate.
            fontSize: 15,

        },
    });


    return(
        <>
            <body style={{
                backgroundImage: `url(${background})`,
                display: 'flex',
                flexDirection:"column",
                alignItems:"center",
                paddingBottom:280
            }}><br/>
            <div style={{
                marginTop:70,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                height: '500px',
                width: '600px',
                borderRadius:'1rem'
            }}>
                <ThemeProvider theme={theme}>
                    <img alt="No Images" src="images/img_logo_main.png"
                         style={{
                             marginTop: 20,
                             display:'flex',
                             alignItems: "center",
                             width:"250px"
                         }}/>
                    <Typography component="h3" variant="h7"
                                style={{
                                    marginTop:20}}>
                        비밀번호 인증유형
                    </Typography>
                    <Container maxWidth="sm">
                        <Grid container spacing={2}>
                            <FindPwSelectService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}/>
                        </Grid>
                    </Container>
                </ThemeProvider>
            </div>
            </body>
        </>
    )
}