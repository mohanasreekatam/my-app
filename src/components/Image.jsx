import { Stack, color } from '@mui/system'
import React from 'react'
import img8 from './Images/pizza1.png'
import Counter from './Counter'


const Image = () => {
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
           
                <button style={{color:'white',backgroundColor:'#FF5F15',borderColor:"#FF5F15",height: '40px', width: '120px' }}> Add to Cart</button>
                </Stack>
            </div>

        </Stack>
    </div>
  )
}

export default Image;