import React, { useState, useMemo, Suspense, use } from 'react';


import { Helmet } from '@dr.pogodin/react-helmet';

import AllCard from '../Components/Marathon/AllCard';
import Spinner from '../Components/Auth/Spinner';
import { createResource } from '../CreateResource/createResource';
import { AuthContext } from '../Components/Auth/AuthContext';

const Events = () => {
    const [sortOrder, setSortOrder] = useState('desc');
      const { user } = use(AuthContext);
    
      const dataResource = useMemo(() => {
        const fetchWithToken = async () => {
          if (!user) throw new Error('Not authenticated');
    
    
          const response = await fetch(`https://event-hub-server-umber.vercel.app/event/list?sort=${sortOrder}`, {
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

export default Events;