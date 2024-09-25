import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'
import { useState } from 'react';

const ButtonCounts = ({text}) => {

    const [value, setter] = useState(false);

    return (
        <div>

            <button className='ButtonDisappearText-Button' onClick={() => {setter(!value); }}>
                Show/Unshow
            </button>

            <p className='ButtonDisappearText-Value' hidden = {value}>
                {text}
            </p>
        </div>
    )
};

export default ButtonCounts;
