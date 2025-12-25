
export const list = async (email,token) => {
   
    const res = await fetch(`https://assigment-11-server-ten.vercel.app/my-registration?email=${email}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const data = await res.json();
    return data;
};