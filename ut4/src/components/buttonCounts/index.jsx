import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const ButtonCounts = ({value, setter}) => {


    return (
        <div>
            <button className='ButtonCounts-Increase' onClick={() => setter(value + 1)}>
                Increase
            </button>

            <button className='ButtonCounts-Decrease' onClick={() => setter(value - 1)}>
                Decrease
            </button>

            <p className='ButtonCounts-Value'>
                {value}
            </p>
        </div>
    )
};

export default ButtonCounts;
