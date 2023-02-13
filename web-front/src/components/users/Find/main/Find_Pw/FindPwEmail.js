import * as React from 'react';
import {useEffect, useState} from "react";
import {signCheck} from "../../../../../api";
import FindPwEmailComponent from "../../component/FindPwComponent/findPwEmailComponent";
import Layout from "../../../../../containers/main/Layout";


function FindPwPage(){


    const [Name, setName] = useState("")
    const [userid, setUserid] = useState("");
    const [signNum, setSignNum] = useState("");
    const [mail, setMail] = useState('')
    const [res,setRes] = useState('')

    const [NameMessage, setNameMessage]= useState("")
    const [EmailMessage, setEmailMessage]= useState("")

    const [isName, setIsName]= useState(false)
    const [isEmail, setIsEmail]= useState(false)



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
    }, [])


    return(
        <>
            <Layout>
            {isLogin ? (
                window.location.replace('/')
                ):(
                    <FindPwEmailComponent Name={Name} setName={setName} userid={userid} setUserid={setUserid}
                                          signNum={signNum} setSignNum={setSignNum} setMail={setMail} setRes={setRes}
                                          NameMessage={NameMessage} setNameMessage={setNameMessage}
                                          setIsName={setIsName} setIsEmail={setIsEmail}
                                          setEmailMessage={setEmailMessage} EmailMessage={EmailMessage}
                    />
                )}
            </Layout>
        </>
    )
}
export default FindPwPage