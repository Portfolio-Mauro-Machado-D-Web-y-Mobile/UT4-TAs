import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { AuthContext } from '../../contexts/AuthContext';
const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of the application.</p>
            <button onClick></>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/products'>Products</Link>
        </div>
    );
};

export default Home;