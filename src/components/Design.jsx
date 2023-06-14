import React, { useState } from 'react'
import img5 from './Images/Vegggg.png';
import { Stack } from '@mui/material';
import img6 from './Images/greengarden.png';
import img7 from './Images/margerita.png';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


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
    navigate2("/Image3");// Example: Navigate to the Admin page after login

  
  };
  
  return (
   <>
    <div style={{ margin: '0', padding: '20px',alignItems:"left" }}>
        <h1> Best Pizza in Town</h1>
        <p>Pizza delivery drivers transport pizza from restaurants to people’s homes, workplaces, or other locations, and often process payments for those orders.</p>
        </div>
         <Stack direction='row'>
        <div>
        <img src={img5} alt="" height={200} width={200} />
        <h3>VEGGIE PIZZA</h3>
        <p>$19.81</p>
        <p>Veggie pizza is a great choice if you believe more is more. It has (almost) everything: roasted red peppers, baby spinach, onions, mushrooms, tomatoes, and black olives. </p>
        <Button variant = "contained" onClick={
          handleLogin
        }>BUY NOW</Button>
        </div>
    <div>
    <img src={img6} alt="" height={200} width={300}/>
    <h3>GREEN GARDEN</h3>
    <p>$20.54</p>
    <p>Garden Green Pizza is an extremely delicious pizza recipe that you can easily try at home. topped with garden fresh veggies with a layer of creamy mozzarella cheese!

</p>
<Button variant = "contained" onClick={handleLogin1}>BUY NOW</Button>
    </div>
    <div>
      <img src={img7} alt="" height={200} width={200}/>
      <h3>MARGHERITA PIZZA</h3>
      <p>$18.78</p>
      <p>Margherita pizza is known for its ingredients representing the colours of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green basil.</p>
      <Button variant = "contained"  onClick={handleLogin2}>BUY NOW</Button>  
    </div>
    
    
    </Stack>
    </>
  )
}

export default Design;