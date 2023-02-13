import React from "react";


export default function ProductComponent(){

    return(
        <>
            <div style={{display: 'flex',
                flexDirection: "column",
                alignItems: "center",paddingBottom:200}}>
                <div style={{alignItems:"center",display:"flex",paddingTop:150}}>
                    <img alt="No Images" src="images/doorbell_hard.png"
                         style={{
                             width:1000
                         }}/>

                    <img alt="No Images" src="images/doorbell_text.png"
                         style={{paddingLeft:20,
                             width:300
                         }}/>
                    <img alt="No Images" src="images/doorbell_point.png"
                         style={{
                             width:500
                         }}/>
                </div>

            </div>
        </>
    )
}