import {Button, Typography} from "@mui/material";


export default function RequiredLoginService(){
    return(
        <>
            <Button
                variant="outlined"
                href="/login"
                sx={{
                    marginTop:2,
                    fontStyle:"inherit",
                    fontSize:'18px',
                    width:'250px',
                    height:'60px',
                    borderColor:"white"
                }}>
                <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                    marginTop:0.5,
                    display: 'flex',
                    float: 'left'
                }}>
                    로그인 하러가기
                </Typography>
            </Button>
        </>
    )
}