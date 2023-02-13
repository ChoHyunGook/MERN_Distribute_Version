import {changePasswordPage} from "../../../../../api";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";


export default function OnSubmitService(props){

    const { Email, signNum, setRes} = props

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let data = {
            userid: Email,
            authNum: signNum
        }

        changePasswordPage(data)
            .then(res => {
                setRes(res.data)
                alert('인증완료 비밀번호 변경페이지로 이동합니다.')
                window.location.replace('/changePw')

            }).catch(function (err) {
            alert(err.response.data)
        })

    }

    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Button
                    style={{height: 45}}
                    type="submit"
                    variant="contained"
                    disabled={signNum.length < 6 || false}
                    fullWidth
                    onClick={onSubmitHandler}
                >
                    다음
                </Button>
            </Grid>
        </>
    )
}