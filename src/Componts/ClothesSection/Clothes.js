import React from 'react'

import './Clothes.scss'

import pic from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 5.png';
import picc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 6.png';
import piccc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 7.png';


export default function Clothes() {
    return (
        <div className="Clothes-dic contain">
            <div >
                <img src={piccc} alt />
                <span>The Lantern Canvas Bag </span>
                <span>Casual, cool shape. Functional details.</span>
                <span>Everything you want in an everyday bag-for $50.</span>
            </div>
            <div>
            <img src={picc} alt />
                <span>The Lantern Canvas Bag </span>
                <span>In limited-run fall colors.Five for $25..</span>
            </div>
            <div>
            <img src={pic} alt />
                <span>The Lantern Canvas Bag </span>
                <span>Make sure you’re registered here.</span>
            </div>            
        </div>
    )
}
