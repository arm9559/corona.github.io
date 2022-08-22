import React from "react";
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Author(){
    return(
        <Box sx={{
            mt:"5px",
            p:"5px",
            width:"auto",
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-end",
            color:"gray"
            }} className="author">
            <Typography>This Page Was Created By Armen Vardanyan : All Rights Are Reserved &copy;2022</Typography>
        </Box>
    )
}