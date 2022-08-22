import React from "react"
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Header(props){
    return(
        <Box className="header" sx={{
            height:"95px",
            backgroundColor:"#C6363E",
            textAlign:"left",
            display:"flex",
            overflow:"hidden",
            alignItems:"center"
        }}>
            <Typography sx={{
                margin:"0px",
                padding:"12px",
                fontFamily:"Aboreto , cursive",
                color:"white",
                fontSize:"25px",
            }}>
            Coronavirus Pandemia
            </Typography>
            <img src={props.logo} alt="Corona Logo"/>
        </Box>
    )
}