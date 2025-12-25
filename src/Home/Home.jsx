import React from 'react';
import Slider from './Slider';
import InfoSection from './InfoSection';
import MarathonFAQ from './MarathonFAQ';
import MarathonCards from './MarathonCards ';
// import Events from './Marathons';
import FeaturedEvents from './FeaturedEvents';

const Home = () => {
    return (
        <div>
           {/* <Slider></Slider> */}
           <FeaturedEvents></FeaturedEvents>
           {/* <Events></Events> */}
           {/* <MarathonCards></MarathonCards>
           <InfoSection></InfoSection>
           <MarathonFAQ></MarathonFAQ> */}
        </div>
    );
};

export default Home;