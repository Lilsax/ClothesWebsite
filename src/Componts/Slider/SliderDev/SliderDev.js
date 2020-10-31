import React from 'react'

import './SliderDev.scss';

import picc from 'C:/Users/user/Desktop/awad/src/Assests/sax.png';


export default function SliderDev() {
    return (
        <div className="slider-dev">
                <div className="first-slider">
                    <span>FROM THE PEOPLE</span>
                    <span>"Super classic, cute. and comfortable. You can wear
                        them with just about anything.”</span>
                    <span> &#8722; Chrostone M., The Forever Sneaker</span>
                </div>

                <div className="sec-slider">
                    <img className="imageSlider" src={picc} />
                    <a href="#">Shop The Forever Sneaker</a>
                </div>

        </div>
    )
}
