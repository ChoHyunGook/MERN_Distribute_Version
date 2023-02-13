import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {agreeTermsConditions} from "../../../../../api";


export default function (props){

    const {disabled}=props

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        let data = {
            termsConditions:'Agree'
        }

        agreeTermsConditions(data)
            .then((res)=>{
                alert(res.data)
                window.location.replace('/register')
            })
            .catch(function (err){
                alert(err)
            })

    }

    return(
        <>
            <br/>
            <>
            <Button disabled={disabled}
                    onClick={onSubmitHandler}
                    autoFocus
                    type="submit"
                    required
                    fullWidth
                    style={
                        disabled
                            ?{backgroundColor:'#859594'}
                            :{backgroundColor:'#1e90ff'}
                    }
            >
                <Typography variant='body2' color="primary.contrastText">
                    다음</Typography>
            </Button><br/><br/>
            </>
        </>
    )
}