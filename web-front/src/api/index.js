import axios from 'axios';


//Users
export const login = loginRequest=> axios.post(`${process.env.REACT_APP_SERVER}/users/login`,loginRequest,{withCredentials:true})
export const logout = () => axios.get(`${process.env.REACT_APP_SERVER}/users/logout`,{withCredentials:true})
export const register = joinRequest=> axios.post(`${process.env.REACT_APP_SERVER}/users/join`,joinRequest,{withCredentials:true})
export const agreeTermsConditions = agreeTermsConditionsRequest=>axios.post(`${process.env.REACT_APP_SERVER}/users/terms`,agreeTermsConditionsRequest,{withCredentials:true})
export const exclusiveCompany = exclusiveCompanyRequest => axios.post(`${process.env.REACT_APP_SERVER}/users/exclusive`,exclusiveCompanyRequest,{withCredentials:true})


//stateCheck(useEffect & CheckService)
export const signCheck = () => axios.get(`${process.env.REACT_APP_SERVER}/states/signCheck`,{withCredentials:true})
export const companyCheck = () => axios.get(`${process.env.REACT_APP_SERVER}/states/companyCheck`,{withCredentials:true})
export const userInfoCheck = () => axios.get(`${process.env.REACT_APP_SERVER}/states/userInfoCheck`,{withCredentials:true})
export const termsCheck = () => axios.get(`${process.env.REACT_APP_SERVER}/states/termsCheck`,{withCredentials:true})
export const exclusiveCompanyCheck = () => axios.get(`${process.env.REACT_APP_SERVER}/states/exclusiveCompanyCheck`,{withCredentials:true})
export const exclusiveTokenCheck = () => axios.get(`${process.env.REACT_APP_SERVER}/states/exclusiveTokenCheck`,{withCredentials:true})
export const signAllCheck = () => axios.get(`${process.env.REACT_APP_SERVER}/states/signAllCheck`,{withCredentials:true})
export const authModifySignCheck = ()=> axios.get(`${process.env.REACT_APP_SERVER}/states/authModifySignCheck`,{withCredentials:true})

//Find Service

export const changePasswordPage = changePasswordPageRequest => axios.post(`${process.env.REACT_APP_SERVER}/findInfo/changePasswordPage`,changePasswordPageRequest,{withCredentials:true})
export const findEditPassword = findEmailPasswordRequest => axios.post(`${process.env.REACT_APP_SERVER}/findInfo/findEditPassword`,findEmailPasswordRequest,{withCredentials:true})
export const checkSMSAuthNum = checkSMSAuthNumRequest => axios.post(`${process.env.REACT_APP_SERVER}/findInfo/checkSMSAuthNum`,checkSMSAuthNumRequest,{withCredentials:true})



//Update Service
export const authModify = authModifyRequest => axios.post(`${process.env.REACT_APP_SERVER}/profiles/authModify`,authModifyRequest,{withCredentials:true})
export const editUser = editUserRequest => axios.post(`${process.env.REACT_APP_SERVER}/profiles/editUser`,editUserRequest,{withCredentials:true})
export const editUserPassword = editUserPasswordRequest => axios.post(`${process.env.REACT_APP_SERVER}/profiles/editUserPassword`,editUserPasswordRequest,{withCredentials:true})
export const editUserPhone = editUserPhoneRequest => axios.post(`${process.env.REACT_APP_SERVER}/profiles/editUserPhone`,editUserPhoneRequest,{withCredentials:true})
export const editEmailAdress = editEmailAdressRequest => axios.post(`${process.env.REACT_APP_SERVER}/profiles/editEmailAdress`,editEmailAdressRequest,{withCredentials:true})
//User WithDraw Service
export const withdrawUser = withdrawUserRequest => axios.post(`${process.env.REACT_APP_SERVER}/profiles/withdrawUser`,withdrawUserRequest,{withCredentials:true})


//Table Service
export const excelTables = tableRequest => axios.post(`${process.env.REACT_APP_SERVER}/tables/upload`,tableRequest,{withCredentials:true})
export const tableFind = () => axios.get(`${process.env.REACT_APP_SERVER}/tables/find`,{withCredentials:true})
export const tableUpdate = tableUpdateRequest => axios.post(`${process.env.REACT_APP_SERVER}/tables/uploadOne`,tableUpdateRequest,{withCredentials:true})
export const tableDelete = tableDeleteRequest => axios.post(`${process.env.REACT_APP_SERVER}/tables/delete`,tableDeleteRequest,{withCredentials:true})
export const findOneTable = findOneRequest => axios.post(`${process.env.REACT_APP_SERVER}/tables/findOne`,findOneRequest,{withCredentials:true})
export const tableEdit = editTableRequest => axios.post(`${process.env.REACT_APP_SERVER}/tables/tableEdit`,editTableRequest,{withCredentials:true})


//Send Email
export const checkmail = mailRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendMail`,mailRequest,{withCredentials:true})
export const sendModifyEmail = sendModifyEmailRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendModifyEmail`,sendModifyEmailRequest,{withCredentials:true})
export const sendContactMail = sendContactMailRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendContactMail`,sendContactMailRequest,{withCredentials:true})

//Send SMS -Register
export const sendJoinSMS = sendJoinSMSRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendJoinSMS`,sendJoinSMSRequest,{withCredentials:true})


//Send SMS -Find
export const sendFindIdSMS= sendFindIdSMSRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/findIdSendSMS`,sendFindIdSMSRequest,{withCredentials:true})
export const sendFindPwSMS = sendFindPwSMSRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendFindPwSMS`,sendFindPwSMSRequest,{withCredentials:true} )

//Send SMS -Update
export const sendEditNameSMS = sendEditNameSMSRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendEditNameSMS`,sendEditNameSMSRequest,{withCredentials:true})
export const sendEditPhoneSMS = sendEditPhoneSMSRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendEditPhoneSMS`,sendEditPhoneSMSRequest,{withCredentials:true})
export const sendEditPasswordSMS = sendEditPasswordSMSRequest => axios.post(`${process.env.REACT_APP_SERVER}/sendService/sendEditPasswordSMS`,sendEditPasswordSMSRequest,{withCredentials:true})


//auth--삭제예정
export const authHomeCheck = ()=> axios.get(`${process.env.REACT_APP_SERVER}/auth/authHomeCheck`,{withCredentials:true})
export const authLogin = authLoginRequest => axios.post(`${process.env.REACT_APP_SERVER}/auth/authLogin`,authLoginRequest,{withCredentials:true})