import React, { useState } from 'react'
import img5 from './Images/Vegggg.png';
import { Stack } from '@mui/material';
import img6 from './Images/greengarden.png';
import img7 from './Images/margerita.png';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import PizzaTable from './PizzaTable';


const Design = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn(true);

    // Navigate to the desired route
    navigate("/Image");
  };// Example: Navigate to the Admin page after login

    const [isLoggedIn1, setIsLoggedIn1] = useState(false);
  const navigate1 = useNavigate();

  const handleLogin1 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn1(true);

    // Navigate to the desired route
    navigate1("/Image2");// Example: Navigate to the Admin page after login

  
  };

  const [isLoggedIn2, setIsLoggedIn2] = useState(false);
  const navigate2 = useNavigate();

  const handleLogin2 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn2(true);

    // Navigate to the desired route
    navigate2("/PizzaTable");// Example: Navigate to the Admin page after login

  
  };
  
  return (
   <>
   
    <div style={{ margin: '0', padding: '20px',alignItems:"center" }}>
        <h1> Best Pizza in Town</h1>
        <p>Pizza delivery drivers transport pizza from restaurants to people’s homes, workplaces, or other locations, and often process payments for those orders.</p>
        </div>
        <div style={{alignItems:'center'}}>
         <Stack direction='row'>
        <div style={{textAlign:'center',alignItems:'center'}}>
        <img src={img5} alt="" height={200} width={200} />
        <h3>VEGGIE PIZZA</h3>
        

       
        </div>
    <div style={{textAlign:'center'}}>
    <img src={img6} alt="" height={200} width={300}/>
    <h3>GREEN GARDEN</h3>
  


    </div>
    <div style={{textAlign:'center'}}>
      <img src={img7} alt="" height={200} width={200}/>
      <h3>MARGHERITA PIZZA</h3>
     
      
    </div>
    
      
    
    
    </Stack>
    
    <Button variant = "contained"  onClick={handleLogin2} style={{height:'40' , width:'40'}}>BUY NOW</Button>

</div>
    </>
  )
}

export default Design;