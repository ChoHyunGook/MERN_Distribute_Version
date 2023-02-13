import {Button, FormControl} from "@mui/material";
import * as React from "react";


export default function OnSubmit(props){

    const {isEmailAnswer,isLogin,onSubmitSMS,onSubmitHandler,onSubmitEmail,isInfo,isInfoContent,isAnswer,isContact,isCompany} =props

    return(
        <>
            {isLogin ? (
                <>
                    {isEmailAnswer ? (
                        <FormControl sx={{width: 300}}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                onClick={onSubmitEmail}
                                sx={{ mt: 2, mb: 1 ,
                                    justifyContent: 'center',
                                    alignItems: 'center' }}
                                size="large"
                                disabled={ isInfoContent===false ||
                                    isAnswer ===false || isContact === false}
                            >
                                문의하기
                            </Button><br/>
                        </FormControl>
                    ):(
                        <FormControl sx={{width: 300}}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                onClick={onSubmitSMS}
                                sx={{ mt: 2, mb: 1 ,
                                    justifyContent: 'center',
                                    alignItems: 'center' }}
                                size="large"
                                disabled={ isInfoContent===false ||
                                    isAnswer ===false || isContact === false}
                            >
                                문의하기
                            </Button><br/>
                        </FormControl>
                        )}
                </>

            ):(
                <FormControl sx={{width: 300}}>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        onClick={onSubmitHandler}
                        sx={{ mt: 2, mb: 1 ,
                            justifyContent: 'center',
                            alignItems: 'center' }}
                        size="large"
                        disabled={ isInfo === false || isInfoContent===false ||
                            isAnswer ===false || isContact === false|| isCompany=== false}
                    >
                        문의하기
                    </Button><br/>
                </FormControl>
                )}

        </>
    )
}