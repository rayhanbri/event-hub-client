import React, { use } from 'react';
import { Navigate, useNavigate } from 'react-router';

const Card = ({ dataPromise }) => {
    const events = use(dataPromise)
    const  navigate =useNavigate()
    console.log(events)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                events.map(event => <div key={event._id} className="card bg-base-100  shadow-sm">
                    <figure className="px-3 pt-3">
                        <img
                            src={event.imageUrl}
                            alt="Shoes"
                            className="rounded-xl w-65  object-cover
                            " />
                    </figure>
                    <div className="card-body items-start">
                            <h2 className="card-title "><strong>{event.name}</strong></h2>
                        <p><strong>Location:</strong><small className='text-gray-600'>{event.location}</small></p>
                        <p><strong>Date:</strong><small className='text-gray-600'>{event.date}</small></p>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>navigate(`/details/${event._id}`)} className="btn btn-primary w-full">See Details</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;