import React from 'react';
import {Link} from "react-router-dom";

import pic from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 10.png';
import picc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 11.png';

import './Best.scss';

export default function Best() {
    return (
        <Link to="/female">

        <div>
        <h1>Best-Sellers</h1>

        <div className="best-dev">
            <div className="first-best">
                <img src={pic} />
                <span>Women’s</span>
            </div>
        
            <div className="sec-best">
                <img src={picc} />
                <span>Men’s</span>
            </div>
        </div>
        </div>
        </Link>
    )
}
