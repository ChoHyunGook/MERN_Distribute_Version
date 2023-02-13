import React, {useEffect, useState} from 'react'
import background from "../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box} from "@mui/material";
import { signCheck } from "../../../api";
import RequiredLogin from "../../users/RequiredService/main/RequiredLogin";
import TableService from "../service/TableService";



export default function TableComponent(){
    const theme = createTheme();

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
                })
        }catch (err){
        }
    }, [])

    return(
        <>
        {isLogin ? (
            <div className="product-container"
                         style={{
                             backgroundImage: `url(${background})`,
                             display: 'flex',
                             flexDirection:"column",
                             alignItems:"center",
                             width:'100%',height:'100%',
                             paddingBottom:40
                          }}>
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '1200px',
                            width: '1500px',
                            borderRadius:'2rem'
                        }}
                    >
                        <TableService />
                    </Box>
                </ThemeProvider>
            </div>):(
                <RequiredLogin />
            )}
        </>
    )
}