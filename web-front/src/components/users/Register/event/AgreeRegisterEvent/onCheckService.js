import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import OnSubmitService from "./onSubmitService";
import React from "react";
import Typography from "@mui/material/Typography";



export default function OnCheckService(props){

    const { checkList, setCheckList } =props

    const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? setCheckList(["service","user"])
            : setCheckList([])
    }

    const check = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? setCheckList([...checkList, e.target.name])
            : setCheckList(checkList.filter((choice)=> choice !== e.target.name))
    }
    const isAllChecked = checkList.length ===2;
    const disabled = !isAllChecked

    return(
        <>
            <div style={{}}>
            <FormControlLabel
                control={<Checkbox
                    style={{fontWeight:2}}
                    margin="normal"
                                   required
                                   fullWidth
                                   name="all"
                                   onChange={checkAll}
                                   checked={checkList.length === 2 ? true : false}
                                   color="primary"/>}
                label={<Typography variant='body2' >이용약관 동의</Typography>}
             /><br/>
            </div>
            <FormControlLabel
                control={<Checkbox color="primary"
                                   margin="normal"
                                   required
                                   fullWidth
                                   name="service"
                                   onChange={check}
                                   checked={checkList.includes('service') ? true : false}/>}
                label={<Typography variant='body2' >서비스 이용약관에 동의합니다.(필수)</Typography>}
            /><br/>
            <FormControlLabel
                control={<Checkbox color="primary"
                                   margin="normal"
                                   required
                                   fullWidth
                                   name="user"
                                   onChange={check}
                                   checked={checkList.includes('user') ? true : false}/>}
                label={<Typography variant='body2' >개인정보 수집 및 이용에 동의합니다.(필수)</Typography>}
            /><br/>
            <OnSubmitService disabled={disabled}/>
        </>
    )

}