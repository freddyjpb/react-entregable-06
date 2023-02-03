import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/login.css';

const UserInfo = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        navigate("/login");
    }

    return (
        <div className='login-container'>
            <div className='main-container'>
                <div className='login user-info'>
                    <i className='bx bxs-user-circle' ></i>
                    <b>{localStorage.getItem('userName')}</b>
                    <button onClick={logout}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;