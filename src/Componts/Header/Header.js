import React from 'react';

import './Header.scss';

import pic from 'C:/Users/user/Desktop/awad/src/Assests/maya.jpg';
import picc from 'C:/Users/user/Desktop/awad/src/Assests/pexels-photo-3433632.jpeg';
export default function Header() {
    return (
       <div className="  header">
            <div className="images-holder">
                <img src={pic} alt="first girl"/>
                <img src={picc} alt="first girl"/>
            </div>

            <div className="text-holder">
            <span>100% Human</span>
            <br/>
            <span> Is  Back</span>
            <p>Fresh Look &nbsp;  .Same cause  .&nbsp; Introducing <br/> our new 100% &nbsp; Human &nbsp;collection .</p>
            <button>SHOP NOW</button>

            <p>Sign up for 10% off your first order. Valid within two days of signup.</p>
            </div>
       </div>
    )
}
