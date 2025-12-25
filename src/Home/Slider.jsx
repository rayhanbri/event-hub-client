import React, { useEffect, useState } from 'react';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import { Helmet } from '@dr.pogodin/react-helmet';




const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slider1, slider2, slider3, slider4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // 3 seconds per slide

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[700px] sm:h-[480px] overflow-hidden rounded-2xl my-5">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        className="w-full flex-shrink-0 object-cover h-[255px] sm:h-[480px]"
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;




// .carousel-image {
//   height: 400px; /* Set this to the desired height */
//   width: 100%; /* Make the image take the full width */
//   object-fit: cover; /* Maintain aspect ratio and cover the area */
// }