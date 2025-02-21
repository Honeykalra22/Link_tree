import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './HomePage.css';
import Links from '../Links/Links';

function HomePage() {
    const [username, setUsername] = useState('Hitesh');
    
    return (
        <div className="homepage">
            <div className="sidebar-container">
                <Sidebar username={username} />
            </div>
            <div className="main-content">
                <Navbar username={username} />
                <div className="content-area">
                    <Links/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;


 {/* <div>
                <div>
                    <img src={logo} alt="" />
                    <p>Spark</p>
                </div>
                <div>
                    <h2>Hi, {username}!</h2>
                    <p>Congratulations . You got a great response today . </p>
                </div>
            </div>
            <div>sidebar</div>
            <div>mobile</div>
            <div>profile</div>
            <div>add link</div>
            <div>banner</div>
            <button>save</button> */}