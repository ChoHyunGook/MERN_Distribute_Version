import React from "react";
import background from "../../images/bg_yellow_flower_field.jpg";


export default function AfterLoginComponent(){

    return(
            <div style={{backgroundImage:`url(${background})`, padding:200}}>
                <div style={{alignItems:"center",display:'flex',flexDirection:"column"}}>
                <img alt="No Images" src="images/img_splash_title.png"
                     style={{
                         display:'flex',
                         alignItems: "center",
                         width:"auto",
                         height:'450px'
                     }}/>
                </div>
            </div>
    )
}