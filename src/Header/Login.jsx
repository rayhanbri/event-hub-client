import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Components/Shared/SocialLogin';
import AuthHook from '../Components/Hooks/AuthHook';
import Swal from 'sweetalert2';
import { Helmet } from '@dr.pogodin/react-helmet';

const Login = () => {
    const { login } = AuthHook();
    const location = useLocation();
    // console.log(location.state)\
    const from=location.state || '/';
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Done",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Login Now!</h1>
                        <form onSubmit={handleLogin} className="fieldset">
                            {/* Email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            {/* Password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Your Password" required />
                            <div>Already Have An Account?<Link state={from} className='text-blue-500 underline' to='/register'>Register</Link></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <SocialLogin from={from}></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;