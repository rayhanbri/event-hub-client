import React, { use } from 'react';
import { Navigate, useNavigate } from 'react-router';

const Card = ({ dataPromise }) => {
    const marathons = use(dataPromise)
    const  navigate =useNavigate()
    // console.log(marathons)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                marathons.map(marathon => <div key={marathon._id} className="card bg-base-100  shadow-sm">
                    <figure className="px-3 pt-3">
                        <img
                            src={marathon.image}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start">
                            <h2 className="card-title "><strong>{marathon.title}</strong></h2>
                        <p><strong>Location:</strong><small className='text-gray-600'>{marathon.location}</small></p>
                        <p><strong>Registration:</strong><small className='text-gray-600'>{marathon.startReg}</small></p>
                        <p><strong>Description:</strong><small className='text-gray-600'>{marathon.description}</small></p>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>navigate(`/details/${marathon._id}`)} className="btn btn-primary w-full">See Details</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;