import { Grid} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import OnChangeService from "../../event/FindIdEvent/onChangeService";
import AuthNumService from "../../event/FindIdEvent/authNumService";
import OnSubmitService from "../../event/FindIdEvent/onSubmitService";


export default function FindIdService(props){

    const { Name, setName, Phone, setPhone, signNum, setSignNum, PhoneMessage, setPhoneMessage,
        setIsPhone, sign, setSign, setRes } = props


    return(
        <>
            <Box component="form"  noValidate sx={{ mt: 1 }} >
                <Grid container spacing={1}>

                    <OnChangeService setName={setName} setPhone={setPhone} PhoneMessage={PhoneMessage}
                                     setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} Name={Name}
                                     Phone={Phone} />

                    <AuthNumService Phone={Phone} Name={Name} setSign={setSign} setSignNum={setSignNum} sign={sign}
                                    signNum={signNum}/>

                    <OnSubmitService Name={Name} Phone={Phone} signNum={signNum} setRes={setRes}/>

                </Grid>
            </Box>
        </>
    )
}