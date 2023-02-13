import React, { useEffect, useState} from 'react'
import {signAllCheck} from "../../../api";
import MustLogin from '../../users/RequiredService/main/RequiredLogin'
import Table from "../component/TableComponent";
import Layout from "../../../containers/main/Layout";


function TableComponent(){
    //로그인 체크
    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signAllCheck()
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
                <Table />
            ) : (
               <MustLogin />
            )}
        </Layout>
        </>
        
    )
}
export default TableComponent