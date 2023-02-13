import Button from "@mui/material/Button";
import * as React from "react";
import {login} from "../../../../api";


export default function OnSubmitService(props){

    const { userid, password, setRes  } = props

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let data = {
            userid: userid,
            password: password
        }
        setRes(data)
        login(data)
            .then(res=>{
                setRes(res.data)
                alert("로그인 성공")
                window.location.replace('/')
            })
            .catch(function (err){
                alert(JSON.stringify(err.response.data))
            })
    }

    return(
        <>
            <Button
                disabled={userid.length<11 || password.length<8}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                size="large"
                onClick={onSubmitHandler}
            >
                로그인
            </Button>
        </>
    )
}