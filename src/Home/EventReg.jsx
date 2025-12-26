import React, { Suspense } from 'react';
import { useParams } from 'react-router';
import { details } from '../API/Details';
import RegistrationCard from './RegistrationCard';


const EventReg = () => {
    const {id} = useParams()
    // console.log(id)
    const dataPromise = details(id)
    return (
         <div>
          <Suspense>
            <RegistrationCard dataPromise={dataPromise}></RegistrationCard>
          </Suspense>
        </div>
    );
};

export default EventReg;