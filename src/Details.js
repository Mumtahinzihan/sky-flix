import React from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
    return (
        <div>
            <Link to='/'>Click me to go back to homepage</Link>
            <h1>hello details</h1>
        </div>
    )
}