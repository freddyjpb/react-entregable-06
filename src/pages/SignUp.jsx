import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import setIsLoading from '../store/slices/app.slice';
import "../css/login.css";

const SignUp = () => {

    const { register, handleSubmit } = useForm();

    const [ error, setError ] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submit = data => {
        alert("Submit")
        dispatch(setIsLoading(true));
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users', data)
            .then(() => {
                navigate('/login')
                setError("");
            })
            .catch(() => setError("There was an error"))
            .finally(() => dispatch(setIsLoading(false)));
    }


    return (
        <div className="login-container">
            <div className="main-container">

                <form className="login" onSubmit={handleSubmit(submit)}>
                    <strong>Sign Up</strong>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            { ...register("email") }
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id="firstName"
                            { ...register("firstName") }
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            { ...register("lastName") }
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" { ...register("password") } />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Phone (10 characters)</label>
                        <input 
                            type="tel" 
                            id="phone"
                            { ...register("phone") }
                        />
                    </div>
                    <div className="error-message">
                        {error}
                    </div>
                    <button className='submit-button' type="submit">
                        Sign up
                    </button>
                    <div className="switch-forms">
                        Already have an account? {" "}
                        <button type="button" onClick={() => navigate("/login")}>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;