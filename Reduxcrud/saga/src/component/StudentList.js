import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDataRequest, getDataRequest, getapiDataRequest, postDataRequest } from "../redux/action/action";
import './saga.css'
import { useNavigate } from "react-router-dom";
const StudentList = () => {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.reducer);
  let nav = useNavigate()
console.log(state)
  const getdata = useCallback(() => {
    console.log("log");
    dispatch(getDataRequest());
  }, [dispatch]);

  useEffect(() => {
    getdata();
  }, [getdata])

const Delete =(id)=>{
  dispatch(deleteDataRequest(id));
}

const edit =(data)=>{
  dispatch(getapiDataRequest(data.id))
  nav(`/form/${data.id}`)
}

  return (
    <div className="container list">
      <div className="table_change">
        <table className="table mt-4  ">
          <thead>
            <tr>
              <th scope="col">SI.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Conform Password</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Language</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.array && state.array.map((res, index)=>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.password}</td>
                <td>{res.c_password}</td>
                <td>{res.number}</td>
                <td>{res.gender}</td>
                <td>{res.language}</td>
                <td>{res.date}</td>
                <td><button type='submit' onClick={()=>Delete(res.id)} className="bg-danger mx-2 rounded">Delete</button>
                <button type='submit' onClick={()=>edit(res)} className="bg-primary rounded">Edit</button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
