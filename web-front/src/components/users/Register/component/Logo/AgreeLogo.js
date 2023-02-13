import React, {useEffect, useState} from "react";


export default function AgreeLogo(props){

    const { srcAddress } = props

    const [isMarginTopUp, setIsMarginTopUp] =useState(false)

    useEffect(()=>{
        try{
            if(srcAddress === '../../../../../../images/raemian.png'){
                setIsMarginTopUp(true)
            } else if(srcAddress === '../../../../../../images/coway.png'){
                setIsMarginTopUp(true)
            } else if(srcAddress === '../../../../../../images/s1.png'){
                setIsMarginTopUp(true)
            }
            else{
                setIsMarginTopUp(false)
            }
        }catch (err){
        }
    },[])


    return(
        <>
            {isMarginTopUp ? (
                <>
                    <img alt="No Images" src={srcAddress}
                         style={{
                             marginTop:15,
                         }}/><br/>
                </>
            ):(
                <>
                    <img alt="No Images" src={srcAddress}
                         style={{
                             marginTop:1,
                         }}/><br/>
                </>
                )}

        </>
    )
}