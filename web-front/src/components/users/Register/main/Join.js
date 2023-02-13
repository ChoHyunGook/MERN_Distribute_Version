import React, {useEffect, useState} from 'react';
import { exclusiveCompanyCheck, signCheck} from "../../../../api";
import RegisterComponent from "../component/RegisterComponent";
import Layout from "../../../../containers/main/Layout";


function RegisterPage() {

    //기본
    const [name, setName] = useState("");
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [PwConfirm, setPwConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [authNum, setAuthNum] = useState('')
    const CompanyList = ["Blaubit","Samsung S1","RAEMIAN","THE WAVE","LG U+","ETCETRA", "Samsung C&T", "LG HelloVision","Coway"]


    //메세지
    const [NameMessage, setNameMessage] = useState("")
    const [EmailMessage, setEmailMessage] = useState("")
    const [PwMessage, setPwMessage] = useState("")
    const [PwConfirmMessage, setPwConfirmMessage] =useState("")
    const [PhoneMessage, setPhoneMessage] = useState("")


    //상태관리
    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPw, setIsPw] = useState(false)
    const [isPwConfirm, setIsPwConfirm] = useState(false)
    const [isPhone,setIsPhone] = useState(false)
    const [isAuthNum, setIsAuthNum]= useState(false)
    const [isSendAuth, setIsSendAuth]= useState(false)


    const [res, setRes] = useState('')

    const [CheckCompany, setCheckCompany] = useState('')
    const [srcAddress,setSrcAddress] =useState('')


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


    useEffect(() => {
        exclusiveCompanyCheck()
            .then((res) => {
                //alert(res.data)
                if (res.data === 'LG HelloVision') {
                    setSrcAddress("../../../../../images/lg_hello.png")
                    setCheckCompany('LG HelloVision')

                }else if(res.data === 'Samsung S1'){
                    setSrcAddress("../../../../../images/s1.png")
                    setCheckCompany('Samsung S1')

                }else if(res.data === 'LG U+'){
                    setSrcAddress("../../../../../images/lgu.png")
                    setCheckCompany('LG U+')

                }else if(res.data === 'RAEMIAN'){
                    setSrcAddress("../../../../../images/raemian.png")
                    setCheckCompany('RAEMIAN')

                }else if(res.data === 'THE WAVE'){
                    setSrcAddress("../../../../../images/the_wave.png")
                    setCheckCompany('THE WAVE')

                }else if(res.data === 'ETCETRA'){
                    setSrcAddress("../../../../../images/etcetra.png")
                    setCheckCompany('ETCETRA')

                }else if(res.data === 'Samsung C&T'){
                    setSrcAddress("../../../../../images/samsung_mulsan.png")
                    setCheckCompany('Samsung C&T')
                }else if(res.data === 'Coway'){
                    setSrcAddress("../../../../../images/coway.png")
                    setCheckCompany('Coway')
                }else if(res.data === 'Blaubit'){
                    //블라우비트
                    setSrcAddress("../../../../../images/new_blaubit.png")
                    setCheckCompany('Blaubit')
                }else{
                    setSrcAddress('')
                    setCheckCompany('')
                }
            })
    }, [])



    return (
        <>
            <Layout>
            {isLogin ? (
                window.location.replace('/')
                ):(
                    <RegisterComponent name={name} setName={setName} userid={userid} setUserId={setUserId} password={password}
                                       setPassword={setPassword} PwConfirm={PwConfirm} setPwConfirm={setPwConfirm}
                                       phone={phone} setPhone={setPhone} NameMessage={NameMessage} setNameMessage={setNameMessage}
                                       EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                       setPwMessage={setPwMessage} PwConfirmMessage={PwConfirmMessage}
                                       setPwConfirmMessage={setPwConfirmMessage} PhoneMessage={PhoneMessage}
                                       setPhoneMessage={setPhoneMessage} setIsName={setIsName} setIsEmail={setIsEmail}
                                       setIsPw={setIsPw} setIsPwConfirm={setIsPwConfirm} setIsPhone={setIsPhone}
                                       setRes={setRes} CheckCompany={CheckCompany} srcAddress={srcAddress}
                                       company={company} setCompany={setCompany} CompanyList={CompanyList}
                                       authNum={authNum} setAuthNum={setAuthNum} isName={isName} isEmail={isEmail}
                                       isPw={isPw} isPwConfirm={isPwConfirm} isPhone={isPhone} isAuthNum={isAuthNum}
                                       isSendAuth={isSendAuth} setIsAuthNum={setIsAuthNum} setIsSendAuth={setIsSendAuth}/>

                )}
            </Layout>
        </>
    )
}

export default RegisterPage;
