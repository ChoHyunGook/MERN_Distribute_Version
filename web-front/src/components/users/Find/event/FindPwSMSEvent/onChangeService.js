import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";


export default function OnChangeService(props){

    const {setEmail, setEmailMessage, setIsEmail, setPhone ,setPhoneMessage,
        setIsPhone,Email,isEmail,Phone,PhoneMessage}= props

    const onEmailHandler = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail)
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("올바른 형식이 아닙니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("올바른 형식 입니다.");
            setIsEmail(true);
        }
    }
    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("올바른 형식이 아닙니다.");
            setIsPhone(false);
        } else {
            setPhoneMessage("올바른 형식 입니다.");
            setIsPhone(true);
        }
    }
    const addHyphen =(e) =>{
        const currentNumber = e.target.value;
        setPhone(currentNumber);
        if (currentNumber.length === 3 || currentNumber.length === 8) {
            setPhone(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    }

    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TextField
                    value={Email}
                    margin="normal"
                    required
                    fullWidth
                    label="아이디(이메일)"
                    name="Email"
                    autoComplete="email"
                    autoFocus
                    error={isEmail === false}
                    onChange={onEmailHandler}
                />
            </Grid>
            <Grid item xs={1}/>

            <Grid item xs={1}/>
            <Grid item xs={7.5}>
                <TextField
                    value={Phone}
                    margin="normal"
                    required
                    fullWidth
                    name="Phone"
                    label="전화번호( - 빼고 기입)"
                    type="text"
                    error={PhoneMessage === '올바른 형식이 아닙니다.' || false}
                    onChange={addHyphen}
                />
            </Grid>
        </>
    )
}