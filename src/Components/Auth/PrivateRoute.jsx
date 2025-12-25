import React from 'react';
import AuthHook from '../Hooks/AuthHook';
import { Navigate, useLocation } from 'react-router';
import Login from '../../Header/Login';
import Spinner from './Spinner';

const PrivateRoute = ({ children }) => {
    const { user,loading } = AuthHook();
    const location = useLocation();
    const  from= location.pathname;

    if(loading){
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={from}></Navigate>
    }
    return children;
};

export default PrivateRoute;