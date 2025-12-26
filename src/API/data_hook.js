export const details = (_id) =>{
    // console.log(accessToken)
    return fetch(`https://event-hub-server-umber.vercel.app/details/${_id}`).then(res =>res.json())
} 

