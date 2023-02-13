import { Typography} from "@mui/material";
import RequiredTermsService from "../service/RequiredTermsService";


export default function RequiredTermsComponent(){
    return(
        <>
            <Typography color="white" component="h2" variant="h7" align="left" sx={{
                marginTop:40,
                display: 'flex',
                float: 'left'
            }}>
                잘못된 경로입니다. 회원가입 약관동의 후 접근해주세요.
            </Typography><br/>
            <RequiredTermsService />
        </>
    )
}