export const myMarathonApi = (email,token) =>{
    return fetch(`https://assigment-11-server-ten.vercel.app/marathons/list?email=${email}`,{
         method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(res => res.json())
}