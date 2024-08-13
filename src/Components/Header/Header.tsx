import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate('/')
    }

    return (
        <div className='header_wrapper'>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Header