import Footer from "./Footer";
import React, {useEffect, useState} from 'react'
import {Header} from "../index";
import {authHomeCheck} from "../../api";
import AuthHome from "../../components/auth/authHome";

export default function Layout( {children} ){

    //관리자 인증
    const [isAuth, setIsAuth]=useState(false)

    useEffect(()=>{
        try{
            authHomeCheck()
                .then((res)=>{
                    console.log(res.data)
                    setIsAuth(true)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }catch (err){
        }
    },[])


    return(
        <>
            {isAuth ? (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            ):(
                <AuthHome />
            )}

        </>
    )

}