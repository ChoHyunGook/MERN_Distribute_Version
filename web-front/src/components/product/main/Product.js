import React, {useEffect, useState} from 'react'
import Layout from "../../../containers/main/Layout";
import {signAllCheck} from "../../../api";
import ProductComponent from "../component/productComponent";





function Product(){

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

    return(
        <>
            <Layout>
            {isLogin ? (
                    <ProductComponent />
            ):(
                <ProductComponent />
                )}
            </Layout>
        </>
    )
}
export default Product