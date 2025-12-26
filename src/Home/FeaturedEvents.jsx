import React, { Suspense } from 'react';
import Card from './Card';
import Spinner from '../Components/Auth/Spinner';

const FeaturedEvents = () => {
    const dataPromise = fetch('https://event-hub-server-umber.vercel.app/events').then(res => res.json())
    // console.log(dataPromise)
    return (
        <div>
            <h1 className='text-4xl font-bold mt-2 md:mt-4'>Featured Events </h1>
            <Suspense fallback={<Spinner></Spinner>}>
                <Card dataPromise={dataPromise}></Card>
            </Suspense>
        </div>
    );
};

export default FeaturedEvents;