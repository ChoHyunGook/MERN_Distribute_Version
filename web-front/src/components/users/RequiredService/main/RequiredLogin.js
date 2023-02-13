import React from 'react'
import background from "../../../../images/bg_index.png";
import RequiredLoginComponent from "../component/RequiredLoginComponent";
import Layout from "../../../../containers/main/Layout";


export default function RequiredLogin(){
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
            <RequiredLoginComponent />
        </div>
        </Layout>
    )
}