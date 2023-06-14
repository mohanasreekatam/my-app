import React, { useState } from 'react'
//import React from 'react'
import img5 from './Images/Vegggg.png';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


const Cart = () => {

    const [isLoggedIn8, setIsLoggedIn8] = useState(false);
  const navigate8 = useNavigate();

  const handleLogin8 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn8(true);

    // Navigate to the desired route
    navigate8("/Image");// Example: Navigate to the Admin page after login

  
  };

    
  return (
    <div>
        <img src={img5} alt="" height={200} width={200} />
        <h3>VEGGIE PIZZA</h3>
        <p>$19.81</p>
        <Button variant = "contained">Delete</Button>
        <Button variant = "contained" onClick={handleLogin8}>View Item</Button>
        </div>
  )
}

export default Cart