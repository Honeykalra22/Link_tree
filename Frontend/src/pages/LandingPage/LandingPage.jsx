import React, { useState } from "react";
import "./LandingPage.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Analytics from '../../assets/Analytics 1.jpg';
import div from '../../assets/div.jpg';
import div2 from '../../assets/div2.jpg';
import a1 from '../../assets/a1.png';
import a2 from '../../assets/a2.png';
import a3 from '../../assets/a3.png';
import a4 from '../../assets/a4.png';
import a5 from '../../assets/a5.png';
import a6 from '../../assets/a6.png';
import a7 from '../../assets/a7.png';
import a8 from '../../assets/a8.jpg';
import a9 from '../../assets/a9.png';
import logo from '../../assets/Group.png'

const LandingPage = () => {

  const messages = [
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
  ]

  return (
    <div className="container_Landing">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>SPARK | Marketplace</span>
        </div>
        <div>
          <Link to="/register">
            <button className="btn primary-btn">Sign up free</button>
          </Link>
        </div>
      </nav>


      <div className="main-container">
        <div className="hero">
          <div className="hero_1">
            <h1>The easiest place to update and share your Connection</h1>
            <p>
              Help your followers discover everything you’re sharing all over the internet, in one simple place. They’ll thank you for it!
            </p>
            <button className="btn secondary-btn">Get Started</button>
          </div>
          <img src={Analytics} alt="Dashboard" className="hero-img" />
        </div>

        <section className="hero">
          <img src={div} alt="Chart" className="hero-img" />
          <div className="hero_1">
            <h1>Analyze your audience and keep your followers engaged</h1>
            <p>See product insights and track payments.</p>
          </div>
        </section>
        <section className="hero">
          <div className="hero_1">
            <h1>Share limitless content in limitless ways</h1>
            <p>Monetization made simple.</p>
          </div>
          <img src={div2} alt="Content" className="hero-img" />
        </section>

        <section className="testimonials">
          <h2>Here's what our <span className="highlight">customer</span> has to say</h2>
          <button className="btn outline-btn">Read customer stories</button>

          <div className="messages-container">
            {messages.map((item, index) => (
              <div key={index} className="message-card">
                <h1>{item.heading}</h1>
                <p>{item.content}</p>
                <h2>{item.user}</h2>
                <h3>{item.position}</h3>
              </div>
            ))}
          </div>


          {/* <div className="testimonial-grid">
            <div className="testimonial-card">
              <FaCheckCircle className="icon" />
              <p>Amazing tool! Saved me months of work.</p>
              <span>- Satisfied Customer</span>
            </div>
            <div className="testimonial-card">
              <FaCheckCircle className="icon" />
              <p>Highly recommend for scaling businesses.</p>
              <span>- Another User</span>
            </div>
          </div> */}
        </section>

        {/* Integrations */}
        <section className="integrations">
          <h2>All Link Apps and Integrations</h2>
          <div className="integration-grid">
            <img src={a1} alt="" />
            <img src={a2} alt="" />
            <img src={a3} alt="" />
            <img src={a4} alt="" />
            <img src={a5} alt="" />
            <img src={a6} alt="" />
            <img src={a7} alt="" />
            <img src={a8} alt="" />
            <img src={a9} alt="" />
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2024 Spark Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;