import * as React from 'react';
import {useEffect, useState} from "react";
import { signCheck} from "../../../../../api";
import ChangePwComponent from "../../component/FindPwComponent/changePwComponent";
import Layout from "../../../../../containers/main/Layout";


function ChangePw(){

    const [Pw,setPw] = useState("")
    const [PwConfirm, setPwConfirm] = useState("")

    const [PwMessage, setPwMessage] = useState("")
    const [PwConfirmMessage, setPwConfirmMessage] =useState("")

    const [isPw, setIsPw] = useState(false)
    const [isPwConfirm, setIsPwConfirm] = useState(false)


    const [res,setRes] = useState("")

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data);
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
                <ChangePwComponent setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                   setPwConfirm={setPwConfirm} setPwConfirmMessage={setPwConfirmMessage}
                                   setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage}
                                   PwConfirmMessage={PwConfirmMessage} setRes={setRes} Pw={Pw} PwConfirm={PwConfirm}
                                   isPw={isPw} isPwConfirm={isPwConfirm}/>
            )}
            </Layout>
        </>
    )

}
export default ChangePw