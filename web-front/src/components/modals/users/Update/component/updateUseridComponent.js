import {Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import UpdateUserIdModal from "../main/updateUserIdModal";


export default function UpdateUseridComponent(props){

    const {userData, CheckCompany, srcAddress} = props

    let useridMap = userData.map(item=>item.userid)

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
                    fullWidth
                    type="text"
                    name="userid"
                    label="아이디(이메일)"
                    defaultValue={useridMap}
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
                {modalOpen && <UpdateUserIdModal open={modalOpen} close={closeModal} header="아이디(이메일)변경"
                                            userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div>
        </>
    )
}