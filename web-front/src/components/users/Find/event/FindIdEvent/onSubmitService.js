import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import {checkSMSAuthNum} from "../../../../../api";


export default function OnSubmitService(props){

    const { Name, Phone, signNum, setRes } = props

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let data = {
            name: Name,
            phoneNumber: Phone,
            signNum: signNum
        }

        checkSMSAuthNum(data)
            .then(res=>{
                setRes(res.data.userid)
                alert(`고객님의 아이디는 ${JSON.stringify(res.data.userid)}입니다.`)
                if (window.confirm('비밀번호찾기는 확인버튼, 로그인하러 가시려면 취소를 눌러주세요.'))
                {
                    // They clicked Yes
                    window.location.replace('/findPwSelect')
                }
                else
                {
                    // They clicked no
                    window.location.replace('/login')
                }

            }).catch(function (err){
            alert(err.response.data)
        })

    }

    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Button
                    style={{height:45}}
                    type="submit"
                    variant="contained"
                    fullWidth
                    onClick={onSubmitHandler}
                    disabled={signNum.length<6 || false}
                >
                    아이디찾기
                </Button>
            </Grid>
        </>
    )

}