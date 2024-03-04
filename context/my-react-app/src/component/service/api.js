import axios from "axios";

export const API_URL="https://653cab1bd5d6790f5ec82824.mockapi.io/Saga/";


export const fetchData = async () => {
    const res = await axios({
      method: "GET",
      url: API_URL,
    });
    return res;
  }

  export const postData = async (data) => {
    const res = await axios({
      method: "POST",
      url: API_URL,
      data:data
    });
    return res;
  }

  export const deletedata=async(id)=>{
    const res= await axios({
        method:"DELETE",
        url:API_URL + id,
        data : id
    })
    return res;
  }

  export const getApidata = async (id) => {
    const res = await axios({
      method: "GET",
      url: API_URL + id,
    
    });
    return res;
    
  }
  
  export const putdata = async (data,id) => {
    const res = await axios({
      method: "PUT",
      url: API_URL + id,
      data:data
    });
    return res;
  }