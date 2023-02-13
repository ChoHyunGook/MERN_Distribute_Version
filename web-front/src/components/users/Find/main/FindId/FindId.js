import React, {useEffect, useState} from 'react';
import {signCheck} from "../../../../../api";
import FindIdComponent from "../../component/FindIdComponent/findIdComponent";
import Layout from "../../../../../containers/main/Layout";


function FindIdPage(){

    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [signNum, setSignNum] = useState("");

    const [PhoneMessage, setPhoneMessage] = useState("")

    const [isPhone, setIsPhone] = useState(false)
    const [sign, setSign] =useState("")
    const [result,setRes] = useState('')



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
        <div>
            <Layout>
            {isLogin ? (
                window.location.replace('/')
                ):(
                    <FindIdComponent Name={Name} setName={setName} Phone={Phone} setPhone={setPhone}
                                     signNum={signNum} setSignNum={setSignNum} PhoneMessage={PhoneMessage}
                                     setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} sign={sign}
                                     setSign={setSign} setRes={setRes} />
                )}
            </Layout>


        </div>
        
    )
}
export default FindIdPage
