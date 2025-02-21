import React from 'react'

function Links() {
    return (
        <div>


            {/* Main Content */}
            <div className="main-content">
                {/* Profile Section */}
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
                        <img src="" alt="Banner" />
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

            {/* <div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <button>Get Started</button>
                    <div>
                        logo part
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Pick an image</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
            </div>

            <div>
                <div>
                    <button>add link </button>
                    <button>add shop</button>
                </div>
                <div>
                    <p>add</p>
                </div>
            </div>


            <div>
                <div>
                    <img src="" alt="" />
                    <h2>username</h2>
                    <p>
                        <img src="" alt="" />
                        username
                    </p>
                </div>
                <div>
                    <p>custom background color</p>
                    <p>copor options to change bg</p>
                </div>
            </div>

            <button>save</button> */}
        </div>
    )
}

export default Links