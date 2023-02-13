import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";


export default function OnChangeService(props){

    const { setName, Name, setIsName, setNameMessage, setUserid, setEmailMessage, setIsEmail, NameMessage,
            userid, EmailMessage } = props

    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName)
        const nameRegExp = /^[가-힣a-zA-Z]+$/;

        if (!nameRegExp.test(currentName) || Name.length<=2) {
            setNameMessage('올바른 이름을 입력해주세요!');
            setIsName(false);
        } else {
            setNameMessage('');
            setIsName(true);
        }

    }

    const onEmailHandler = (e) => {
        const currentEmail = e.target.value;
        setUserid(currentEmail)
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("올바른 형식이 아닙니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("");
            setIsEmail(true);
        }
    }

    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TextField
                    value={Name}
                    margin="normal"
                    required
                    fullWidth
                    label="이름"
                    name="Name"
                    autoComplete="Name"
                    autoFocus
                    error={NameMessage === '올바른 이름을 입력해주세요!' || false}
                    onChange={onChangeName}
                />
            </Grid>
            <Grid item xs={1}/>

            <Grid item xs={1}/>
            <Grid item xs={7.5}>
                <TextField
                    value={userid}
                    margin="normal"
                    required
                    fullWidth
                    label="아이디(이메일)"
                    name="userid"
                    autoComplete="email"
                    error={EmailMessage === '올바른 형식이 아닙니다.' || false}
                    onChange={onEmailHandler}
                />
            </Grid>
        </>
    )

}