import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import * as React from "react";


export default function Company(props){

    const {isLogin,company,onChangeCompany,CompanyList,CheckCompany}=props

    return(
        <>
            {isLogin ? (
                <>
                    <FormControl sx={{width:450}}>
                        <InputLabel>소속 회사</InputLabel>
                        <Select
                            value={CheckCompany}
                            disabled
                            name="company"
                            input={<OutlinedInput label="name" />}
                        >
                            {CompanyList.map((item) => (
                                <MenuItem
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </>
            ):(
                <>
                    <FormControl sx={{width:450}}>
                        <InputLabel>소속 회사</InputLabel>
                        <Select
                            value={company}
                            name="company"
                            onChange={onChangeCompany}
                            input={<OutlinedInput label="name" />}
                        >
                            {CompanyList.map((item) => (
                                <MenuItem
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </>
                )}

        </>
    )

}