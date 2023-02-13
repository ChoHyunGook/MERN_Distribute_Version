import React, {useEffect, useState} from "react";
import {authHomeCheck, signAllCheck} from "../api";
import AfterLoginComponent from "./components/AfterLoginComponent";
import BeforeLoginComponent from "./components/BeforeLoginComponent";
import Layout from "../containers/main/Layout";
import AuthHome from "../components/auth/authHome";


export default function Home(){


    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(()=>{
        try{
            signAllCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
        }catch (err){
            console.log(err)
            window.location.replace("/login")
        }
    },[user])


    //관리자 인증
    const [isAuth, setIsAuth]=useState(false)
    const [res, setRes] =useState('')

    useEffect(()=>{
        try{
            authHomeCheck()
                .then((res)=>{
                    setIsAuth(true)
                    setRes(res.data)
                })
                .catch((err)=>{
                })
        }catch (err){
        }
    },[])


    return(
        <>
            {isAuth ? (
                <Layout>
                    {isLogin ? (
                        <AfterLoginComponent />
                    ) : (
                        <BeforeLoginComponent />
                    )}
                </Layout>
            ):(
                <AuthHome />
            )}

        </>
    )

}