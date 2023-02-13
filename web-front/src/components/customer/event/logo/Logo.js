import * as React from "react";


export default function Logo(props){

    const { isLogin,srcAddress }=props


    return(
        <>
            {isLogin ? (
                <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                    <img alt="No Images" src={srcAddress}
                         style={{
                             marginTop: 30
                         }}/>

                    <img alt="No Images" src="images/question.png"
                         style={{
                             width: 70,
                             paddingTop: 20
                         }}/>
                </div>
            ):(
                <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                    <img alt="No Images" src="images/question.png"
                         style={{
                             width: 100,
                             paddingTop: 30
                         }}/>
                </div>
                )}

        </>
    )
}