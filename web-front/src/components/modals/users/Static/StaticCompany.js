import {Grid, TextField} from "@mui/material";


export default function StaticCompany(props){

    const {CheckCompany} = props

    return(
        <>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <TextField
                    required
                    fullWidth
                    type="text"
                    name="contractName"
                    label="회사명"
                    value={CheckCompany}
                    disabled
                />
            </Grid>
            <Grid item xs={1}/>
        </>
    )
}