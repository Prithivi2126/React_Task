import React, { useEffect } from "react";
import "./Student.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../service/Mockapi";
import { useParams } from "react-router-dom";

const Studentform = () => {
   const {id} = useParams();
  console.log(id)
  const [object, setObject] = useState( {
    name: "",
    email: "",
    password: "",
  })
 
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
 
  let nav=useNavigate()
  const postdata =async (e) => {
    e.preventDefault();
    console.log(object);

    await validation()
    if(id){
      await edit(id,object)
    }
    else{
      await post(object)
    }

    setObject({
      name: "",
      email: "",
      password: "",
    })
 
  };


  const validation=async(e)=>{
    let hasError = false;
    if (object.name.length < 3) {
      setNameError("**Name required");
      hasError = true;
    } else {
      setNameError("");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(object.email)) {
      setEmailError("**Email required");
      hasError = true;
    } else {
      setEmailError("");
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(object.password)) {
      setPasswordError("**Password required");
      hasError = true;
    } else {
      setPasswordError("");
    }
    if (hasError) {
      return false;
    }

  }

  const post=async(object)=>{
    const response=await axios.post(API_URL, object);
    nav('/Studentlist') 
  }
 
  const edit = async (id,object) =>{
    const response = await axios.put(API_URL+id,object);
    nav('/Studentlist')
  
    }
    useEffect(()=>{
   if(id){
   const  getdata = async(data)=>{
    console.log(id)
    const response = await axios.get(API_URL + data)
    console.log(response)
    setObject(response.data)
   }
   getdata(id)
   }
    },[id])

 
  return (
    <div>
      <div className="form">
        <form className="form_change">
          <div className="input-group">
            <lable>Name</lable>
            <input
              type="text"
              id="name"
              value={object.name}
              onChange={(e) => {
                setObject({ ...object, name: e.target.value });
                setNameError("");
              }}
            />
            <p id="name_error" className="text-danger">
              {nameError}
            </p>
          </div>
          <div className="input-group">
            <lable>Email</lable>
            <input
              type="email"
              id="email"
              value={object.email}
              onChange={(e) => {
                setObject({ ...object, email: e.target.value });
                setEmailError("");
              }}
            />
            <p id="email_error" className="text-danger">
              {emailError}
            </p>
          </div>
          <div className="input-group">
            <lable>Password</lable>
            <input
              type="password"
              id="password"
              value={object.password}
              onChange={(e) => {
                setObject({ ...object, password: e.target.value });
                setPasswordError("");
              }}
            />
            <p id="password_error" className="text-danger">
              {passwordError}
            </p>
          </div>
          <div className="text-center mt-2">
            <button
              type="submit"
              onClick={postdata}
              className="rounded fw-bold"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Studentform;
