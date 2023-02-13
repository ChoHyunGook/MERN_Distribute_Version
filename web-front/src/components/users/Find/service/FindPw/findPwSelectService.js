import {Button, Grid, Typography} from "@mui/material";


export default function FindPwSelectService(props){

    const {setEmail,setPhone, Email, Phone} = props

    const EmailHandler = (e) => {
        setEmail(e.target.value)
        window.location.replace("/findPwEmail")

    }
    const PhoneHandler = (e) => {
        setPhone(e.target.value)
        window.location.replace("/findPwPhone")
    }

    return(
        <>
            <Grid item xs={6}>
                <Button
                    variant="outlined"
                    value={Email}
                    sx={{
                        color:'#becfd1',
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '300px',
                        width: '270px',
                        borderRadius:'1rem',
                        border:1,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'white',
                            borderColor:'#008DDC'
                        }
                    }}
                    onClick={EmailHandler}
                > <Typography component="h2" variant="h5">
                    이메일 인증
                </Typography>
                    <img alt="No Images" src="images/email.png"
                         style={{
                             marginTop:30,
                             display:'flex',
                             alignItems:'top center',
                             width:'230px',
                             height:'170px'}
                         }/>
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    value={Phone}
                    variant="outlined"
                    sx={{
                        color:'#becfd1',
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '300px',
                        width: '270px',
                        borderRadius:'1rem',
                        border:0.5,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'white',
                            borderColor:'#008DDC'
                        }
                    }}
                    onClick={PhoneHandler}
                ><Typography component="h2" variant="h5">
                    핸드폰 인증
                </Typography>
                    <img alt="No Images" src="images/phone2.png"
                         style={{
                             marginTop:30,
                             display:'flex',
                             alignItems:'top center',
                             width:'180px',
                             height:'170px'}
                         }/>
                </Button>
            </Grid>
        </>
    )
}