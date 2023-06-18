import React from 'react'
import imgw from './Images/order.webp';
import { Button, Stack } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
    const [isLoggedIn38, setIsLoggedIn38] = useState(false);
    const navigate38 = useNavigate();
  
    const handleLogin38 = () => {
      // Perform login logic here
  
      // Assuming successful login, set isLoggedIn to true
      setIsLoggedIn38(true);
  
      // Navigate to the desired route
      navigate38('/Navbar'); // Example: Navigate to the Admin page after login
    };
    
    const imageStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      };
      const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
      };
  return (
    
    <div>
       
        <img src={imgw} alt="Centered Image"

        style={imageStyle}
        />
        <div style={containerStyle}>
        <Button color="error" variant="contained" onClick={handleLogin38}>
    cancel
  </Button>
  </div>
    </div>
   
  )
}

export default Payment