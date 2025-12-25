import React from 'react';
import marathonData from '../Home/marathon.json'

const MarathonCards = () => {
    // console.log(marathonData)
    return (

        <section className="py-10 bg-base-200 rounded-2xl">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Upcoming Marathon Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marathonData.map((event) => (
                        <div key={event.id} className="card bg-white shadow-md hover:shadow-xl transition duration-300">
                            <figure>
                                <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-bold text-primary text-center">{event.name}</h3>
                                <p><strong>Date:</strong> {event.date}</p>
                                <p><strong>Location:</strong> {event.location}</p>
                                <p><strong>Category:</strong> {event.category}</p>
                                <p><strong>Description:</strong> <small className='text-gray-600 font-semibold'>{event.description}</small></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarathonCards;