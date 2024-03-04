import React, { useReducer, useState } from 'react'
import { reducer } from './Reducefn';
import { initialvalue } from './Reducefn';
import { useEffect } from 'react';
import {  deleteerr, deletesuccess, getApierr, getApisuccess } from './Action';
import {  deletedata, getApidata } from '../service/Mockapi';
import { useNavigate } from 'react-router-dom';

const Reducerlist = () => {
  let nav= useNavigate();
  const [state,dispatch]=useReducer(reducer,initialvalue);
 
  const getApi = async()=>{
    try{
     const res= await getApidata()
     console.log(res);
     if(res.status===200 || res.status===201){
     dispatch(getApisuccess(res.data));  
     }
  }
  catch(error){
      dispatch(getApierr(error))    
  }
}

useEffect(() => {
  getApi();
}, [])

const Delete =async(id) =>{
  try{
    const res= await deletedata(id)
    if(res.status===200 || res.status===201){
    dispatch(deletesuccess(id));  
    }
 }
 catch(error){
     dispatch(deleteerr(error))    
 }
}


const edit = async (id) =>{
  nav(`/reduceform/${id}`);
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
            {state.items.map((data,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.amount}</td>
                <td>{data.company}</td>
                <td>{data.status}</td>
                <td>{data.date}</td>
                <td>{data.email}</td>
                <td>
                  <button type='submit' onClick={()=>edit(data.id)} className="bg-primary rounded">Edit</button>
                  <button
                   type="submit"
                   onClick={() => Delete(data.id)} 
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

export default Reducerlist