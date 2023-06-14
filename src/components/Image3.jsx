import React, { useState } from 'react'
import { Stack, color } from '@mui/system'
//import React from 'react'
import img6 from './Images/im3.png'
import Counter from './Counter'
import { useNavigate } from 'react-router-dom';


const Image3 = () => {

  const [isLoggedIn6, setIsLoggedIn6] = useState(false);
  const navigate6 = useNavigate();

  const handleLogin6 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn6(true);

    // Navigate to the desired route
    navigate6("/");// Example: Navigate to the Admin page after login

  
  };
  return (
    <div>
        <Stack direction='row' spacing={2}> 
            <div>
                <img src={img6} alt="" height={550} width={550} />
            </div>
            <div style={{alignItems:'center',textAlign: 'center', marginBottom: '40px'}}>
                <h1>MARGHERITA PIZZA</h1>
                <h1>$18.78</h1>
                <p>Margherita Pizza is known for its ingredients representing the colours of the Italian flag.These ingredients include red tomoto sauce,White mozzerella and fresh green basil.</p>
                <Stack direction='column' spacing={2} alignItems='center' justifyContent='center'>
                <Counter />
           
                <button style={{color:'white',backgroundColor:'#FF5F15',borderColor:"#FF5F15",height: '40px', width: '120px' }}> Add to Cart</button>
                <button style={{color:'white',backgroundColor:'#FF5F15',borderColor:"#FF5F15",height: '40px', width: '120px' }} onClick={handleLogin6}> Back</button>
                </Stack>
            </div>

        </Stack>
    </div>
  )
}

export default Image3;