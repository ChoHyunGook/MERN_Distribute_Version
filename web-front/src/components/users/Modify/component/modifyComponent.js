import React, {useEffect, useState} from 'react'
import background from "../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box} from "@mui/material";
import ModifyService from "../service/ModifyService";
import {authModifySignCheck} from "../../../../api";
import RequiredAuthModify from "../../RequiredService/main/RequiredAuthModify";




const theme = createTheme();
export default function ModifyComponent(props){

    const { userData, srcAddress, CheckCompany } = props;

    const [isAuthModify,setIsAuthModify] = useState(false)
    const [res,setRes]=useState('')

    useEffect(()=>{
        authModifySignCheck()
            .then((res)=>{
                setIsAuthModify(true)
                setRes(res.data)
            })
            .catch((err)=>{
            })
    },[])

    const [isMarginTop, setIsMarginTop] =useState(false)

    useEffect(()=>{
        if(CheckCompany === 'LG HelloVision'){
            setIsMarginTop(true)
        }else if(CheckCompany === 'LG U+'){
            setIsMarginTop(true)
        }else if(CheckCompany === 'Blaubit'){
            setIsMarginTop(true)
        }else{
            setIsMarginTop(false)
        }
    },[])


    return(
        <>
            {isAuthModify ? (
                <body style={{
                    backgroundImage: `url(${background})`,
                    display: 'flex',
                    flexDirection:"column",
                    alignItems:"center",
                    width:"100%",
                    height:"100%",
                    paddingBottom:350
                }}><br/>
                <ThemeProvider theme={theme}>
                    {isMarginTop ? (
                        <Box
                            sx={{
                                marginTop: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '700px',
                                width: '550px',
                                borderRadius:'0.5rem'
                            }}
                        ><br/>
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 1,
                                     paddingBottom:30
                                 }}/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"250px",
                                     paddingBottom:30
                                 }}/>
                            <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                        </Box>
                        ):(
                        <Box
                            sx={{
                                marginTop: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '650px',
                                width: '550px',
                                borderRadius:'0.5rem'
                            }}
                        ><br/>
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 1,
                                     paddingBottom:30
                                 }}/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"250px",
                                     paddingBottom:30
                                 }}/>
                            <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                        </Box>
                        )}
                </ThemeProvider>
                </body>
            ):(
                <RequiredAuthModify />
            )}

        </>
    )

}