import React, { use } from 'react';
import AuthHook from '../Components/Hooks/AuthHook';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from '@dr.pogodin/react-helmet';

const RegistrationCard = ({ dataPromise }) => {
    const { user } = AuthHook();
    const regData = use(dataPromise)
    console.log(regData)
    const email = user?.email || user?.providerData[0].email;
  


    const handleReg = (e) => {
        e.preventDefault()
        const form = e.target;
        const formdata = new FormData(form);
        const userData = Object.fromEntries(formdata.entries())
        userData.eventId = regData._id
        // console.log(userData)

        axios.post('https://assigment-11-server-ten.vercel.app/registration', userData)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration Done",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Marathon Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Register Now!</h1>
                        <form onSubmit={handleReg} className="fieldset">
                            {/* Email  */}
                            <label className="label">Email</label>
                            <input type="email" defaultValue={email} name='email' className="input" placeholder="Email" required />
                            {/* title  */}
                            <label className="label">Marathon Title</label>
                            <input type="text" name='title' className="input" placeholder="Title" defaultValue={regData.title} readOnly />
                            {/* startdate  */}
                            <label className="label">Marathon Date</label>
                            <input type="text" name='marathonDate' className="input" placeholder="Title" defaultValue={regData.marathonDate} readOnly />
                            {/* Email  */}
                            <label className="label">First Name</label>
                            <input type="text" name='fname' className="input" placeholder="First Name" required />
                            {/* Email  */}
                            <label className="label">Last Name</label>
                            <input type="text" name='lname' className="input" placeholder="Last Name" required />
                            {/* Email  */}
                            <label className="label">Contact</label>
                            <input type="text" name='contact' className="input" placeholder="Contact Info" required />
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationCard;