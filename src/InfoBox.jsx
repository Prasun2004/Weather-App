import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL ="https://tse3.mm.bing.net/th?id=OIP.oArCM9Oi1JuaqLVgvpuktgHaEK&pid=Api&P=0&h=180";
        
    const HOT_URL="https://tse1.mm.bing.net/th?id=OIP.XaqfH7E02xAnabxyPNODuwHaE6&pid=Api&P=0&h=180";
    const COLD_URL="https://tse3.mm.bing.net/th?id=OIP.9ShlqkYDZjtMW-yIcybq1gHaEK&pid=Api&P=0&h=180";
    const RAIN_URL="https://tse2.mm.bing.net/th?id=OIP.V5NRUPu_tkRJFp_Rl-FnyAHaHa&pid=Api&P=0&h=180";

    return(
        <div className='InfoBox'>
       <div className='cardContaineer'>   
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp >15 ?HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Min-temp ={info.tempMin}</p>
          <p>Max-temp ={info.tempMax}</p>
          <p>The Weather can be describe at {info.weather} and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>  
    );
}