import React, {useEffect, useState} from 'react'
import { Typography} from "@mui/material";
import UpdateNameComponent from "../../../modals/users/Update/component/updateNameComponent";
import UpdateUseridComponent from "../../../modals/users/Update/component/updateUseridComponent";
import UpdatePhoneComponent from "../../../modals/users/Update/component/updatePhoneComponent";
import UpdatePwComponent from "../../../modals/users/Update/component/updatePwComponent";
import WithdrawComponent from "../../../modals/users/delete/component/withdrawComponent";


export default function ModifyService(props){

    const { userData,CheckCompany,srcAddress } = props;


    const [isCheck, setIsCheck] = useState(false)

    let useridMap = userData.map(item=>item.userid)


    useEffect(()=>{
        if(useridMap.length !== 1){
            setIsCheck(false)
            window.location.reload()
        }else {
            setIsCheck(true)
        }
    }, [useridMap])


    return(
        <>
            <div style={{paddingBottom:30}}>
            <Typography component="h3" variant="h7">
                계약자 정보 수정 / 회원 탈퇴
            </Typography>
            </div>
            <div>
                <UpdateNameComponent userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                <UpdateUseridComponent userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                <UpdatePhoneComponent userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                <UpdatePwComponent userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                <WithdrawComponent userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
            </div>
        </>
    )
}