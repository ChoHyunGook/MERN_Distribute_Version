import {Button,  TextField, Typography} from "@mui/material";
import { useState} from "react";
import UpdatePhoneModal from "../main/updatePhoneModal";


export default function UpdatePhoneComponent(props){

    const {userData,CheckCompany,srcAddress} =props

    let phoneMap = userData.map(item=>item.phone)

    const [modalOpen, setModalOpen] = useState(false);



    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    }



    return(
        <>
            <div style={{alignItems:'center',display:'flex',paddingBottom:30}}>
                <div style={{paddingRight:20}}>
                <TextField
                    required
                    type="text"
                    name="phone"
                    label='전화번호'
                    defaultValue={phoneMap}
                    disabled
                    sx={{width:320}}
                />
                </div>

                <Button
                    onClick={openModal}
                    variant="outlined"
                    type="submit"
                    size="medium"
                    sx={{
                        marginTop:0,
                        width:'100px',
                        height:'58px',
                        border:3,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'#c7ebff',
                            borderColor:'#008DDC'
                        }
                    }}
                >
                    <Typography component="h3" variant="h7">
                        수정
                    </Typography>
                </Button>
                {modalOpen && <UpdatePhoneModal open={modalOpen} close={closeModal} header="전화번호 수정"
                                     userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div>
        </>
    )
}