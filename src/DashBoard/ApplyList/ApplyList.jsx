import React, { useEffect, useState } from 'react';
import AuthHook from '../../Components/Hooks/AuthHook';
import { list } from '../../API/list';
import ListCard from './ListCard';
import Spinner from '../../Components/Auth/Spinner';
import { Helmet } from '@dr.pogodin/react-helmet';

const ApplyList = () => {
    const [allList, setAllList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const { user, setLoading } = AuthHook();
    const [loading, setLocalLoading] = useState(true);

    const email = user?.email || user?.providerData?.[0]?.email;

    useEffect(() => {
        if (!email) return;

        setLocalLoading(true);
        list(email,user?.accessToken)
            .then(data => {
                setAllList(data);
                setFilteredList(data); 
                setLocalLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLocalLoading(false);
            });
        setLoading(false);
    }, [email, setLoading]);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        const filtered = allList.filter(item =>
            item.title.toLowerCase().includes(value)
        );
        setFilteredList(filtered);
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="p-4">
            <Helmet>
                <title>ApplyList</title>
            </Helmet>
            <h1 className="text-2xl font-semibold mb-4">My Applied Marathons</h1>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearch}
                    placeholder="Search by marathon title..."
                    className="input input-bordered w-full max-w-md"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Marathon Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.length > 0 ? (
                            filteredList.map((item, index) => (
                                <ListCard
                                    key={item._id}
                                    list={item}
                                    index={index}
                                    setAllList={setAllList}
                                    allList={allList}
                                    setFilteredList={setFilteredList}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No results found for "{searchText}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplyList;
