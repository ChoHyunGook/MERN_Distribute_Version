import * as React from 'react';
import {useEffect, useState} from "react";
import {signCheck} from "../../../../../api";
import FindPwPhoneComponent from "../../component/FindPwComponent/findPwPhoneComponent";
import Layout from "../../../../../containers/main/Layout";


function FindPwPage(){


    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [signNum, setSignNum] = useState("");
    const [sign, setSign] =useState("")


    const [EmailMessage, setEmailMessage]= useState("")
    const [PhoneMessage, setPhoneMessage] = useState("")

    const [isEmail, setIsEmail]= useState(false)
    const [isPhone, setIsPhone] = useState(false)

    const [res, setRes]=useState("")


    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
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
    }, [user])

    return(
        <>
            <Layout>
            {isLogin ? (
                window.location.replace('/')
                ):(
                    <FindPwPhoneComponent Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}
                                          signNum={signNum} setSignNum={setSignNum} setEmailMessage={setEmailMessage}
                                          PhoneMessage={PhoneMessage} setPhoneMessage={setPhoneMessage} sign={sign}
                                          setSign={setSign} isEmail={isEmail} setIsEmail={setIsEmail}
                                          setIsPhone={setIsPhone} setRes={setRes}/>
                )}
            </Layout>
        </>
    )
}
export default FindPwPage