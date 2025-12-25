import Swal from 'sweetalert2';
import MyModal from './MyModal';
import Marathons from '../../Home/Marathons';
import { Helmet } from '@dr.pogodin/react-helmet';

const MyCard = ({ marathon, index, setMyMarathons, myMarathons,setModals }) => {
    
    const handleUpdate = (marathon) => {
        setModals(marathon)
        document.getElementById('my_modal_2').showModal()
    }

    

// console.log(modal)


    const handleDelte = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assigment-11-server-ten.vercel.app/marathons/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // Optionally, refresh the task list here
                            setMyMarathons(myMarathons.filter(marathon => marathon._id !== id));
                        }
                    });
            }
        });
    }
    return (
        <tr>
            <Helmet>
                <title>MY List</title>
            </Helmet>
            <th>{index + 1}</th>
            <td>{marathon?.title}</td>
            <td>{marathon?.location}</td>
            <td>{marathon.marathonDate}</td>
            <td>
                <div className='flex md:gap-2'>
                    <button
                        onClick={() => handleUpdate(marathon)}
                        className='btn btn-primary'>Update</button>
                    <button onClick={() => handleDelte(marathon._id)} className='btn bg-red-600 '>Delete</button>
                </div>

            </td>
        </tr>
    );
};

export default MyCard;