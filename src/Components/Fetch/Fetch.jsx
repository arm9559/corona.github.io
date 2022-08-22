import React, { useEffect, useState } from "react";
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
export default function Fetch(){
    const [value,setValue] = useState("");
    const [data,setData] = useState();
    const [targetValue,setTargetValue] = useState("");
    useEffect(()=>{
        const handle = setTimeout(()=>{
            if(value.length === 2){
                fetch(`https://corona-api.com/countries/${value}`)
                .then(stream => stream.json())
                .then(results => setData(results.data))
            }
        },500)
        return ()=>{
            clearTimeout(handle);
        }
    },[value]);
    let obj = {
        Country :"",
        Confirmed :"",
        Population :"",
        Recovered :"",
        Critical :"",
        Today :[],
        Date :"",
        Time :""
    }
    if(data !== undefined){
        obj.Country = data.name;
        obj.Confirmed = data.latest_data.confirmed;
        obj.Population = data.population;
        obj.Recovered = data.latest_data.recovered;
        obj.Critical = data.latest_data.critical;
        obj.Today.push("Confrmed   -   ",data.today.confirmed);
        obj.Today.push("               Deaths    -    ",data.today.deaths);
        obj.Date = data.updated_at.slice(0,10);
        obj.Time = data.updated_at.slice(11,19);
    }
    return(
        <div>
        <Box className="main" sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gridGap:"25px",
            padding:"5px",
            marginTop:"5px",
            fontFamily:"Josefin Sans , sans-serif"
        }}>
            <Typography sx={{
                fontSize:"18px"
            }}>Write The Country Code : </Typography>
            <Input placeholder="Type Country Code" 
            onChange={(e) => {
                setTargetValue(e.target.value);
            }}
            />
            <Button onClick={()=>{
                setValue(targetValue);
            }} sx={{
                backgroundColor:"#53A551",
                border:"none",
                height:"35px",
                width:"75px",
                fontSize:"15px",
                borderRadius:"5px",
                color:"white",
                cursor:"pointer",
                fontFamily:"Aboreto , cursive"
            }}>Search</Button>
        </Box>
            <Container maxWidth="string" sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                textAlign:"center"
            }}>
            <Box className="results" sx={{
                color:"#B74243",
                width:"100%",
                marginTop:"35px",
                fontFamily:"Josefin Sans', sans-serif",
            }}>
                 {Object.keys(obj).map((key, index) => {
                    return (
                    <Box key={index}>
                        <Typography sx={{fontSize:"22px",p:"2px"}}>
                            {key}: {obj[key]}
                        </Typography>
                        <hr />
                    </Box>
                    );
                })}
            </Box>
        </Container>
        </div>
    )
}