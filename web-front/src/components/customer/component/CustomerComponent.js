import background from "../../../images/bg_yellow_flower_field.jpg";
import ContactEmail from "../service/ContactEmail";
import React from "react";


export default function CustomerComponent(){


    return(
        <>
            <div style={{backgroundImage: `url(${background})`,width:'100%',height:'100%'}}>
                <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                    <ContactEmail/>
                </div>
            </div>
        </>
    )
}