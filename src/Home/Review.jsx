import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://event-hub-server-umber.vercel.app/review")
            .then(res => res.json())    
            .then(data => setReviews(data))  
            .catch(err => console.error(err));
    }, []); 


    return (
        <div className="container mx-auto p-4 mt-6">

            <h1 className="text-2xl font-bold mb-4">All Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Review;