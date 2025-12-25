import { Helmet } from '@dr.pogodin/react-helmet';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ListCard = ({ list, index, setAllList, allList, setFilteredList }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fname: list?.fname || '',
        lname: list?.lname || '',
        contact: list?.contact || ''
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assigment-11-server-ten.vercel.app/registration/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your registration has been deleted.", "success");
                            setAllList(prev => prev.filter(item => item._id !== id));
                            setFilteredList(prev => prev.filter(item => item._id !== id));
                        }
                    });
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        fetch(`https://assigment-11-server-ten.vercel.app/registration/${list._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Your registration has been updated.", "success");
                    const updated = allList.map(item =>
                        item._id === list._id ? { ...item, ...formData } : item
                    );
                    setAllList(updated);
                    setIsModalOpen(false);
                }
            });
    };

    return (
        <>
            <Helmet>
                <title>Marathon List</title>
            </Helmet>
            <tr>
                <th>{index + 1}</th>
                <td>{list?.title}</td>
                <td>{list?.marathonDate}</td>
                <td>
                    <div className='flex md:gap-2'>
                        <button onClick={() => setIsModalOpen(true)} className='btn btn-primary'>Update</button>
                        <button onClick={() => handleDelete(list._id)} className='btn bg-red-600'>Delete</button>
                    </div>
                </td>
            </tr>

            {/* Place modal outside <tr>/<tbody> to prevent hydration error */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[500px]">
                        <h2 className="text-xl font-bold mb-4">Update Registration</h2>
                        <form onSubmit={handleUpdateSubmit} className="space-y-4">
                            <div>
                                <label className="block">Title</label>
                                <input
                                    value={list.title}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block">Marathon Date</label>
                                <input
                                    value={list.marathonDate}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block">First Name</label>
                                <input
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block">Last Name</label>
                                <input
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block">Contact</label>
                                <input
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn">
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-success">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ListCard;
