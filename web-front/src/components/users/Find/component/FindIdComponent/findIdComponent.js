import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import FindIdService from "../../service/FindId/findIdService";




export default function FindIdComponent(props){

    const {Name, setName, Phone, setPhone, signNum, setSignNum, PhoneMessage, setPhoneMessage,
        setIsPhone, sign, setSign, setRes } = props

    const theme = createTheme();


    return(
        <>
            <body style={{
                backgroundImage: `url(${background})`,
                display: 'flex',
                flexDirection:"column",
                alignItems:"center",
                width:'auto',
                paddingBottom:300
            }}><br/>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '450px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"250px"
                             }}/>
                        <br/>
                        <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                            아이디 찾기
                        </Typography>
                        <Divider color="#696969" sx={{ height: 2, width: '400px' }}></Divider>

                        <FindIdService Name={Name} setName={setName} Phone={Phone} setPhone={setPhone}
                                        signNum={signNum} setSignNum={setSignNum} PhoneMessage={PhoneMessage}
                                        setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} sign={sign}
                                        setSign={setSign} setRes={setRes}/>


                    </Box>
                </Container>
            </ThemeProvider>
            </body>
        </>
    )
}