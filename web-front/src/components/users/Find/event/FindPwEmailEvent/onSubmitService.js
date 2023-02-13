import {changePasswordPage} from "../../../../../api";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";


export default function OnSubmitService(props){

    const { signNum, userid, setRes}=props

    const checkSignHandler = (e) => {
        e.preventDefault()
        let data = {
            authNum: signNum,
            userid: userid
        }

        changePasswordPage(data)
            .then(res=>{
                setRes(res.data)
                alert(res.data)
                window.location.replace('/changePw')

            }).catch(function (err){
            alert(err.response.data)
        })
    }

    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Button
                    style={{height:45}}
                    type="submit"
                    variant="contained"
                    disabled={signNum.length<6 || false}
                    fullWidth
                    onClick={checkSignHandler}
                >
                    다음
                </Button>
            </Grid>
        </>
    )

}