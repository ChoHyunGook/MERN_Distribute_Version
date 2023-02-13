import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function NaviNormalService(){


    return(
        <div style={{display:"flex",alignItems:"center"}}>
                <Button
                    href='/product'
                    variant="text"
                    size="large"
                >
                    <Typography color="black" component="h1" variant="h6">
                        제품설명
                    </Typography>
                </Button>
            <div style={{width:20}}/>
                <Button
                    href='/customer'
                    variant="text"
                    size="large"
                    >
                    <Typography color="black" component="h1" variant="h6">
                        고객센터
                    </Typography>
                </Button>
            <div style={{width:20}}/>
        </div>
    )
}