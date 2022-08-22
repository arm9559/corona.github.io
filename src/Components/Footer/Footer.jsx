import React from "react";
//MUI
import Typography from '@mui/material/List';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
export default function Footer(){
    return(
        <Container className="footer" maxWidth="string" sx={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            background:"#B74243",
            color:"white",
            height:"auto",
            padding:"25px",
            fontFamily:"Aboreto , cursive",
            alignItems:"flex-start",
            marginTop:"93px"
        }}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gridGap:"25px",
                width:"500px"
            }}>
                    <Typography sx={{
                        padding:"5px",
                        textAlign:"center"
                    }}>
                        COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.
                    </Typography>
                    <Link sx={{
                        width:"241px",
                        textDecoration:"none"
                        }}
                        href="https://en.wikipedia.org/wiki/COVID-19#:~:text=Coronavirus%20disease%202019%20(COVID%2D19,in%20the%20COVID%2D19%20pandemic." target="_blank" >
                        <Button sx={{
                            height:"45px",
                            border:"none",
                            borderRadius:"5px",
                            fontFamily:"Aboreto , cursive",
                            cursor:"ponter",
                            backgroundColor:"#68A35B",
                            color:"white",
                            fontSize:"15px",
                            textDecoration:"none !important"
                        }}>For Read More Click Here</Button>
                    </Link>
                </Box>
            </Container>
    )
}