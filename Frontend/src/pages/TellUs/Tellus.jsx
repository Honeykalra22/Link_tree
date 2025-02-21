import React, { useState } from 'react';
import './Tellus.css';
import SparkImage from '../../assets/Frame.jpg';

function Tellus() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [
        { name: "Business", emoji: "💼" },
        { name: "Creative", emoji: "🎨" },
        { name: "Education", emoji: "📚" },
        { name: "Entertainment", emoji: "🎭" },
        { name: "Fashion & Beauty", emoji: "💄" },
        { name: "Food & Beverage", emoji: "🍔" },
        { name: "Government & Politics", emoji: "🏛️" },
        { name: "Health & Wellness", emoji: "💪" },
        { name: "Non-Profit", emoji: "❤️" },
        { name: "Other", emoji: "❓" },
        { name: "Tech", emoji: "💻" },
        { name: "Travel & Tourism", emoji: "✈️" }
    ];

    return (
        <div className="tellus-container">

            <div className="form-container">
                <h1>SPARK</h1>
                <p>Tell us about yourself</p>
                <p>For a personalized Spark experience</p>

                <form>
                    <label htmlFor="username">Tell us your username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" />

                    <div className="category-selection">
                        <p>Select one category that best describes your Linktree:</p>
                        <div className="grid-container">
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className={`category-box ${selectedCategory === category.name ? 'selected' : ''}`}
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category.name}
                                        checked={selectedCategory === category.name}
                                        onChange={() => setSelectedCategory(category.name)}
                                        hidden
                                    />
                                    {category.emoji} {category.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" disabled={!selectedCategory}>Continue</button>
                </form>
            </div>
            <div className="image-container">
                <img src={SparkImage} alt="Spark" />
            </div>
        </div>
    );
}

export default Tellus;
