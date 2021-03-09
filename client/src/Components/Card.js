import React from 'react'
import './Card.css';

function Card({image, title}) {
    return (
        <div className="card">
            <div className="quiz poppins-normal-white-20px">{title}</div>
            <img className="x81364-art-paren-ad-free-image-1" src={image} />
        </div>
        
    )
}

export default Card
