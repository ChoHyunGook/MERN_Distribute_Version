import React, {useEffect, useState} from "react"
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { signCheck} from "../../api";
import BeforeLoginNavi from "../components/main/BeforeLoginNavi";
import AfterLoginNavi from "../components/main/AfterLoginNavi";


const selectTheme = createTheme({
    palette: {
        primary:{
            main: '#fffcfc',
        }
    },
});

function Navi() {


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



  return (
      <ThemeProvider theme={selectTheme} color="primary">
          {isLogin ? (
              <AfterLoginNavi />
          ):(
            <BeforeLoginNavi />
          )}

      </ThemeProvider>
  );
}


export default Navi;


