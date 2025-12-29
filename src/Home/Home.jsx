import React from 'react';
import Slider from './Slider';
import InfoSection from './InfoSection';
import MarathonFAQ from './MarathonFAQ';
import MarathonCards from './MarathonCards ';
// import Events from './Marathons';
import FeaturedEvents from './FeaturedEvents';
import Review from './Review';
import CategoryCard from './CategoryCard';
import Search from './Search';

const Home = () => {
    return (
        <div>
           {/* <Slider></Slider> */}
           <Search></Search>
           <FeaturedEvents></FeaturedEvents>
           <Review></Review>
           <CategoryCard></CategoryCard>
           {/* <Events></Events> */}
           {/* <MarathonCards></MarathonCards>
           <InfoSection></InfoSection>
           <MarathonFAQ></MarathonFAQ> */}
        </div>
    );
};

export default Home;