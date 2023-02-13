import Textarea from "@mui/joy/Textarea";
import * as React from "react";


export default function Content(props){

    const {defaultValue, onChangeContent}=props

    return(
        <>
            <Textarea
                defaultValue={defaultValue}
                placeholder="문의하실 내용을 기입해주세요."
                sx={{marginTop:1,width:920,height:280, border:1,
                    borderColor:'grey.500'}}
                name="sendInfo"
                onChange={onChangeContent}
            />
        </>
    )
}