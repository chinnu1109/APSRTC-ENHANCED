import React, { useState } from 'react';
import './feedback.css'; // Import CSS file for styling
import Header from '../../components/header/header';
import Axios from 'axios'; 
import Footer from '../../components/footer/footer';

const FeedbackPage = () => {
    // State to store feedback text
    const [feedback, setFeedback] = useState('');
    // State to store rating
    const [rating, setRating] = useState(0);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the feedback data and rating to the backend API
            const response = await Axios.post('http://localhost:3001/api/feedback', { feedback, rating });
            console.log('Feedback submitted successfully:', response.data);
            // Clear the feedback input after submission
            setFeedback('');
            // Reset rating
            setRating(0);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    // Function to handle rating change
    const handleRatingChange = (value) => {
        setRating(value);
    };

    // Function to render star icons based on rating
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={i <= rating ? "star filled" : "star"}
                    onClick={() => handleRatingChange(i)}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div>
           <Header />
            <div className="container">
                
                <form onSubmit={handleSubmit}>
                    <label>
                        Please provide your feedback:
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            rows={4}
                            cols={50}
                        />
                    </label>
                    <br />
                    <label>
                        Rate our service:
                        <div className="rating-container">
                            {renderStars()}
                        </div>
                    </label>
                    <br />
                    <button type="submit">Submit Feedback</button>
                </form>
            </div>
       </div>
    );
};

export default FeedbackPage;
