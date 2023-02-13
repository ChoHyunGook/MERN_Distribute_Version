import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {companyCheck, signCheck, tableEdit} from "../../../../../api";
import MustLogin from '../../../contents/RequiredLoginModal'



const UpdateTable = (props) => {

    const { editedData } = props;

    let contractMap = editedData.map(item=>item.contract)
    let terminalNumMap = editedData.map(item=>item.terminalNum)
    let contractSortationMap = editedData.map(item=>item.contractSortation)
    let idMap = editedData.map(item=>item.id)
    let phoneNumMap = editedData.map(item=>item.phoneNum)
    let communicationMap = editedData.map(item=>item.communication)
    let serviceTypeMap = editedData.map(item=>item.serviceType)
    let serviceRegitDateMap = editedData.map(item=>item.serviceRegitDate)
    let serviceCloseDateMap = editedData.map(item=>item.serviceCloseDate)
    let openMap = editedData.map(item=>item.open)


    const [inputs, setInputs] = useState({})
    const { terminalNum, contractSortation, id, phoneNum, communication,serviceType,
        serviceRegitDate,serviceCloseDate,open } =inputs;
    const contractSortationList = ['주계약자','부계약자']
    const communicationOpenList = ['O','X']

    const[res,setRes]=useState('')

    const handleChange = (e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs,[name]:value
        })
    }

    const handleClick = (e)=>{
        e.preventDefault()
        tableEdit({contract:contractMap[0], terminalNum, contractName:CheckCompany, contractSortation, id, phoneNum,
            communication,serviceType, serviceRegitDate,serviceCloseDate,open})
            .then(res=>{
                setRes(res.data)
                alert('수정 완료')
                window.location.reload()
            })
            .catch(function (err){
                alert(err.response.data)
            })
    }

    const [isCheck, setIsCheck] = useState(false)


    useEffect(()=>{
        let contractMap = editedData.map(item => item.contract)
        if (contractMap.length === 1) {
            setIsCheck(true)
        }else{
            alert('2개이상의 수정은 ExcelUpload를 사용해주세요~!')
            setIsCheck(false)
            window.location.reload()
        }
    },[])

    const [CheckCompany, setCheckCompany] = useState('')

    useEffect(() => {
        companyCheck()
            .then((res) => {
                alert(res.data)
                if (res.data === 'LG HelloVision') {
                    setCheckCompany('LG HelloVision')
                }else if(res.data === 'Samsung S1'){
                    setCheckCompany('Samsung S1')
                }else if(res.data === 'LG U+'){
                    setCheckCompany('LG U+')
                }else if(res.data === 'RAEMIAN'){
                    setCheckCompany('RAEMIAN')
                }else if(res.data === 'THE WAVE'){
                    setCheckCompany('THE WAVE')
                }else if(res.data === 'ETCETRA'){
                    setCheckCompany('ETCETRA')
                }else if(res.data === 'Samsung C&T'){
                    setCheckCompany('Samsung C&T')
                }else if(res.data === 'Coway'){
                    setCheckCompany('Coway')
                }else{
                    //블라우비트
                    setCheckCompany('Blaubit')
                }
            })
    }, [])

    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{

                })

        }catch (err){

        }
    }, [])

    return (
                <>
                    {isLogin ? (
                        <div style={{ marginTop:1, height: 600, width: '100%'}}>
                            <Box
                                sx={{
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    height: '500px',
                                    width: '550px',
                                }}
                            ><br/>
                                <div style={{alignItems:'center',display:'flex',flexDirection: 'column'}}>
                                <Typography component="h4" variant="h0">
                                    계약자 정보수정
                                </Typography><br/>
                                </div>
                                <div style={{alignItems:'center',display:'flex', paddingBottom:15}}>
                                    <TextField
                                        required
                                        sx={{width:515}}
                                        type="text"
                                        name="contractName"
                                        label="계약자명"
                                        value={CheckCompany}
                                        disabled
                                    />
                                </div>
                                <div style={{alignItems:'center', display:'flex', paddingBottom:15}}>
                                        <TextField
                                            required
                                            sx={{paddingRight:2,width:250}}
                                            type="text"
                                            name="contract"
                                            label="계약번호"
                                            value={contractMap}
                                            disabled
                                        />
                                        <TextField
                                            required
                                            sx={{paddingRight:2,width:250}}
                                            type="text"
                                            name="terminalNum"
                                            label="단말기번호"
                                            defaultValue={terminalNumMap}
                                            onChange={handleChange}
                                        />
                                </div>


                                <div style={{alignItems:'center', display:'flex', paddingBottom:15}}>
                                    <TextField
                                        defaultValue={idMap}
                                        required
                                        sx={{paddingRight:2,width:250}}
                                        type="text"
                                        name="id"
                                        label="ID"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        defaultValue={phoneNumMap}
                                        required
                                        sx={{paddingRight:2,width:250}}
                                        type="text"
                                        name="phoneNum"
                                        label="연락처"
                                        onChange={handleChange}
                                    />



                                </div>


                                <div style={{alignItems:'center', display:'flex', paddingBottom:15}}>

                                    <FormControl sx={{paddingRight:2,width:250}} >
                                        <InputLabel>계약자 구분</InputLabel>
                                        <Select
                                            defaultValue={contractSortationMap}
                                            rowsPerPageOptions
                                            name="contractSortation"
                                            type='text'
                                            onChange={handleChange}
                                            input={<OutlinedInput label="name" />}
                                        >
                                            {contractSortationList.map((item) => (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                        <FormControl sx={{paddingRight:2,width:250}} >
                                            <InputLabel>통신</InputLabel>
                                            <Select
                                                defaultValue={communicationMap}
                                                rowsPerPageOptions
                                                name="communication"
                                                type='text'
                                                onChange={handleChange}
                                                input={<OutlinedInput label="name" />}
                                            >
                                                {communicationOpenList.map((item) => (
                                                    <MenuItem
                                                        key={item}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                </div>

                                <div style={{alignItems:'center', display:'flex', paddingBottom:15}}>
                                        <TextField
                                            defaultValue={serviceTypeMap}
                                            required
                                            sx={{paddingRight:2,width:250}}
                                            type="text"
                                            name="serviceType"
                                            label="서비스종류"
                                            onChange={handleChange}
                                        />

                                    <FormControl sx={{paddingRight:2,width:250}} >
                                        <InputLabel>개시</InputLabel>
                                        <Select
                                            defaultValue={openMap}
                                            name="open"
                                            type='text'
                                            onChange={handleChange}
                                            input={<OutlinedInput label="name" />}
                                        >
                                            {communicationOpenList.map((item) => (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>


                                </div>

                                <div style={{alignItems:'center', display:'flex', paddingBottom:15}}>
                                    <TextField
                                        defaultValue={serviceRegitDateMap}
                                        required
                                        sx={{paddingRight:2,width:250}}
                                        type="text"
                                        name="serviceRegitDate"
                                        label="서비스등록일자"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                            defaultValue={serviceCloseDateMap}
                                            required
                                            sx={{paddingRight:2,width:250}}
                                            type="text"
                                            name="serviceCloseDate"
                                            label="서비스해지일자"
                                            onChange={handleChange}
                                        />


                                </div>

                                <div style={{alignItems:'center', display:'flex',paddingRight:30,paddingBottom:5}}>


                                    <Button
                                            onClick={handleClick}
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 2, mb: 1 ,
                                                justifyContent: 'center',
                                                alignItems: 'center' }}
                                            size="large"
                                        >
                                            수정하기
                                        </Button>

                                        <br/>
                                </div>

                                <div style={{alignItems:'center', display:'flex',paddingLeft:80}}>
                                        <Typography component="h4" variant="h0">
                                            (대량으로 추가 시 EXCEL Edit을 이용바랍니다.)
                                        </Typography><br/>
                                </div>


                            </Box>
                        </div>
                    ):(
                        <MustLogin />
                    )}
                </>

    )
}
export default UpdateTable

