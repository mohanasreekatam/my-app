import React, { useState } from 'react'
import { Stack, color } from '@mui/system'
//import React from 'react'
import img7 from './Images/pi2.png'
import Counter from './Counter'
import { useNavigate } from 'react-router-dom';


const Image2 = () => {

  const [isLoggedIn5, setIsLoggedIn5] = useState(false);
  const navigate5 = useNavigate();

  const handleLogin5 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn5(true);

    // Navigate to the desired route
    navigate5("/");// Example: Navigate to the Admin page after login

  
  };
  return (
    <div>
        <Stack direction='row' spacing={2}> 
            <div>
                <img src={img7} alt="" height={500} width={650} />
            </div>
            <div style={{alignItems:'center',textAlign: 'center', marginBottom: '40px'}}>
                <h1>GREEN GARDEN PIZZA</h1>
                <h1>$20.54</h1>
                <p>Garden Green Pizza is an extremely delicious pizza recipe that you can easily try at home topped with garden fresh veggies with a layer of creamy mozzarella cheese!</p>
                <Stack direction='column' spacing={2} alignItems='center' justifyContent='center'>
                <Counter />
           
                <button style={{color:'white',backgroundColor:'#FF5F15',borderColor:"#FF5F15",height: '40px', width: '120px' }}> Add to Cart</button>
                <button style={{color:'white',backgroundColor:'#FF5F15',borderColor:"#FF5F15",height: '40px', width: '120px' }} onClick={handleLogin5}> Back</button>
                </Stack>
            </div>

        </Stack>
    </div>
  )
}

export default Image2;