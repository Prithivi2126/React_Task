import axios from "axios";

export const API_URL="https://653cab1bd5d6790f5ec82824.mockapi.io/validation"

export const getApidata=async()=>{
    const res= await axios({
        method:"GET",
        url:API_URL
    })
    return res;
}


