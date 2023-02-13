import { Typography} from "@mui/material";
import RequiredLoginService from "../service/RequiredLoginService";


export default function RequiredLoginComponent(){
    return(
        <>
            <Typography color="white" component="h2" variant="h7" align="left" sx={{
                marginTop:40,
                display: 'flex',
                float: 'left'
            }}>
                로그인 후 사용 가능합니다.
            </Typography><br/>
            <RequiredLoginService />
        </>
    )
}