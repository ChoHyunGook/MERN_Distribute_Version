import Layout from "../../../../containers/main/Layout";
import React from "react";
import RequiredAuthModifyComponent from "../component/RequiredAuthModifyComponent";
import background from "../../../../images/bg_index.png";


export default function RequiredAuthModify(){
    return (
        <Layout>
        <div style={{
            marginTop:-100,
                 backgroundImage: `url(${background})`,
                 width:'100%',
                 height:'100%',
                 position:'fixed',
                 display: 'flex',
                 flexDirection:"column",
                 alignItems:"center",}}>

                <RequiredAuthModifyComponent />
        </div>
        </Layout>
    )
}