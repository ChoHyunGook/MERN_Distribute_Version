import {Typography} from "@mui/material";
import RequiredAuthModifyService from "../service/RequiredAuthModifyService";


export default function RequiredAuthModifyComponent(){
    return(
        <>
            <Typography color="white" component="h2" variant="h7" align="left" sx={{
                marginTop:40,
                display: 'flex',
                float: 'left'
            }}>
                잘못된 경로입니다. 정보수정 전 비밀번호 인증 후 입장해주세요.
            </Typography><br/>
            <RequiredAuthModifyService />
        </>
    )
}