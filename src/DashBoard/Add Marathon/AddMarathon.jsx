import React from 'react';
import AuthHook from '../../Components/Hooks/AuthHook';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from '@dr.pogodin/react-helmet';

const AddMarathon = () => {
    const { user } = AuthHook();
    console.log( user.providerData)
    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const today = new Date();
        data.createdAt = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${today.getFullYear()}`;

        data.user_email = user?.email || user?.providerData[0]?.email;

        console.log(data)
        axios.post('https://assigment-11-server-ten.vercel.app/marathons',  data )
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Marathons Added",
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
                <title>Add Marathon</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Add Marathon</h1>
                        <form onSubmit={handleAdd} className="fieldset">
                            {/* Marathon Title */}
                            <label className="label">Marathon Title</label>
                            <input type="text" name="title" className="input input-bordered w-full" placeholder="Enter Marathon Title" />

                            {/* Start Registration Date */}
                            <label className="label">Start Registration</label>
                            <input type="date" name="startReg" className="input input-bordered w-full" />

                            {/* End Registration Date */}
                            <label className="label">End Registration</label>
                            <input type="date" name="endReg" className="input input-bordered w-full" />

                            {/* Marathon Start Date */}
                            <label className="label">Marathon Start</label>
                            <input type="date" name="marathonDate" className="input input-bordered w-full" />

                            {/* Location */}
                            <label className="label">Location</label>
                            <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter Location" />
                            {/* Running Distance */}
                            <label className="label">Running Distance</label>
                            <select name='distance' defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Pick distance</option>
                                <option>3K</option>
                                <option>5K</option>
                                <option>10K</option>
                            </select>
                            {/* Description */}
                            <label className="label">Description</label>
                            <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Write a short description..." />

                            {/* Marathon Image */}
                            <label className="label">Marathon Image URL</label>
                            <input type="url" name="image" className="input input-bordered w-full" placeholder="https://image-link.com/photo.jpg" />

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