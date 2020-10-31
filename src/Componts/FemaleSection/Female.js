import React from 'react'
import './Female.scss'

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


import pic from 'C:/Users/user/Desktop/awad/src/Assests/pic.png';
import video from 'C:/Users/user/Desktop/awad/src/Assests/aa.mov';

export default function Header() {
    return (
        <div>
            <Nav/>
            <div>
            <img className="immmmmg" src={pic} />
            <video className="vvideo" autoPlay muted loop >
                <source src={video}/>
            
            </video>
            </div>
        </div>
    )
}
