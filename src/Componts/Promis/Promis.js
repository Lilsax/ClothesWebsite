import React from 'react';

import './Promis.scss'

import pic from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 8.png';
import picc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 9.png';



export default function Promis() {
    return (
        <div>
        <span className="name ">Our Promise   Radical Transparency</span>

        <div className="promis-contain">
            <div className="first-promis">
                <img src={picc} alt />
                <span>Our sustainability initiatives: recycled materials, organic cotton, and more. </span>
                <a href="#">Learn More</a>
            </div>
            <div className="sec-promis">
                <img src={pic} alt />
                <span>Ethically Made. Designed to Last. </span>
                <a href="#">Learn More</a>
            </div>
        </div>

        </div>
    )
}
