import React from 'react';
import AuthHook from '../../Components/Hooks/AuthHook';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from '@dr.pogodin/react-helmet';

const AddMarathon = () => {
    const { user } = AuthHook();
    // console.log( user.providerData)
    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
       
        console.log(data)

        data.user_email = user?.email || user?.providerData[0]?.email;

        console.log(data)
        axios.post('http://localhost:3000/event',  data )
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Event Added",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })

    }





    // Running distance



    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Add Event</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Add Marathon</h1>
                        <form onSubmit={handleAdd} className="fieldset">
                            {/* Event Name */}
                            <label className="label">Event Name</label>
                            <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter Event Title" />
                            {/* Date */}
                            <label className="label">Date</label>
                            <input type="date" name="date" className="input input-bordered w-full" />
                            {/* Location */}
                            <label className="label">Location</label>
                            <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter Location" />
                            {/* Seats Available */}
                            <label className="label">Seats Available</label>
                            <input type="text" name="seatsAvailable" className="input input-bordered w-full" placeholder="Available Seats" />
                            {/* Category*/}
                            <label className="label">Category</label>
                            <select name='category' defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Pick category</option>
                                <option>Tech</option>
                                <option>Business</option>
                                <option>Music</option>
                            </select>
                            {/* Description */}
                            <label className="label">Description</label>
                            <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Write a short description..." />

                            {/* Event Image */}
                            <label className="label">Event Image URL</label>
                            <input type="url" name="imageUrl" className="input input-bordered w-full" placeholder="https://image-link.com/photo.jpg" />

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary w-full mt-4">Add Marathon</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMarathon;