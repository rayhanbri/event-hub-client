import React, { useEffect, useState } from 'react';
import AuthHook from '../../Components/Hooks/AuthHook';
import { myMarathonApi } from '../../API/my_marathon_api';
import MyCard from './MyCard';
import MyModal from './MyModal';

const MyMarathon = () => {
    const { user, setLoading } = AuthHook();
    const email = user?.email || user?.providerData[0]?.email ;
    const [myMarathons, setMyMarathons] = useState([])
    useEffect(() => {
        myMarathonApi(email,user?.accessToken)
            .then(setMyMarathons)
        setLoading(false)
    }, [email, setLoading,user?.accessToken])
    const [modals, setModals] = useState("")

    console.log(myMarathons)
    // console.log(modal)

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myMarathons.map((marathon, index) => <MyCard marathon={marathon} index={index} key={index} myMarathons={myMarathons} setMyMarathons={setMyMarathons}
                            setModals={setModals}></MyCard>)
                    }
                </tbody>
            </table>
            <MyModal modals={modals} setModal={setModals}></MyModal>
        </div>
    );
};

export default MyMarathon;