import AuthHook from "../Components/Hooks/AuthHook"

export const details = (_id,accessToken) =>{
    // console.log(accessToken)
    return fetch(`https://assigment-11-server-ten.vercel.app/details/${_id}`).then(res =>res.json())
} 

