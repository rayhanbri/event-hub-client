import React from "react";
import marathonImage from "../assets/runner.jpg"; 

const MarathonFAQ = () => {
    return (
        <section className="bg-gray-100 py-12 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto lg:flex lg:items-start lg:gap-12">

                {/* Left FAQ Content */}
                <div className="lg:w-1/2">
                    {/* Header */}
                    <div className="mb-10">
                        <h4 className="text-gray-500 font-semibold uppercase">Help</h4>
                        <h2 className="text-4xl font-bold text-red-600 mt-2">F.A.Q.</h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3">
                        {[
                            {
                                q: "Do I need to train before the marathon?",
                                a: "Yes! Training helps improve endurance, reduce injury risk, and ensures an enjoyable experience.",
                            },
                            {
                                q: "How long is the marathon route?",
                                a: "The full marathon is 42.195 kilometers (26.2 miles). We also offer half-marathon and 10K options.",
                            },
                            {
                                q: "What if I feel unwell during the race?",
                                a: "There will be medical staff and hydration points every 3 km. Stop immediately if unwell.",
                                active: true,
                            },
                            {
                                q: "Will there be water stations?",
                                a: "Yes. Water and electrolyte drinks will be available every 3 km along the route.",
                            },
                            {
                                q: "Where can I see the race results?",
                                a: "Results will be posted on our official website and emailed to you within 24 hours.",
                            },
                            {
                                q: "Are photos and videos provided?",
                                a: "Yes. You can find your photos using your bib number after the event.",
                            },
                            {
                                q: "What are the terms and conditions?",
                                a: "Participants must be 16+. Registration is non-refundable. Follow event safety rules.",
                            },
                        ].map((item, idx) => (
                            <div className="collapse collapse-arrow bg-white shadow" key={idx}>
                                <input type="radio" name="faq" defaultChecked={item.active || false} />
                                <div className={`collapse-title font-medium ${item.active ? "text-red-600" : ""}`}>
                                    {item.q}
                                </div>
                                <div className="collapse-content text-gray-700">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="text-sm text-gray-600 mt-8">
                        If you still have questions, please <span className="text-red-500 underline cursor-pointer">contact us</span>.
                    </div>
                </div>

                {/* Right Image */}
                <div className="hidden lg:block lg:w-1/2">
                    <img
                        src={marathonImage}
                        alt="Marathon Cyclist"
                        className="rounded-xl shadow-lg object-cover w-full h-full max-h-[600px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default MarathonFAQ;

