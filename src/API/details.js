import AuthHook from "../Components/Hooks/AuthHook"

export const details = (_id) =>{
    // console.log(accessToken)
    return fetch(`http://localhost:3000/details/${_id}`).then(res =>res.json())
} 

