import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const url = 'http://localhost:8000/api/v2/user/login';
    const [formData, setFormData] = useState({ username: "", password: "" });
    const isFormValid = formData.username.trim() !== "" && formData.password.trim() !== "";

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post(url, formData);
            console.log('User logged in successfully:', response.data);
            alert('Login successful!');
            navigate('/tell-us-about-you')
        } catch (error) {
            console.error('Error logging in:', error.response?.data || error.message);
            alert('Login failed. Please try again.');
        }
    };



    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Sign in to your Spark</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Spark/ Username"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />

                    </div>
                    <div className="input-field password-field">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />


                        <span
                            className="toggle-password"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? "🙈" : "👁️"}
                        </span>
                    </div>
                    <button type="submit" className={`login-btn ${isFormValid ? "active" : ""}`} disabled={!isFormValid}>
                        Log in
                    </button>
                </form>
                <a href="#" className="forgot-password">Forgot password?</a>
                <p>
                    Don't have an account? <Link to='/register'><span className="signup-link">Sign up</span></Link>
                </p>
                <p className="recaptcha-text">
                    This site is protected by reCAPTCHA and the{" "}
                    <a href="#">Google Privacy Policy</a> and{" "}
                    <a href="#">Terms of Service</a> apply.
                </p>
            </div>
            <div className="image-container"></div>
        </div>
    );
};

export default Login;
