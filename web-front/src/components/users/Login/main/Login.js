import * as React from 'react';
import {useEffect, useState} from "react";
import {signAllCheck} from "../../../../api";
import LoginComponent from "../component/LoginComponent";
import Layout from "../../../../containers/main/Layout";





function LoginPage() {

    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");

    const [EmailMessage, setEmailMessage] = useState("")
    const [PwMessage, setPwMessage] = useState("")

    const [isEmail, setIsEmail] = useState(false)
    const [isPw, setIsPw] = useState(false)

    const [res, setRes] = useState('')


    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signAllCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                })

        }catch (err){
        }
    }, [])


    return (
        <>
            <Layout>
            {isLogin ? (
                window.location.replace('/')
                ) : (
                    <LoginComponent userid={userid} setUserid={setUserid} password={password} setPassword={setPassword}
                                    EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                    setPwMessage={setPwMessage} setIsEmail={setIsEmail} setIsPw={setIsPw} setRes={setRes}/>

                )}
            </Layout>
        </>
    )
}

export default LoginPage;

