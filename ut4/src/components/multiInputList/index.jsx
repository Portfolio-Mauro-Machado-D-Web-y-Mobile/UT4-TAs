import React from 'react';
//import './card.css'; // Assuming you have some CSS for styling
import './style.css'

const MultiInputList = ({ list, setList }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            setList([...list, e.target.value]); // Create a new list by spreading the current list and adding the new value
            e.target.value = ''; // Clear the input
        }
    };

    return (
        <div className="multiInputList">
            <input 
                className="multiInputList-input" 
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default MultiInputList;


