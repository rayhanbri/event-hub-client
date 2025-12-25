import React from 'react';
import { useNavigate } from 'react-router';
import { createResource } from '../../CreateResource/createResource';

const AllCard = ({ dataResource }) => {
  const events = dataResource.read();
  const navigate = useNavigate();
  console.log(events)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {events.map((event) => (
        <div key={event._id} className="card bg-base-100 shadow-sm">
          <figure className="px-3 pt-3">
            <img src={event.imageUrl} alt={event.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-start">
            <h2 className="card-title "><strong>{event.name}</strong></h2>
            <p><strong>Location:</strong><small className='text-gray-600'>{event.location}</small></p>
            <p><strong>Date:</strong><small className='text-gray-600'>{new Date(event.date).toISOString().split("T")[0]}</small></p>
            <p><strong>Seats Available:</strong><small className='text-gray-600'>{event.seatsAvailable}</small></p>
            <p><strong>Description:</strong><small className='text-gray-600'>{event.description}</small></p>
          </div>
          <div className="card-actions">
            <button onClick={() => navigate(`/details/${event._id}`)} className="btn btn-primary w-full">
              See Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCard;
