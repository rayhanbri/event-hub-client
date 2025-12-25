import React, { useEffect, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaRunning } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { GiPathDistance } from 'react-icons/gi';
import { MdDateRange, MdEvent } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router';
import { details } from '../API/Details';
import AuthHook from '../Components/Hooks/AuthHook';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Helmet } from '@dr.pogodin/react-helmet';

const Details = () => {
    const [total, setTotal] = useState(0)
    const navigate = useNavigate();
    const { user } = AuthHook()
    const marathon = useLoaderData();
    const [registrationOpen, setRegirationOpen] = useState(false);
    const { _id, image, title, endReg, startReg, marathonDate, location, description, distance } = marathon;
    const [timeRemaining, setTimeRemaining] = useState(0);
    // console.log(marathon)
    useEffect(() => {
        fetch(`https://assigment-11-server-ten.vercel.app/total-registration/${_id}`)
            .then(res => res.json())
            .then(data => setTotal(data.total))
    }, [_id, setTotal])
    // const call = details(_id, user.accessToken)
    // console.log(call)
    useEffect(() => {
        const today = new Date();
        const startDate = new Date(startReg)
        const endDate = new Date(endReg)
        // console.log(today,startDate,endDate)
        if (today >= startDate && today < endDate) {
            setRegirationOpen(true)
        }
        else {
            setRegirationOpen(false)
        }
        //  Countdown Setup
        const marathonStart = new Date(marathonDate).getTime();
        const now = new Date().getTime();
        const remaining = Math.floor((marathonStart - now) / 1000); // in seconds
        setTimeRemaining(remaining > 0 ? remaining : 0);
    }, [startReg, endReg, marathonDate])

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const second =Math.floor ((seconds % 60))
        return `${days}d ${hours}h ${minutes}m ${second}s`;
    };





    // console.log(registrationOpen)
    return (
        <div className="card bg-base-100 shadow-sm flex ">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <figure>
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className='mt-3'>
                <h1 className='text-3xl text-primary font-bold'>Total Registration :     {total}</h1>
            </div>
            {/* Countdown Timer */}
            <div className="my-6 flex justify-center">
                <CountdownCircleTimer
                    isPlaying
                    duration={timeRemaining}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    size={180}
                >
                    {({ remainingTime }) => (
                        <div className="text-center text-lg font-semibold text-gray-700">
                            <div>Marathon Starts In</div>
                            <div>{formatTime(remainingTime)}</div>
                        </div>
                    )}
                </CountdownCircleTimer>
            </div>
            <div className="card-body">
                <div className="card-title text-center">{title}</div>
                <div className='md:space-y-2'>
                    <p className='flex items-center gap-0.5'><FaLocationDot className='text-red-600' />Location : {location}</p>
                    <p className='flex items-center gap-0.5'><MdDateRange className='text-blue-600' />Start Registration : {startReg}</p>
                    <p className='flex items-center gap-0.5'><MdDateRange
                        className='text-blue-600' />Close Registration: {endReg}</p>
                    <p className='flex items-center gap-0.5'><MdEvent className='text-blue-600' />Marathon Date : {marathonDate}</p>
                    <p className='flex items-center gap-0.5'><GiPathDistance
                        className='text-blue-600' />Distance : {distance}</p>
                    <p className='flex items-center gap-0.5'><BsInfoCircle className='text-blue-600' />Description : {description}</p>

                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/marathon-register/${_id}`)} className="btn btn-primary w-full" disabled={!registrationOpen}>
                        {
                            registrationOpen ? "Registration" : 'Registration Closed'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;