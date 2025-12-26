import React, { useEffect, useState } from 'react';
import AuthHook from '../Components/Hooks/AuthHook';
import Swal from 'sweetalert2';

const MyEvent = () => {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    const { user } = AuthHook();
    const userEmail = user?.email || user?.providerData[0].email;

    // console.log(userEmail)
    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const response = await fetch(`http://localhost:3000/my-registration?email=${userEmail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch registrations');
                }
                const data = await response.json();
                setRegistrations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRegistrations();
    }, [userEmail]);

    // console.log(registrations)

    const handleCancel = async (registrationId) => {
        // console.log(registrationId)
        try {
            const response = await fetch(`http://localhost:3000/registration/${registrationId}`, { method: 'DELETE' });
            if (response.ok) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Delete Registration",
                    showConfirmButton: false,
                    timer: 1500
                });
                setRegistrations(registrations.filter(reg => reg._id !== registrationId));
            } else {
                console.log('Failed to cancel event');
            }
        } catch (err) {
            console.log('Error canceling event');
        }
    };

    const openReviewModal = (registration) => {
        setSelectedRegistration(registration);
        setShowReviewModal(true);
    };

    const handleSubmitReview = async () => {
        console.log(selectedRegistration,comment,rating)
        try {
            const response = await fetch('http://localhost:3000/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    eventId: selectedRegistration._id,
                    name:selectedRegistration?.name,
                    email:selectedRegistration?.email,
                    createdAt: new Date(),
                    comment,
                    rating,
                }),
            });
            if (response.ok) {
                setShowReviewModal(false);
                setComment('');
                setRating(1);
                // console.log('Review submitted!');

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Review Submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                console.log('Failed to submit review');
            }
        } catch (err) {
            console.log('Error submitting review');
        }
    };


    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Registrations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {registrations.map((reg) => (
                    <div key={reg._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto font-bold font-3xl">{reg.name}</h2> {/* Event name in the middle */}
                            <p>Event Date: {reg.date}</p>
                            <p>Total Tickets: {reg.tickets}</p>
                            <div className="card-actions justify-center items-center mt-4">
                                <button
                                    className="btn btn-error"
                                    onClick={() => handleCancel(reg._id)}
                                >
                                    Cancel Event
                                </button>
                                <button
                                    className="btn btn-primary "
                                    onClick={() => openReviewModal(reg)}
                                >
                                    Review
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Review Modal */}
            {showReviewModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Review {selectedRegistration.eventName}</h3>
                        <textarea
                            className="textarea textarea-bordered w-full mt-2"
                            placeholder="Your comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <select
                            className="select select-bordered w-full mt-2"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                        <div className="modal-action">
                            <button className="btn" onClick={() => setShowReviewModal(false)}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={handleSubmitReview}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyEvent;