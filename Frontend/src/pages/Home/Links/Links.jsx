import React, {useState} from 'react'
import logo from '../../../assets/Group.png'
import './Links.css'

function Links() {
    const [activeButton, setActiveButton] = useState(null);
    const [showLinks, setShowLinks] = useState(true);

    const handleButtonClick = (button) => {
        setActiveButton(button);
        if (button === "link") {
            setShowLinks(true);
        } else {
            setShowLinks(false);
        }
    };

    return (
        <div className='container'>
            <div className="phone-container">
                {/* Top Section */}
                <div className="profile">
                    <button className="share-btn">Share</button>
                    <div className="profile">
                        <img src={logo} alt="profile" className="profile-img" />
                        <p className="username">Username</p>
                    </div>
                </div>

                {/* Buttons for Links & Shop */}
                <div className="button-group">
                    <button
                        className={`toggle-btn ${activeButton === "link" ? "active" : ""}`}
                        onClick={() => handleButtonClick("link")}
                    >
                        Link
                    </button>
                    <button
                        className={`toggle-btn ${activeButton === "shop" ? "active" : ""}`}
                        onClick={() => handleButtonClick("shop")}
                    >
                        Shop
                    </button>
                </div>

                {showLinks && (
                    <div className="links-section">
                        <div className="link-item">
                            <img src={logo} alt="youtube icon" /> Latest YouTube Video
                        </div>
                        <div className="link-item">
                            <img src={logo} alt="instagram" /> Latest Instagram Reel
                        </div>
                    </div>
                )}

                {/* Get Connected Section */}
                <div className="connect-section">
                    <button className="connect-btn">Get Connected</button>
                    <div className="logo-container">
                        <img src={logo} alt="logo" className="logo" />
                        <h2>SPARK</h2>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Profile Section */}
                <p>profile</p>
                <div className="profile-section">
                    <div className="profile-pic">
                        <img src="" alt="Profile" />
                        <div className="profile-actions">
                            <p className="pick-image">Pick an image</p>
                            <p className="remove">Remove</p>
                        </div>
                    </div>
                    <div className="profile-inputs">
                        <input type="text" placeholder="Profile Title" />
                        <input type="text" placeholder="Bio" />
                    </div>
                </div>

                {/* Add Link Section */}
                <div className="add-links">
                    <div className="add-buttons">
                        <button>Add Link</button>
                        <button>Add Shop</button>
                    </div>
                    <div className="add-box">
                        <p>Add</p>
                    </div>
                </div>

                {/* Banner Section */}
                <div className="banner-section">
                    <div className="banner">
                        <img src={logo} alt="Banner" />
                        <h2>Username</h2>
                        <p>
                            <img src="" alt="User Icon" />
                            username
                        </p>
                    </div>
                    <div className="color-options">
                        <p>Custom Background Color</p>
                        <div className="color-picker">
                            <div className="color-box black"></div>
                            <div className="color-box white"></div>
                            <div className="color-box gray"></div>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <button className="save-btn">Save</button>

            </div>
        </div>
    )
}

export default Links