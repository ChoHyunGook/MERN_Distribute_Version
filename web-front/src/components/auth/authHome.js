import background from "../../images/bg_yellow_flower_field.jpg";
import {Box, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import Button from "@mui/material/Button";
import {authLogin} from "../../api";

export default function AuthHome(){

    const theme = createTheme();

    const [authId,setAuthId] =useState('')
    const [password, setPassword] = useState('')
    const [res, setRes] = useState('')

    const onChangeId = (e)=>{
        setAuthId(e.target.value)
    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value)
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()

        let data = {authId: authId, password: password}

        setRes(data)

        authLogin(data)
            .then(res => {
                setRes(res.data)
                alert('관리자 로그인 성공')
                window.location.replace('/')
            })
            .catch(function (err) {
                alert(JSON.stringify(err.response.data))
            })

    }



    return(<>
        <div style={{
            backgroundImage: `url(${background})`,
            width:'100%',height:'100%', position:'fixed'}}>
            <ThemeProvider theme={theme}>
                <div style={{display:'flex',alignItems:'center',flexDirection:"column"}}>
            <Box
                component="form"
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    height: '600px',
                    width: '500px',
                    borderRadius:'0.5rem',
                    border:1,
                    borderColor:'grey.500'

                }}>
                <img alt="No Images" src="images/img_splash_title.png"
                     style={{
                         display:'flex',
                         alignItems: "center",
                         width:250,
                         marginTop:30,
                         paddingBottom:20
                     }}/>
                <Typography component="h1" variant="h5" sx={{paddingBottom:2}}>
                    관리자 로그인
                </Typography>
                <Divider color="#696969" sx={{height: 2, width: '400px'}}></Divider><br/>
                    <TextField
                        value={authId}
                        margin="normal"
                        required
                        sx={{width:400}}
                        label="관리자 ID"
                        name="userid"
                        autoFocus
                        onChange={onChangeId}
                    />
                <TextField
                    value={password}
                    margin="normal"
                    required
                    sx={{width:400}}
                    label="관리자 Password"
                    type="password"
                    onChange={onChangePassword}
                />
                <Button
                    onClick={onSubmitHandler}
                    disabled={authId.length<5 || password.length<5}
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 5, mb: 2,
                        width:400,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    관리자 로그인
                </Button>

            </Box>
                </div>
            </ThemeProvider>
        </div>
    </>

    )
}