import { Grid} from "@mui/material";
import Box from "@mui/material/Box";
import OnChangeService from "../../event/FindPwEmailEvent/onChangeService";
import AuthNumService from "../../event/FindPwEmailEvent/authNumService";
import OnSubmitService from "../../event/FindPwEmailEvent/onSubmitService";


export default function FindPwEmailService(props){


    const { Name, setName, userid, setUserid, signNum, setSignNum, setMail, setRes, NameMessage,
        setNameMessage,  setIsName,  setIsEmail, setEmailMessage, EmailMessage } = props




    return(
        <>
            <Box component="form"  noValidate  sx={{ mt: 1 }} >
                <Grid container spacing={1}>

                    <OnChangeService setName={setName} Name={Name} setIsName={setIsName} setNameMessage={setNameMessage}
                                     setUserid={setUserid} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                     NameMessage={NameMessage} userid={userid} EmailMessage={EmailMessage}/>

                    <AuthNumService Name={Name} userid={userid} setMail={setMail} setSignNum={setSignNum} signNum={signNum}/>

                    <OnSubmitService signNum={signNum} userid={userid} setRes={setRes}/>

                </Grid>
            </Box>
        </>
    )
}