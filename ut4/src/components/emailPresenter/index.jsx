import React, { useState, useEffect } from 'react';
import './style.css'
const EmailPresenter = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setEmails(data))
            .catch(error => console.error('Error fetching emails:', error));
    }, []);

    return (
        <div>
            <ul className='email-list'>
                {emails.map(email => (
                    <li key={email.username}>{email.username} {email.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmailPresenter;