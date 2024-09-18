import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const Card = ({ title, description, assignedTo, startDate, endDate }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="card-assignedTo">{assignedTo}</p>
            <p className="card-startDate">{startDate}</p>
            <p className="card-endDate">{endDate}</p>
        </div>
    );
};

export default Card;
