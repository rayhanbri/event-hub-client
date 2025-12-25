import React from 'react';
import AddMarathon from './Add Marathon/AddMarathon';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <ul  className="md:menu md:menu-horizontal menu min-h-full w-80 p-4">
            <li> <Link to="add-marathon" className="block text-blue-600 hover:underline">Add Marathon</Link></li>
            <li><Link to="my-marathons" className="block text-blue-600 hover:underline">My Marathon List</Link></li>
            <li><Link to="apply-list" className="block text-blue-600 hover:underline">My Apply List</Link></li>
        </ul>
    );
};

export default Sidebar;