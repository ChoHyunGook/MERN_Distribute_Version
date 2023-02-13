import React, {useEffect, useState} from 'react'
import {signCheck} from "../../../../../api";
import FindPwSelectComponent from "../../component/FindPwComponent/findPwSelectComponent";
import Layout from "../../../../../containers/main/Layout";


function FindPwSelect(){



    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")


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
        <div>
            <Layout>
            {isLogin ? (
                window.location.replace('/')
                ):(
                    <FindPwSelectComponent Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}/>
                )}
            </Layout>
        </div>

    )
}
export default FindPwSelect