import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import * as React from "react";


export default function Contact(props){

    const { isLogin, onChangeContact, contactList, contact ,onChangeCompanyContact} =props

    return(
        <>
            {isLogin ? (
                <>
                    <FormControl sx={{marginTop:3,width:450}}>
                        <InputLabel>문의유형</InputLabel>
                        <Select
                            autoFocus
                            value={contact}
                            name="contact"
                            onChange={onChangeCompanyContact}
                            input={<OutlinedInput label="name" />}
                        >
                            {contactList.map((item) => (
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
                <FormControl sx={{marginTop:3,width:450}}>
                    <InputLabel>문의유형</InputLabel>
                    <Select
                        autoFocus
                        value={contact}
                        name="contact"
                        onChange={onChangeContact}
                        input={<OutlinedInput label="name" />}
                    >
                        {contactList.map((item) => (
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