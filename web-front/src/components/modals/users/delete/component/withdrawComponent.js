import {useState} from "react";
import {Button, Typography} from "@mui/material";
import WithdrawModal from "../main/withdrawModal";


export default function WithdrawComponent(props){

    const {userData, CheckCompany, srcAddress} =props


    const [modalOpen, setModalOpen] = useState(false);


    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    }



    return(
        <>
            <div style={{alignItems:'center',display:'flex',paddingBottom:20}}>
                <Button
                    onClick={openModal}
                    fullWidth
                    variant="outlined"
                    type="submit"
                    size="medium"
                    sx={{
                        width:440,
                        marginTop:0,
                        height:58,
                        border:3,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'#c7ebff',
                            borderColor:'#008DDC'
                        }
                    }}
                >
                    <Typography component="h3" variant="h7">
                        회원 탈퇴
                    </Typography>
                </Button>
                {modalOpen && <WithdrawModal open={modalOpen} close={closeModal} header="회원 탈퇴"
                                                   userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div>
        </>
    )
}