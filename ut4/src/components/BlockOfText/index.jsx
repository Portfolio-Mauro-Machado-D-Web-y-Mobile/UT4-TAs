import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.css'

const BlockOfText = ({ text }) => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <div className={`blockOfText ${theme}`}>
            <h1 className='blockOfText-h1'>{text}</h1>
            <p className='blockOfText-paragraph'>{text}</p>
        </div>
    );
};

export default BlockOfText;