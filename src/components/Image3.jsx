import { Stack, color } from '@mui/system'
import React from 'react'
import img6 from './Images/im3.png'
import Counter from './Counter'


const Image3 = () => {
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
                </Stack>
            </div>

        </Stack>
    </div>
  )
}

export default Image3;