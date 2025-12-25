import React, { Suspense } from 'react';
import Card from './Card';
import Spinner from '../Components/Auth/Spinner';

const Marathons = () => {
    const dataPromise=fetch('https://assigment-11-server-ten.vercel.app/marathons').then(res => res.json())
    // console.log(dataPromise)
    return (
        <div>
            <h1 className='text-4xl font-bold mt-2 md:mt-4'>Marathons </h1>
          <Suspense  fallback={<Spinner></Spinner>}>
            <Card  dataPromise={dataPromise}></Card>
        </Suspense>  
        </div>
    );
};

export default Marathons;