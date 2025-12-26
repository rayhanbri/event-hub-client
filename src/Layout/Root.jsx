import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Header/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;