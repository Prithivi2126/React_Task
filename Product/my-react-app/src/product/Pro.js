import React, { useEffect, useState } from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../service/Mockapi'
const Pro = () => {
  let nav=useNavigate();
  const [apiData,setApiData]=useState([])
  
  const GetApi = async()=>{
    const res = await axios.get(API_URL);
    setApiData(res.data);
  }
  useEffect(()=>{
    GetApi();
  },[])
   
  const edit = async (id) =>{
    nav(`/form/${id}`);
  }


  const Delete =async(index,id)=>{
       const res = await axios.delete(API_URL + id);
       setApiData((prevArray)=> prevArray.filter((value,i)=> i!== index));
  }
  return (
    <div className='list'>
          <div className="table_change">
        <table className="table mt-4 container  border-1">
          <thead>
            <tr>
              <th scope="col">SI.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Company</th>
              <th scope="col">Active</th>
              <th scope="col">Date</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.amount}</td>
                <td>{data.company}</td>
                <td>{data.active ? 'Active' : 'Inactive'}</td>
                <td>{data.date}</td>
                <td>{data.email}</td>
                <td>
                  <button type='submit' onClick={()=>edit(data.id)} className="bg-primary rounded">Edit</button>
                  <button
                   type="submit"
                   onClick={() => Delete(index, data.id)} 
                   className="bg-danger rounded"> Delete
                  </button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pro