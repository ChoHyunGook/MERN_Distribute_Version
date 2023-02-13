import background from "../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LoginService from "../service/LoginService";
import FooterFindRegister from "../service/FooterFindRegister";
import * as React from "react";
import {Typography} from "@mui/material";
import Divider from "@mui/material/Divider";


export default function LoginComponent(props){

    const { userid, setUserid, password, setPassword, EmailMessage,
        setEmailMessage, PwMessage, setPwMessage, setIsEmail, setIsPw, setRes  } = props

    const theme = createTheme();


    return(
        <>
            <div style={{backgroundImage:`url(${background})`,paddingTop:10,paddingBottom:250}}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '620px',
                            width: '500px',
                            borderRadius:'0.5rem',
                            border:1,
                            borderColor:'grey.500'

                        }}
                    ><br/><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"auto",
                                 height:'50px'
                             }}/>
                        <br/><br/>
                        <Typography component="h1" variant="h5">
                            로그인
                        </Typography><br/>
                        <Divider color="#696969" sx={{height: 2, width: '400px'}}></Divider><br/>
                        <Box component="form"  noValidate sx={{ mt: 1 }} >
                            <Container fixed maxWidth="xs">

                                <LoginService userid={userid} setUserid={setUserid} password={password} setPassword={setPassword}
                                              EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                              setPwMessage={setPwMessage} setIsEmail={setIsEmail} setIsPw={setIsPw} setRes={setRes}/>

                                <FooterFindRegister />

                            </Container>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            </div>
        </>
    )
}