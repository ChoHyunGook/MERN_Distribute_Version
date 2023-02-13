import * as React from "react";
import OnChangeService from "../event/onChangeService";
import OnSubmitService from "../event/onSubmitService";





export default function LoginService(props){

    const { userid, setUserid, password, setPassword, EmailMessage,
        setEmailMessage, PwMessage, setPwMessage, setIsEmail, setIsPw, setRes  } = props



    return(
        <>
            <OnChangeService userid={userid} setUserid={setUserid} password={password}
                             setPassword={setPassword} EmailMessage={EmailMessage}
                             setEmailMessage={setEmailMessage} PwMessage={PwMessage} setPwMessage={setPwMessage}
                             setIsEmail={setIsEmail} setIsPw={setIsPw}/>

            <OnSubmitService userid={userid} password={password} setRes={setRes} />
        </>
    )
}