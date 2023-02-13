import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FindPwPhoneService from "../../service/FindPw/findPwPhoneService";




const theme = createTheme();

export default function FindPwPhoneComponent(props){

    const { Email, setEmail, Phone, setPhone, signNum, setSignNum, setEmailMessage, PhoneMessage, setPhoneMessage,
        sign, setSign, isEmail, setIsEmail, setIsPhone, setRes }=props



    return(
        <>
            <div style={{
                backgroundImage: `url(${background})`,
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                paddingBottom:300
            }}><br/>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '550px',
                            width: '450px',
                            borderRadius: '0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display: 'flex',
                                 alignItems: "center",
                                 width: "250px"
                             }}/><br/>
                        <Typography component="h3" variant="h7" sx={{paddingBottom:1}}>
                            핸드폰으로 비밀번호 찾기
                        </Typography><br/>
                        <Divider color="#696969" sx={{height: 2, width: '400px'}}></Divider><br/>

                        <FindPwPhoneService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}
                                            signNum={signNum} setSignNum={setSignNum} setEmailMessage={setEmailMessage}
                                            PhoneMessage={PhoneMessage} setPhoneMessage={setPhoneMessage} sign={sign}
                                            setSign={setSign} isEmail={isEmail} setIsEmail={setIsEmail}
                                            setIsPhone={setIsPhone} setRes={setRes}/>

                    </Box>
                </Container>
            </ThemeProvider>
            </div>
        </>
    )

}