// import React, { useRef } from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const MyModal = ({ modals }) => {
    console.log(modals)

    const [modal, setModal] = useState({})

    useEffect(() => {
        if (modals) {
            setModal(modals);
        }
    }, [modals]);



    // const [value,setValue] = useState(modal)




    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(modal)

        axios.put(`https://assigment-11-server-ten.vercel.app/update/${modal?._id}`, modal)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-right",
                    icon: "success",
                    title: "Marathons Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form className="fieldset">
                    {/* marathonon Title */}
                    <label className="label">Marathon Title</label>
                    <input type="text" name="title" className="input input-bordered w-full" placeholder='title'
                        onChange={(e) => setModal({ ...modal, location: e.target.value })}
                        value={modal?.title}
                        readOnly />
                    {/* marathonon date */}
                    <label className="label">Marathon Date</label>
                    <input type="text" name="marathonDate" className="input input-bordered w-full" placeholder='start Date' value={modal?.marathonDate}
                        readOnly />
                    {/* marathonon location */}
                    <label className="label">Marathon Location</label>
                    <input type="text" name="location" className="input input-bordered w-full" placeholder="location" onChange={(e) => setModal({ ...modal, location: e.target.value })} value={modal?.location}
                    />
                    {/* image  */}
                    <label className="label">Marathon Image</label>
                    <input type="text" name="image" className="input input-bordered w-full" placeholder='Marathon Image'
                        onChange={(e) => setModal({ ...modal, image: e.target.value })}
                        value={modal?.image}
                    />
                    {/*  satrtReg */}
                    <label className="label">Start Registration</label>
                    <input type="text" name="startReg" className="input input-bordered w-full" placeholder='Start Reg'
                        onChange={(e) => setModal({ ...modal, startReg: e.target.value })}
                        value={modal?.startReg}
                    />
                    {/*  endReg */}
                    <label className="label">End Registration</label>
                    <input type="text" name="endReg" className="input input-bordered w-full" placeholder='End Reg'
                        onChange={(e) => setModal({ ...modal, endReg: e.target.value })}
                        value={modal?.endReg}
                    />
                    {/* Running Distance */}
                    <label className="label">Running Distance</label>
                    <select name='distance'
                        onChange={(e) => setModal({ ...modal, distance: e.target.value })}
                        value={modal?.distance} className="select">
                        <option disabled={true}>Pick distance</option>
                        <option>3K</option>
                        <option>5K</option>
                        <option>10K</option>
                    </select>

                    {/* Update Button */}
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary w-full mt-4">Update Marathon</button>
                </form>

            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default MyModal;




// Start Registration Date
//     < label className = "label" > Start Registration</label >
//         <input type="date" name="startReg" className="input input-bordered w-full" defaultValue={modal?.startReg} />

// {/* End Registration Date */ }
//                             <label className="label">End Registration</label>
//                             <input type="date" name="endReg" className="input input-bordered w-full" defaultValue={modal?.endReg}/>

// {/* marathonon Start Date */ }
//                             <label className="label">Marathon Start</label>
//                             <input type="date" name="marathononDate" className="input input-bordered w-full" defaultValue={modal?.marathononDate} />

// {/* Location */ }
//                             <label className="label">Location</label>
//                             <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter Location" defaultValue={modal?.location}/>
// {/* Running Distance */ }
//                             <label className="label">Running Distance</label>
//                             <select name='distance' className="select" defaultValue={modal?.distance}>
//                                 <option disabled={true}>Pick distance</option>
//                                 <option>3K</option>
//                                 <option>5K</option>
//                                 <option>10K</option>
//                             </select>
// {/* Description */ }
//                             <label className="label">Description</label>
//                             <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Write a short description..."
//                             defaultValue={modal?.description || ''}/>

// {/* marathonon Image */ }
//                             <label className="label">marathonon Image URL</label>
//                             <input type="url" name="image" className="input input-bordered w-full" placeholder="https://image-link.com/photo.jpg" defaultValue={modal?.image}/>