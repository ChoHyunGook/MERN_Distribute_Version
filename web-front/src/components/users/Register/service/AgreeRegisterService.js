import React from "react";
import Box from "@mui/material/Box";
import OnCheckService from "../event/AgreeRegisterEvent/onCheckService";



export default function AgreeRegisterService(props){

    const { checkList, setCheckList } =props

    return(
        <>
            <Box component="form"  noValidate sx={{ mt:1 }} >
                <OnCheckService checkList={checkList} setCheckList={setCheckList} />
            </Box>
        </>
    )
}