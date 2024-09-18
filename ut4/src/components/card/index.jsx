import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;
