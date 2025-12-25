import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Components/Shared/SocialLogin';
import AuthHook from '../Components/Hooks/AuthHook';
import { AuthContext } from '../Components/Auth/AuthContext';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Helmet } from '@dr.pogodin/react-helmet';

const Register = () => {
    const { createUser } = AuthHook();
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();


    const validatePassword = (value) => {
        if (!/[A-Z]/.test(value)) {
            return "Password must have at least one uppercase letter.";
        }
        if (!/[a-z]/.test(value)) {
            return "Password must have at least one lowercase letter.";
        }
        if (value.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        return "";
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value));
    };


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                const user = res.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration Done",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)

            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Register Now!</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            {/* Name  */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Your Name" required />
                            {/* Email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            {/* Photo url  */}
                            <label className="label">Photo URL</label>
                            <input type="link" name='photo' className="input" placeholder="Photo URL" required />
                            {/* Password  */}
                            <label className="label">Password</label>
                            <input type="password"
                                name='password'
                                className="input" placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange} required />
                            {/* Password validation message */}
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                            )}
                            <div>Already Have An Account?<Link className='text-blue-500 underline' to='/login'>Login</Link></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;