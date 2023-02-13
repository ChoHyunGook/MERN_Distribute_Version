import React from "react";
import ExclusiveRegisterService from "./ExclusiveRegisterService";


export default function MainPage(){


    return(
        <>
            <div style={{display: 'flex',
                alignItems: "center",paddingLeft:50,flexDirection:"column"}}>
                <div className="jumbotron">
                    <div className="font-background">
                        <img alt="No images" src="images/text_slogan.png" style={{
                            marginTop:80,
                            display: 'flex',
                            alignItems:"center",
                            width:'900px',
                            height:'170px'
                        }} />
                    </div><br/>
                </div>
                <ExclusiveRegisterService />
            </div>

        </>
    )
}