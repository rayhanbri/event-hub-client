import React from 'react';
import { Link, NavLink } from 'react-router';
import AuthHook from '../Components/Hooks/AuthHook';
import logo from '../assets/event.icon.png'

const Navbar = () => {
    const { user, logOut } = AuthHook();
    const links = <>
        <NavLink to='/'
            className={({ isActive }) => isActive ? "border-b-2 text-blue-800 font-semibold" : "hover:text-blue-800 font-semibold"}
        >Home</NavLink>
        <NavLink to='/all-events'
            className={({ isActive }) => isActive ? "border-b-2 text-blue-800 font-semibold" : "hover:text-blue-800 font-semibold"}
        >Events</NavLink>
        <NavLink to='/my-event'
            className={({ isActive }) => isActive ? "border-b-2 text-blue-800 font-semibold" : "hover:text-blue-800 font-semibold"}
        >My Bookings</NavLink>
        <NavLink to='/add-event'
            className={({ isActive }) => isActive ? "border-b-2 text-blue-800 font-semibold" : "hover:text-blue-800 font-semibold"}
        >Add Events</NavLink>
        <NavLink to='/profile'
            className={({ isActive }) => isActive ? "border-b-2 text-blue-800 font-semibold" : "hover:text-blue-800 font-semibold"}
        >Profile</NavLink>
        
    </>
    // console.log(user.photoURL)

    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log('sign out user')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-sm sticky z-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <img src={logo} className='w-12 hidden sm:block' alt="" />
                    <h1 className='flex items-center text-xl md:text-4xl font-bold'>Event Hub</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex lg:gap-4 gap-2">
                    {
                        links
                    }
                </ul>
            </div>

            <div className="navbar-end space-x-2.5 md:space-x-4">
                {
                    user &&
                    <div className="avatar">
                        <div className="mask mask-squircle w-10 md:w-16">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                }

                {
                    user ? <button onClick={handleSignOut} className='btn btn-primary'>SignOUt</button> :
                        <>
                            <Link to='/login' className='btn btn-primary'>Login</Link>
                            <Link to='/register' className='btn btn-primary'>Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;