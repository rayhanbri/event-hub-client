import React from 'react';
import AuthHook from '../Components/Hooks/AuthHook';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Profile = () => {
    const { user } = AuthHook();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile Updated ",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(err =>{
                console.log(err)
            })

        console.log(name, photo)
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>
            <div className="flex flex-col items-center">
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL || 'https://via.placeholder.com/150'} alt="Profile" />
                    </div>
                </div>
                <form onSubmit={handleUpdate} className="w-full max-w-md">
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered"
                            defaultValue={user?.displayName}
                            name='name'
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="url"
                            className="input input-bordered"
                            name='photo'
                            placeholder="Enter photo URL"
                       required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;