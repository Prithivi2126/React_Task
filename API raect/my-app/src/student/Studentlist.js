import React from "react";
import "./Student.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../service/Mockapi";
import { useNavigate } from "react-router-dom";

const Studentlist = () => {
  const nav = useNavigate()
  const[apiData,setApiData]=useState([])
  
const GetApi= async () =>{
  try{
    const response =await axios.get(API_URL);
    setApiData(response.data);
  }catch(error){
    console.error("Error fetching table data:",error)
    setApiData([]);
  }
}
  useEffect(()=>{
    GetApi();
},[])

const edit = async (id) => {
  const response = await axios.get(API_URL + id);
 nav('/form/8')
};

const Delete = async (index,id) => { 
  const response=  await axios.delete(API_URL+id);
    setApiData((prevArray) => prevArray.filter((value, i) =>i !== index));   
};


  return (
    <div className="list">
      <div className="table_change">
        <table className="table mt-4 container  border-1">
          <thead>
            <tr>
              <th scope="col">SI.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => edit(data)} 
                    className="bg-primary rounded"
                  >
                    Edit
                  </button>{" "}
                      <button
      type="submit"
      onClick={() => Delete(index, data.id)} 
      className="bg-danger rounded"
    >
      Delete
    </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentlist;
                                                                                                                                                                                                                                                                                                      












