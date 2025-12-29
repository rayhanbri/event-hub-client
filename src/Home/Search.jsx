import React, { useEffect, useState } from 'react';
import Card from './Card';
import SearchCard from './SearchCard';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(`https://event-hub-server-umber.vercel.app/find?search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            });
    }, [searchText]);

    // console.log(events[0])

    return (
        <div className='max-w-6xl mx-auto p-4'>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search events..."
                className="input input-bordered w-[30%] mb-6 mt-6 border-2 border-blue-600"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchCard events={events} loading={loading}></SearchCard>
        </div>
    );
};

export default Search;