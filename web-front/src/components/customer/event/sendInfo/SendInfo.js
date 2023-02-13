import TextField from "@mui/material/TextField";
import * as React from "react";


export default function SendInfo(props){

    const {isLogin, sendInfo, onChangeSendInfo, isInfo, isEmailAnswer,userId,phone} = props

    return(
        <>
            {isLogin ? (
                <>
                    {isEmailAnswer ? (
                        <TextField
                            value={userId}
                            disabled
                            margin="normal"
                            sx={{marginTop:1,width:450}}
                            label="답변 받으실 이메일 또는 전화번호"
                            name="sendInfo"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    ):(
                        <TextField
                            value={phone}
                            disabled
                            margin="normal"
                            sx={{marginTop:1,width:450}}
                            label="답변 받으실 이메일 또는 전화번호"
                            name="sendInfo"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        )}
                </>
            ):(
                <>
                    <TextField
                        value={sendInfo}
                        margin="normal"
                        sx={{marginTop:1,width:450}}
                        label="답변 받으실 이메일 또는 전화번호"
                        name="sendInfo"
                        onChange={onChangeSendInfo}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={isInfo === false}
                    />
                </>
                )}

        </>
    )
}