import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {logout} from "../../../api";


export default function AfterLoginService(){

    const tableButton = (e) =>{
        e.preventDefault()
        window.location.replace("/table")
    }

    const profileButton = (e)=>{
        e.preventDefault()
        window.location.replace("/authModify")
    }



    const [isLogout,setIsLogout] = useState(false)
    const [logoutUser,setLogoutUser] = useState({})
    const logoutButton =(e)=>{
        e.preventDefault()
        logout().then((res)=>{
            setIsLogout(true);
            setLogoutUser(res.data)
            alert('로그아웃 되셨습니다.')
            window.location.replace('/')
        })
            .catch((err)=>{
              alert(err.response.data)
            })

    }

    return(
        <>
                <Button
                    onClick={tableButton}
                    variant="text"
                    size="large"
                >
                    <Typography color="black" component="h2" variant="h6">
                        고객관리
                    </Typography>
                </Button>
            <div style={{width:20}}/>
                <Button
                    onClick={profileButton}
                    variant="text"
                    size="large"
                    >
                    <Typography color="black" component="h2" variant="h6">
                        정보수정
                    </Typography>
                </Button>
            <div style={{width:20}}/>
                <Button
                    onClick={logoutButton}
                    variant="text"
                    size="large"
                    >
                    <Typography color="black" component="h2" variant="h6">
                        로그아웃
                    </Typography>
                </Button>
        </>
    )
}