import React from 'react';
import '../css/cards.css';

const Cards = (props) => {
    const {heading,text} = props;
   
    return (  
        <div className="card-container">
            <div className="card-main">
                <div className="card-child">
                    <h3>{heading}</h3>
                    <p className="text">{text}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Cards;