import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const Input = ({placeHolder, setInputValue}) => {
    return (
        <div className="input">
            <input 
                className="input-input" 
                placeholder={placeHolder} 
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default Input;


