import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

const Login = () => {
    return (
        <div className='login_main'>
            <Link to="/dashboard"> Dashboard </Link>
        </div>
    )
}

export default Login