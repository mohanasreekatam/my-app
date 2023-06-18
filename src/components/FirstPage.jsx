import React, { useState } from 'react'
//import React from 'react'
import imge from './Images/MainPage.jpg';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {

    const [isLoggedIn10, setIsLoggedIn10] = useState(false);
  const navigate10 = useNavigate();

  const handleLogin10 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn10(true);

    // Navigate to the desired route
    navigate10("/BasicTable");// Example: Navigate to the Admin page after login

  
  };

  const [isLoggedIn11, setIsLoggedIn11] = useState(false);
  const navigate11 = useNavigate();

  const handleLogin11 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn11(true);

    // Navigate to the desired route
    navigate11("/Navbar");// Example: Navigate to the Admin page after login

  
  };


  return (
  
        <>
        <Stack direction='row' alignItems={'center'} spacing={2}>
        <img src={imge} alt="" height={710} width={1200}/>
       
        <div>  
            <Stack direction={'row'} spacing={2} alignItems={'right'}>
        <Button variant="contained" onClick={handleLogin11}>USER</Button>
        <Button variant="contained" onClick ={handleLogin10}>ADMIN</Button>
        </Stack>
        </div>
        
        </Stack>
       
        </> 
        
          
  )
}

export default FirstPage