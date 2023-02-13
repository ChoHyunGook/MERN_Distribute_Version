import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FindPwEmailService from "../../service/FindPw/findPwEmailService";




const theme = createTheme();

export default function FindPwEmailComponent(props){

    const { Name, setName, userid, setUserid, signNum, setSignNum, setMail, setRes, NameMessage,
        setNameMessage,  setIsName,  setIsEmail, setEmailMessage, EmailMessage } = props


    return(
        <>
            <div style={{backgroundImage: `url(${background})`,}}>
                <div style={{
                    display: 'flex',
                    flexDirection:"column",
                    alignItems:"center",
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
                                    height: '550px',
                                    width: '450px',
                                    borderRadius:'0.5rem'
                                }}
                            ><br/>
                                <img alt="No Images" src="images/img_logo_main.png"
                                     style={{
                                         display:'flex',
                                         alignItems: "center",
                                         width:"250px"
                                     }}/><br/>
                                <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                    E-mail로 비밀번호 찾기
                                </Typography>
                                <Divider color="#696969" sx={{ height: 2, width: '400px' }}></Divider><br/>


                                <FindPwEmailService Name={Name} setName={setName} userid={userid} setUserid={setUserid}
                                                    signNum={signNum} setSignNum={setSignNum} setMail={setMail} setRes={setRes}
                                                    NameMessage={NameMessage} setNameMessage={setNameMessage}
                                                    setIsName={setIsName} setIsEmail={setIsEmail}
                                                    setEmailMessage={setEmailMessage} EmailMessage={EmailMessage}/>


                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
            </div>
        </>


    )

}