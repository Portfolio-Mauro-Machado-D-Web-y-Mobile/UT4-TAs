import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
            <Link to='/'>Go Back</Link>
        </div>
    );
};

export default Contact;