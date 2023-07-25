import React, { useState } from 'react';
import './index.css';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const specificEmail = 'faisalsabir.ffs@gmail.com';
        const specificPassword = 'solution123';

        if (email === '' || password === '') {
            alert('Please enter both email and password to log in.');
        } else if (email !== specificEmail || password !== specificPassword) {
            alert('Invalid email or password. Please try again.');
        } else {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            console.log('Email:', email);
            console.log('Password:', password);
            window.location.href = '/Tables';
        }
    };

    return (
        <>
            <div className='main'>
                <h1 className='log'>ADMIN LOGIN</h1>
                <input
                    className='input-field'
                    type='text'
                    placeholder='Enter Your Email Address'
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <input
                    className='input-field'
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <Button variant="primary" className='mt-2 btn1' onClick={handleLogin}>
                    Log in
                </Button>
            </div>
        </>
    );
}

export default Index;
