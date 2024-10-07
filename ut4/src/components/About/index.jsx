import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to this website. This is a website created for DWYM, UT4-TA17</p>
            <Link to='/'>Go Back</Link>
        </div>
    );
};

export default About;