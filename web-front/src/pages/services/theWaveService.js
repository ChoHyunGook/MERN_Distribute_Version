import {exclusiveCompany} from "../../api";
import {Box, Button, Grid, Typography} from "@mui/material";
import React from "react";


export default function TheWaveService(){

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        let data ={
            company: 'THE WAVE'
        }

        exclusiveCompany(data)
            .then((res)=>{
                alert(res.data)
                window.location.replace('/agreeRegister')
            })
            .catch(function (err){
                console.log(err)
            })

    }

    return(
        <>
            <Grid item xs={6} sm={3}>
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '260px',
                        width: '8',
                        borderRadius:'2rem',
                        border:1,
                        borderColor:'grey.500'
                    }}
                ><img alt="No images" src="images/the_wave.png" style={{
                    marginTop:50, display:'flex',alignItems:"top center",width:'150px',height:'80px',
                    backgroundSize:"cover",backgroundPosition:"top center"}
                }/>
                    <Button
                        onClick={onSubmitHandler}
                        required
                        type="submit"
                        variant="contained"
                        style={{marginTop:50, width:'200px',height:'40px',borderRadius:'1rem'}}
                        >
                        <Typography color="primary.contrastText">
                            회원가입
                        </Typography>
                    </Button>
                </Box>
            </Grid>
        </>
    )
}

window.onpageshow = function(event) {
    if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
        // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
        window.location.replace('/');
    }
}