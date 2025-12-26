import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { name, email, createdAt, comment, rating } = review;
    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
       <div className="card bg-gradient-to-br from-primary to-secondary shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-md mx-auto">
      <div className="card-body p-6">
        {/* Event Name as Title */}
        <h2 className="card-title text-2xl font-bold text-white justify-center mb-4">
          {name}
        </h2>
        
        {/* Reviewer Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-10">
                <span>{email.charAt(0).toUpperCase()}</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="font-semibold text-white">{email}</p>
              <p className="text-sm text-gray-300">{formattedDate}</p>
            </div>
          </div>
        </div>
        
        {/* Comment */}
        <p className="text-white text-center italic mb-4">"{comment}"</p>
        
        {/* Rating with Stars */}
        <div className="rating rating-md justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;