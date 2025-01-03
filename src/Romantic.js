import React from 'react';
import './RomanticSection.css';
import Img1 from './r1.jpeg'
import Img2 from './r2.jpeg'
import Img3 from './r3.jpeg'
import Img4 from './r4.jpeg'
import Img5 from './r5.jpeg'
import Img6 from './r6.jpeg'
import Img7 from './r7.jpeg'
import Img8 from './r8.jpeg'
import Img9 from './r9.jpeg'
import Img10 from './r10.jpeg'

import { Carousel } from 'antd';

function RomanticSection() {
  
  return (
    <div class="romantic">
        <div class="read">
            
        </div>
        <Carousel autoplay className='slider-image'>
        <img src={Img1} width="100%" />
            <img src={Img2} alt='' width="100%" />
            <img src={Img3} alt=''  width="100%" />
            <img src={Img4} alt='' width="100%" />
            <img src={Img5} alt='' width="100%" />
            <img src={Img6} alt='' width="100%"  />
            <img src={Img7} alt='' width="100%" />
            <img src={Img8} alt='' width="100%" />
            <img src={Img9} alt='' width="100%" />
            <img src={Img10} alt=''  width="100%" />
          </Carousel>
        
    </div>
  );
}

export default RomanticSection;
