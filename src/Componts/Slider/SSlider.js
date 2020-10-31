import React from 'react';

import Slider from "react-slick";
import SliderDev from "./SliderDev/SliderDev"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './SSlider.scss'
export default function SSlider() {
    const settings = {
        dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      };
      
    return (
        <div>
             <Slider {...settings}>
                <SliderDev />
                <SliderDev />
                <SliderDev />
                <SliderDev /> <SliderDev /> <SliderDev />

             </Slider>
            
        </div>
    )
}
