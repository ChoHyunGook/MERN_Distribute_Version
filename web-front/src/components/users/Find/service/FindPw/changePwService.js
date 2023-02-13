import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import OnSubmitService from "../../event/ChangePwEvent/onSubmitService";
import OnChangeService from "../../event/ChangePwEvent/onChangeService";




export default function ChangePwService(props){

    const { setPw, setPwMessage, setIsPw, setPwConfirm, setPwConfirmMessage, setIsPwConfirm,
        PwMessage, PwConfirmMessage, setRes, Pw, PwConfirm, isPw, isPwConfirm} = props


    return(
        <>
            <Box component="form"  noValidate  sx={{ mt: 1 }} >
                <Grid container spacing={2}>
                    <OnChangeService setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                     setPwConfirm={setPwConfirm} Pw={Pw} setPwConfirmMessage={setPwConfirmMessage}
                                     setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage} PwConfirm={PwConfirm}
                                     PwConfirmMessage={PwConfirmMessage}/>

                    <OnSubmitService setRes={setRes} Pw={Pw} PwConfirm={PwConfirm} isPw={isPw}
                                     isPwConfirm={isPwConfirm}/>
                </Grid>
            </Box>
        </>
    )
}