import React from 'react';
import AuthHook from '../Hooks/AuthHook';

const Spinner = () => {
    const {loading} = AuthHook();
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
};

export default Spinner;