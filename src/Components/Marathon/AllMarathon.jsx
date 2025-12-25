import React, { useState, useMemo, Suspense, use } from 'react';
import AllCard from './AllCard';
import Spinner from '../Auth/Spinner';
import { createResource } from '../../CreateResource/createResource';
import { Helmet } from '@dr.pogodin/react-helmet';
import { AuthContext } from '../Auth/AuthContext';

const AllMarathon = () => {
  const [sortOrder, setSortOrder] = useState('desc');
  const { user } = use(AuthContext);

  const dataResource = useMemo(() => {
    const fetchWithToken = async () => {
      if (!user) throw new Error('Not authenticated');


      const response = await fetch(`http://localhost:3000/event/list?sort=${sortOrder}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      return response.json();
    };

    return createResource(fetchWithToken());
  }, [sortOrder]);
  return (
    <div className='my-5'>
      <Helmet>
        <title>All Events</title>
      </Helmet>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 font-semibold">Sort by Date:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="select select-bordered"
        >
          <option value="desc">Newest to Oldest</option>
          <option value="asc">Oldest to Newest</option>
        </select>
      </div>

      <Suspense fallback={<Spinner />}>
        <AllCard dataResource={dataResource} />
      </Suspense>
    </div>
  );
};

export default AllMarathon;
