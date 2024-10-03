import React, { useState, useEffect } from 'react';
import './style.css'
const EmailPresenter = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setINterval (() => {
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

export default EmailPresenter;