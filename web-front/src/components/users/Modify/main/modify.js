import React, {useEffect, useState} from 'react'
import {companyCheck, signCheck,  userInfoCheck} from "../../../../api";
import RequiredLogin from '../../RequiredService/main/RequiredLogin';
import ModifyComponent from "../component/modifyComponent";
import Layout from "../../../../containers/main/Layout";


function Modify(){

    const [userData, setUserData]= useState([])

    const [CheckCompany, setCheckCompany] = useState('')
    const [srcAddress,setSrcAddress] =useState('')


    useEffect(()=>{
        userInfoCheck()
            .then((res)=>{
                setUserData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])



    useEffect(() => {
        companyCheck()
            .then((res) => {
                if (res.data === 'LG HelloVision') {
                    setSrcAddress("../../../../images/lg_hello.png")
                    setCheckCompany('LG HelloVision')

                }else if(res.data === 'Samsung S1'){
                    setSrcAddress("../../../../images/s1.png")
                    setCheckCompany('Samsung S1')

                }else if(res.data === 'LG U+'){
                    setSrcAddress("../../../../images/lgu.png")
                    setCheckCompany('LG U+')

                }else if(res.data === 'RAEMIAN'){
                    setSrcAddress("../../../../images/raemian.png")
                    setCheckCompany('RAEMIAN')

                }else if(res.data === 'THE WAVE'){
                    setSrcAddress("../../../../images/the_wave.png")
                    setCheckCompany('THE WAVE')

                }else if(res.data === 'ETCETRA'){
                    setSrcAddress("../../../../images/etcetra.png")
                    setCheckCompany('ETCETRA')

                }else if(res.data === 'Samsung C&T'){
                    setSrcAddress("../../../../images/samsung_mulsan.png")
                    setCheckCompany('Samsung C&T')
                }else if(res.data === 'Coway'){
                    setSrcAddress("../../../../images/coway.png")
                    setCheckCompany('Coway')
                }else{
                    //블라우비트
                    setSrcAddress("../../../../images/new_blaubit.png")
                    setCheckCompany('Blaubit')
                }
            })
    }, [])


    //로그인 체크

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
                    console.log(err)
                })

        }catch (err){
            console.log(err)
        }
    }, [])


    return(
        <div>
            <Layout>
            {isLogin ? (
                <>
                    <ModifyComponent userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                </>
            ):(
               <RequiredLogin />
            )}
            </Layout>
        </div>
    )
}
export default Modify