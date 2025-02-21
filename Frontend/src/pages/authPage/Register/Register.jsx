import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const url = 'http://localhost:8000/api/v2/user/register';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(url, formData);
      console.log('User registered successfully:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="logo">
          <img src="/logo.png" alt="SPARK" />
        </div>
        <h2>Sign up to your Spark</h2>
        <p>Create an account <Link to="/login">Sign in instead</Link></p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

          <div className="terms">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <label>By creating an account, I agree to the <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link></label>
          </div>

          <button type="submit" className="btn primary-btn">Create an account</button>
        </form>

        <div className="divider">OR</div>

        <button className="btn google-btn">
          <img src="/google-icon.png" alt="Google" />
          Continue with Google
        </button>

        <p className="recaptcha-text">
          This site is protected by reCAPTCHA and the <Link to="#">Google Privacy Policy</Link> and <Link to="#">Terms of Service</Link> apply.
        </p>
      </div>

      <div className="signup-image"></div>
    </div>
  );
};

export default Register;
