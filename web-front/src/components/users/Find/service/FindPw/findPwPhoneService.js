import { Grid} from "@mui/material";
import Box from "@mui/material/Box";
import OnChangeService from "../../event/FindPwSMSEvent/onChangeService";
import AuthNumService from "../../event/FindPwSMSEvent/authNumService";
import OnSubmitService from "../../event/FindPwSMSEvent/onSubmitService";





export default function FindPwPhoneService(props){

    const { Email, setEmail, Phone, setPhone, signNum, setSignNum, setEmailMessage, PhoneMessage, setPhoneMessage,
        sign, setSign, isEmail, setIsEmail, setIsPhone, setRes }=props






    return(
        <>
            <Box component="form" noValidate sx={{mt: 1}}>

                <Grid container spacing={1}>

                    <OnChangeService setEmail={setEmail} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                     setPhone={setPhone} setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone}
                                     Email={Email} isEmail={isEmail} Phone={Phone} PhoneMessage={PhoneMessage}/>

                    <AuthNumService Email={Email} Phone={Phone} setSign={setSign} setSignNum={setSignNum} sign={sign}
                                    signNum={signNum}/>

                    <OnSubmitService Email={Email} signNum={signNum} setRes={setRes}/>

                </Grid>
            </Box>
        </>
    )
}
