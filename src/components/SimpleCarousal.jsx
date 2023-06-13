import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SimpleCarousal = () => {
  return (
    <div>
        <nav>

        </nav>
   
        <div style={{ marginTop: '20px',padding:'0', margin:'0'}}>
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}  showIndicators={false}>
      <div>
        <img src="https://media.istockphoto.com/id/498682239/photo/margherita-flat-bread-pizza.jpg?s=1024x1024&w=is&k=20&c=4QIPB1JMgjA0wI4rAmbWveM9-fmYFoqyiMMyq1iYG64=" alt="Image 1" height={1500}/>
        


        
      </div>
      <div>
        <img src="https://www.shutterstock.com/shutterstock/photos/2126377001/display_1500/stock-photo-buy-get-free-limited-offer-label-with-pizza-background-2126377001.jpg" alt="Image 2" height={1500}/>
        
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1256142720/vector/italian-cheese-pizza-vector-illustration.jpg?s=612x612&w=0&k=20&c=p5FP9lBPMa-PliPuZle_rkFR44tPn2G3lXlLW8ky1ZA=" alt="Image 3" height={1500}/>
        
      </div>
    
    </Carousel>
    </div>
    </div>
  );
};

export default SimpleCarousal;