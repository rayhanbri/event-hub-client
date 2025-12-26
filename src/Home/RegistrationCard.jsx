import React, { use } from 'react';
import AuthHook from '../Components/Hooks/AuthHook';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useNavigate } from 'react-router';

const RegistrationCard = ({ dataPromise }) => {
     const navigate = useNavigate();
    const { user } = AuthHook();
    const regData = use(dataPromise)
    console.log(regData)
    const email = user?.email || user?.providerData[0].email;
    const name = user?.displayName || "";
    // console.log(name)
  


    const handleReg = (e) => {
        e.preventDefault()
        const form = e.target;
        const formdata = new FormData(form);
        const userData = Object.fromEntries(formdata.entries())
        userData.eventId = regData._id
       
        console.log(userData)

        axios.post('http://localhost:3000/registration', userData)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration Done",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/")
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Event Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-4xl font-bold'>Register Now!</h1>
                        <form onSubmit={handleReg} className="fieldset">
                            {/*  Name  */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="First Name" defaultValue={regData?.name} required />
                            {/* Email  */}
                            <label className="label">Email</label>
                            <input type="email" defaultValue={email} name='email' className="input" placeholder="Email" required />
                            {/* Number of Tickets  */}
                            <label className="label">Number of Tickets</label>
                            <input type="text" name='tickets' className="input" placeholder="Total Tickets"   />
                            {/* Date  */}
                            <label className="label">Date</label>
                            <input type="text" name='date' className="input" defaultValue={new Date(regData?.date).toISOString().split("T")[0]} placeholder="Date"   />
                            {/* Contact  */}
                            <label className="label">Contact</label>
                            <input type="text" name='contact' className="input" placeholder="Contact Info" required />
                                {/* Payment */}
                            <label className="label">Payment Method</label>
                            <input type="text" name='payment' className="input" placeholder="Payment Method" required />
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationCard;