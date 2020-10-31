import React from 'react';

import './GramHolder.scss';

import picc from 'C:/Users/user/Desktop/awad/src/Assests/Rectangle 15.png';

export default function GramHolder(props) {
    return (
        <div className="Gram-div">
            <img src={props.img} alt=""/>
            <span>@cestchrostone3 x The Forever Sneaker</span>
        </div>
    )
}
