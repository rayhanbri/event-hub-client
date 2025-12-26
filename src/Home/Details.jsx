import React, { useEffect, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaRunning } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { GiPathDistance } from 'react-icons/gi';
import { MdAttachMoney, MdDateRange, MdEmail, MdEvent } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router';
import { details } from '../API/data_hook';
import AuthHook from '../Components/Hooks/AuthHook';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Helmet } from '@dr.pogodin/react-helmet';
import { PiSeat } from 'react-icons/pi';
import { VscOrganization } from 'react-icons/vsc';

const Details = () => {
    const navigate = useNavigate();
    const { user } = AuthHook()
    const event = useLoaderData();
    const { _id, imageUrl, name, date, location, description,
        registrationDeadline,registrationFee,seatsAvailable,organizer
    } = event;
    console.log(event)
    // const call = details(_id, user.accessToken)
    // console.log(call)


    // console.log(registrationOpen)
    return (
        <div className="card bg-base-100 shadow-sm flex ">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <figure>
                <img
                    src={imageUrl}
                    className='w-70'
                    alt="Movie" />
            </figure>
            {/* Countdown Timer */}
            <div className="my-6 flex justify-center">
                <p className='text-2xl font-bold items-center gap-0.5'>Title: {name}</p>
            </div>
            <div className="card-body">
                <div className="card-title text-center"></div>
                <div className='md:space-y-2'>
                    <p className='flex items-center gap-0.5'><VscOrganization className='text-blue-600' />Organizer Name : {organizer.name}</p>
                    <p className='flex items-center gap-0.5'><MdEmail className='text-blue-600' />Email : {organizer.email}</p>
                    <p className='flex items-center gap-0.5'><FaLocationDot className='text-red-600' />Location : {location}</p>
                    <p className='flex items-center gap-0.5'><MdAttachMoney
                        className='text-blue-600' />Registration Fee: {registrationFee}</p>
                    <p className='flex items-center gap-0.5'><MdEvent className='text-blue-600' />Event Date : {new Date(date).toISOString().split("T")[0]}</p>
                    <p className='flex items-center gap-0.5'><MdDateRange className='text-blue-600' />End Registration : {new Date(registrationDeadline).toISOString().split("T")[0]}</p>
                    <p className='flex items-center gap-0.5'><PiSeat
                        className='text-blue-600' />Available Seats : {seatsAvailable}</p>
                    <p className='flex items-center gap-0.5'><BsInfoCircle className='text-blue-600' />Description : {description}</p>

                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/event-register/${_id}`)} className="btn btn-primary w-full" >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;