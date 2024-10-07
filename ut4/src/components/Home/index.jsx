import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of the application.</p>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Home;