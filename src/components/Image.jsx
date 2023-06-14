import React, { useState } from 'react'
import { Stack, color } from '@mui/system'
//import React from 'react'
import img8 from './Images/pizza1.png'
import Counter from './Counter'
import { useNavigate } from 'react-router-dom';


const Image = () => {

  const [isLoggedIn4, setIsLoggedIn4] = useState(false);
  const navigate4 = useNavigate();

  const handleLogin4 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn4(true);

    // Navigate to the desired route
    navigate4("/");// Example: Navigate to the Admin page after login

  
  };


  const [isLoggedIn7, setIsLoggedIn7] = useState(false);
  const navigate7 = useNavigate();

  const handleLogin7 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn7(true);

    // Navigate to the desired route
    navigate7("/Cart");// Example: Navigate to the Admin page after login

  
  };

  return (
    <div>
        <Stack direction='row' spacing={2}> 
            <div>
                <img src={img8} alt="" height={500} width={600} />
            </div>
            <div style={{alignItems:'center',textAlign: 'center', marginBottom: '40px'}}>
                <h1>VEGGIE PIZZA</h1>
                <h1>$19.81</h1>
                <p>Veggie pizza is a great choice if you believe more is more.It has (almost) everything: roasted red peppers, baby spinach, onions, mushrooms, tomatoes, and black olives. It's also topped with three kinds of cheese — feta, provolone, and mozzarella — and sprinkled with garlic herb seasoning.</p>
                <Stack direction='column' spacing={2} alignItems='center' justifyContent='center'>
                <Counter />
           
                <button style={{color:'white',backgroundColor:'#FF5F15',borderColor:"#FF5F15",height: '40px', width: '120px' }} onClick={handleLogin7}> Add to Cart</button>
                <button style={{color:'white',backgroundColor:'#FF5F15',borderColor:"#FF5F15",height: '40px', width: '120px' }} onClick={handleLogin4}> Back</button>
                </Stack>
            </div>

        </Stack>
    </div>
  )
}

export default Image;