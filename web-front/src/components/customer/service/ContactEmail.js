import {Box, Typography} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import {companyCheck, sendContactMail, signCheck, userInfoCheck} from "../../../api";
import Logo from "../event/logo/Logo";
import Contact from "../event/contact/contact";
import Answer from "../event/answer/answer";
import Company from "../event/company/Company";
import SendInfo from "../event/sendInfo/SendInfo";
import Content from "../event/content/content";
import OnSubmit from "../event/OnSubmit";

export default function ContactEmail(){

    const [contact,setContact] =useState('')
    const [answer, setAnswer] = useState('')
    const [sendInfo,setSendInfo]= useState('')
    const [company,setCompany]=useState('')
    const [infoContent,setInfoContent]=useState('')


    const [defaultValue,setDefaultValue]=useState('')
    const contactList=['서비스 문의','상품 문의','제품 불량 및 A/S','기타문의']
    const answerList=['Email로 답변받기', 'PhoneSMS로 답변받기']
    const CompanyList = ["Blaubit","LG HelloVision","LG U+","Samsung S1","RAEMIAN", "Samsung C&T", "Coway","소속회사 없음"]


    const [sendInfoMessage,setSendInfoMessage]=useState('')


    const [isInfo,setIsInfo]=useState(false)
    const [isInfoContent,setIsInfoContent]=useState(false)
    const [isAnswer,setIsAnswer] = useState(false)
    const [isContact,setIsContact] = useState(false)
    const [isCompany, setIsCompany] = useState(false)
    const [isEmailAnswer,setIsEmailAnswer]=useState(false)
    const [isPhoneAnswer,setIsPhoneAnswer]=useState(false)

    const onChangeContact = (e) =>{
        const currentContact = e.target.value;
        setContact(e.target.value);
        if(currentContact === '서비스 문의'){
            setDefaultValue('해당 서비스 명: ( A타입 / B타입-Single / B타입-Double )\n' +
                '\n문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }else if(currentContact === '상품 문의'){
            setDefaultValue('모델 명: ( DBS-5000-A / DBS-5000-B (Single) / DBS-5000-B (Double) )\n' +
                '\n문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }else if(currentContact === '제품 불량 및 A/S'){
            setDefaultValue('해당 서비스 명: ( A타입 / B타입-Single / B타입-Double )\n' +
                '\n모델 명: ( DBS-5000-A / DBS-5000-B (Single) / DBS-5000-B (Double) )\n' +
                '\n문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }else if(currentContact === '기타문의'){
            setDefaultValue('가입한 기존 고객: ( O / X ) \n' +
                '\n문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }
    };

    const onChangeCompanyContact = (e) =>{
        const currentContact = e.target.value;
        setContact(e.target.value);
        if(currentContact === '서비스 문의'){
            setDefaultValue('해당 서비스 명: ( A타입 / B타입-Single / B타입-Double )\n' +
                '\n문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }else if(currentContact === '상품 문의'){
            setDefaultValue('모델 명: ( DBS-5000-A / DBS-5000-B (Single) / DBS-5000-B (Double) )\n' +
                '\n문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }else if(currentContact === '제품 불량 및 A/S'){
            setDefaultValue('해당 서비스 명: ( A타입 / B타입-Single / B타입-Double )\n' +
                '\n모델 명: ( DBS-5000-A / DBS-5000-B (Single) / DBS-5000-B (Double) )\n' +
                '\n문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }else if(currentContact === '기타문의'){
            setDefaultValue('문의 내용: ')
            setContact(currentContact)
            setIsContact(true)
        }
    };



    const onChangeAnswer =(e)=>{
        const currentAnswer = e.target.value
        setAnswer(currentAnswer)
        if(currentAnswer === 'Email로 답변받기'){
            setAnswer(currentAnswer)
            setIsAnswer(true)
            setIsEmailAnswer(true)
            setIsPhoneAnswer(false)
            if(isUserInfo === true){
                const userIdMap = userData.map(item=>item.userid)
                setUserId(userIdMap[0])
            }

        }else if(currentAnswer === 'PhoneSMS로 답변받기'){
            setAnswer(currentAnswer)
            setIsAnswer(true)
            setIsPhoneAnswer(true)
            setIsEmailAnswer(false)
            if(isUserInfo === true){
                const phoneMap = userData.map(item=>item.phone)
                setPhone(phoneMap[0])
            }
        }

    }


    const onChangeCompany=(e)=>{
        setCompany(e.target.value)
        setIsCompany(true)
    }


    const onChangeSendInfo=(e)=>{
        if(isEmailAnswer === true){
            const currentEmail = e.target.value;
            setSendInfo(currentEmail);
            const emailRegExp =
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

            if (!emailRegExp.test(currentEmail)) {
                setSendInfoMessage("올바른 이메일을 작성해주세요.");
                setIsInfo(false);
            } else {
                setSendInfoMessage("");
                setIsInfo(true);
            }
        }else if(isPhoneAnswer === true){
            const currentPhone = e.target.value;
            setSendInfo(currentPhone);
            if (currentPhone.length === 3 || currentPhone.length === 8) {
                setSendInfo(currentPhone + "-");
            }else{
                setSendInfo(currentPhone)
            }
            const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            if (!phoneRegExp.test(currentPhone)) {
                setSendInfoMessage("하이픈을 포함한 올바른 핸드폰 번호를 입력해 주세요!");
                setIsInfo(false);
            } else {
                setSendInfoMessage("");
                setIsInfo(true);
            }
        }
    }

    const onChangeContent= (e)=>{
        setInfoContent(e.target.value)
        setIsInfoContent(true)
    }


    const [res,setRes]=useState('')

    const onSubmitEmail = (e) => {
        e.preventDefault()
        let data = {
            contact: contact,
            answer: answer,
            sendInfo: userId,
            company: CheckCompany,
            infoContent: infoContent
        }


        sendContactMail(data)
            .then((res) => {
                alert('담당자가 확인 후 30분~1시간 이내 이메일로 답변 드리겠습니다.')
                setRes(res.data)
            })
            .catch(function (err) {
                alert(err.response.data)
            })


    }


    const onSubmitSMS = (e) => {
        e.preventDefault()
        let data = {
            contact: contact,
            answer: answer,
            sendInfo: phone,
            company: CheckCompany,
            infoContent: infoContent
        }

        sendContactMail(data)
            .then((res) => {
                setRes(res.data)
                alert('담당자가 확인 후 30분~1시간 이내 SMS로 답변 드리겠습니다.')
            })
            .catch(function (err) {
                alert(err.response.data)
            })

    }





    const onSubmitHandler = (e)=>{
        e.preventDefault()
        let data = {
            contact:contact,
            answer:answer,
            sendInfo:sendInfo,
            company:company,
            infoContent:infoContent
        }

        if(isPhoneAnswer === true){
            //한번 더 검증
            const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            if (!phoneRegExp.test(answer)) {
                alert('올바른 전화번호를 입력해주세요.')
                setIsInfo(false)
                setSendInfo('')
            } else {
                sendContactMail(data)
                    .then((res)=>{
                        alert('담당자가 확인 후 30분~1시간 이내 SMS로 답변 드리겠습니다.')
                        setRes(res.data)

                    })
                    .catch(function (err){
                        alert(err.response.data)
                    })
            }
        }else if(isEmailAnswer === true){
            const emailRegExp =
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

            if (!emailRegExp.test(answer)) {
                alert("올바른 이메일을 작성해주세요.");
                setIsInfo(false);
                setSendInfo('')

            } else {
                sendContactMail(data)
                    .then((res)=>{
                        setRes(res.data)
                        alert('담당자가 확인 후 30분~1시간 이내 이메일로 답변 드리겠습니다.')
                    })
                    .catch(function (err){

                        alert(err.response.data)
                    })
            }
        }
    }

    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})
    const [CheckCompany, setCheckCompany] = useState('')
    const [userData,setUserData] = useState([])
    const [srcAddress,setSrcAddress] =useState('')
    const [userId,setUserId] = useState('')
    const [phone, setPhone] = useState('')

    const [isUserInfo,setIsUserInfo] = useState(false)

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200) {
                        setIsLogin(true);
                        setUser(res.data)
                        userInfoCheck()
                            .then((res)=>{
                                setUserData(res.data)
                                setIsUserInfo(true)
                            })
                            .catch(function (err){
                            })
                        companyCheck()
                            .then((res) => {
                                //alert(res.data)
                                if (res.data === 'LG HelloVision') {
                                    setSrcAddress("../../../../images/lg_hello.png")
                                    setCheckCompany('LG HelloVision')

                                } else if (res.data === 'Samsung S1') {
                                    setSrcAddress("../../../../images/s1.png")
                                    setCheckCompany('Samsung S1')

                                } else if (res.data === 'LG U+') {
                                    setSrcAddress("../../../../images/lgu.png")
                                    setCheckCompany('LG U+')

                                } else if (res.data === 'RAEMIAN') {
                                    setSrcAddress("../../../../images/raemian.png")
                                    setCheckCompany('RAEMIAN')

                                } else if (res.data === 'THE WAVE') {
                                    setSrcAddress("../../../../images/the_wave.png")
                                    setCheckCompany('THE WAVE')

                                } else if (res.data === 'ETCETRA') {
                                    setSrcAddress("../../../../images/etcetra.png")
                                    setCheckCompany('ETCETRA')

                                } else if (res.data === 'Samsung C&T') {
                                    setSrcAddress("../../../../images/samsung_mulsan.png")
                                    setCheckCompany('Samsung C&T')
                                } else if (res.data === 'Coway') {
                                    setSrcAddress("../../../../images/coway.png")
                                    setCheckCompany('Coway')
                                } else {
                                    //블라우비트
                                    setSrcAddress("../../../../images/new_blaubit.png")
                                    setCheckCompany('Blaubit')
                                }
                            })
                    }
                })
                .catch((err)=>{
                })

        }catch (err){
        }
    }, [])




    return(
        <>

                <div style={{paddingTop:60,paddingBottom:200}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '750px',
                            width: '1100px',
                            backgroundColor:'white',
                            borderRadius:'0.5rem',
                            marginTop:-4
                        }}>

                        <Logo isLogin={isLogin} srcAddress={srcAddress}/>

                        <Typography  color='grey' component="h2" variant="h8" sx={{marginTop:1}}>
                            1:1 문의하기 서비스 입니다.
                        </Typography>
                        <Typography  color='grey' component="h4" variant="h7" sx={{marginTop:2}}>
                            최대한 빠르게 검토 후 연락드리겠습니다.
                        </Typography>
                        <div style={{alignItems:'center',display:'flex',padding:15}}>

                            <Contact isLogin={isLogin} onChangeContact={onChangeContact} contact={contact}
                                     onChangeCompanyContact={onChangeCompanyContact} contactList={contactList}/>

                            <div style={{width:20}}></div>

                            <Answer answerList={answerList} answer={answer} onChangeAnswer={onChangeAnswer}/>
                        </div>

                        <div style={{alignItems:'center',display:'flex'}}>
                            <Company isLogin={isLogin} company={company} onChangeCompany={onChangeCompany}
                                     CompanyList={CompanyList} CheckCompany={CheckCompany} />

                            <div style={{width:20}}/>

                            <SendInfo isLogin={isLogin} sendInfo={sendInfo} onChangeSendInfo={onChangeSendInfo}
                                      isEmailAnswer={isEmailAnswer} isInfo={isInfo} userId={userId} phone={phone}/>

                        </div>
                            <Content defaultValue={defaultValue} onChangeContent={onChangeContent}/>
                            <OnSubmit isEmailAnswer={isEmailAnswer} isLogin={isLogin} onSubmitSMS={onSubmitSMS} onSubmitEmail={onSubmitEmail} onSubmitHandler={onSubmitHandler} isInfo={isInfo} isInfoContent={isInfoContent}
                                  isAnswer={isAnswer} isContact={isContact} isCompany={isCompany}/>
                    </Box>
                </div>

        </>
    )

}