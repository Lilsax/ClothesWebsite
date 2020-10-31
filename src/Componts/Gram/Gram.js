import React from 'react';

import './Gram.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Gramm from './GramHolder/GramHolder';

import picc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 15.png';

import pic from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 12.png';

import piccc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 13.png';

import piccccc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 14.png';


export default function Gram() {
    const settings = {
        className: "sleman",
        arrows: true,
        infinite: true,
        buttons:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return (
        <div className="grammm">

            <h2 >On The Gram</h2>

            <Slider {...settings} >
            <Gramm img={pic}  />
            <Gramm img={picc} />
            <Gramm img={piccc} />
            <Gramm img={piccccc} />
            <Gramm img={piccc} />
            <Gramm img={picc} />
            <Gramm img={piccccc} />
            <Gramm img={pic} />
            </Slider>
           
        </div>
    )
}
