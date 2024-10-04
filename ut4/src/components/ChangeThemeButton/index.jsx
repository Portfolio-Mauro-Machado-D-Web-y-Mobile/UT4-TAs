import React from 'react';
import './style.css'
import { ThemeContext } from '../../contexts/ThemeContext';

const ChangeThemeButton = () => {

    const { theme, setTheme } = React.useContext(ThemeContext);

    const handleButton = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme);
    };

    return (
        <div className="ChangeThemeButton">
            <button className='ChangeThemeButton-button' onClick={handleButton}></button>
        </div>
    );
};

export default ChangeThemeButton;
