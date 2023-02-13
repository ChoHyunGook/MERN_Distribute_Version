import React, {useEffect, useState} from 'react'
import { exclusiveCompanyCheck, signCheck} from "../../../../api";
import AgreeRegisterComponent from "../component/AgreeRegisterComponent";
import Layout from "../../../../containers/main/Layout";


function JoinAgreePage(){

    const [checkList, setCheckList] = useState([]);

    const [srcAddress,setSrcAddress] =useState('')


    useEffect(() => {
        exclusiveCompanyCheck()
            .then((res) => {
                //alert(res.data)
                if (res.data === 'LG HelloVision') {
                    setSrcAddress("../../../../../../images/lg_hello.png")
                }else if(res.data === 'Samsung S1'){
                    setSrcAddress("../../../../../../images/s1.png")
                }else if(res.data === 'LG U+'){
                    setSrcAddress("../../../../../../images/lgu.png")
                }else if(res.data === 'RAEMIAN'){
                    setSrcAddress("../../../../../../images/raemian.png")
                }else if(res.data === 'THE WAVE'){
                    setSrcAddress("../../../../../../images/the_wave.png")
                }else if(res.data === 'ETCETRA'){
                    setSrcAddress("../../../../../../images/etcetra.png")
                }else if(res.data === 'Samsung C&T'){
                    setSrcAddress("../../../../../../images/samsung_mulsan.png")
                }else if(res.data === 'Coway'){
                    setSrcAddress("../../../../../../images/coway.png")
                }else if(res.data === 'Blaubit'){
                    //블라우비트
                    setSrcAddress("../../../../../../images/new_blaubit.png")
                }else{
                    setSrcAddress("")
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
                    <AgreeRegisterComponent checkList={checkList} setCheckList={setCheckList}
                                            srcAddress={srcAddress}/>
                )}
            </Layout>
        </div>
    )
}

export default JoinAgreePage

