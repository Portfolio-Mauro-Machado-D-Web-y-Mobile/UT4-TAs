import React, { useState, useEffect } from 'react';
import './style.css'
const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval (() => {
            setTime(time + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div>
            <h1 className='timer-header'>Timer</h1>
            <p className='timer-paragraph'>{time} segundos</p>
        </div>
    );
};

export default Timer;