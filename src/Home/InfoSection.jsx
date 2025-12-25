import React from 'react';
import slider3 from '../assets/7491.jpg';

const InfoSection = () => {
    return (
        <div className="bg-gray-100 py-10 px-4 sm:px-12 rounded-2xl">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h4 className="text-gray-500 font-semibold uppercase mb-2">Important</h4>
                    <h2 className="text-4xl font-bold text-red-600 mb-6">Key information</h2>

                    {/* Info Block */}
                    <div className="space-y-6">
                        <div>
                            <div className="border-l-4 border-black pl-4">
                                <p className="font-semibold mb-1">Kids ride free!</p>
                                <p className="text-gray-700">
                                    We want to encourage young riders to enjoy the pleasure of cycling.
                                    That's why all riders under 16 years ride for free when accompanied by a paying adult!
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="border-l-4 border-black pl-4">
                                <p className="font-semibold mb-1">Online pre-entry</p>
                                <p className="text-gray-700">
                                    Online pre-entry is the easiest way of entering and saves $3.00 per person vs. entering on the day.
                                    It also allows you to skip queues and pick up your registration pack faster.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="border-l-4 border-black pl-4">
                                <p className="font-semibold mb-1">On the day entry</p>
                                <p className="text-gray-700">
                                    On the day entries are available at all our events unless sold out.
                                    These entries are subject to a $3.00 per person surcharge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 w-full">
                    <img src={slider3} alt="Cyclist" className="w-full rounded-lg shadow-lg object-cover" />
                </div>
            </div>
        </div>
    );
};

export default InfoSection;