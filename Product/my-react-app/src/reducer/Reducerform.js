import React, { useReducer, useState } from 'react'
import { reducer } from './Reducefn';
import { initialvalue } from './Reducefn';
import { getdata, postdata } from '../service/Mockapi';
import { geterr, getsuccess, postsuccess, putsuccess } from './Action';
import { posterr } from './Action';
import { useNavigate, useParams } from 'react-router-dom';
import { putdata } from '../service/Mockapi';
import { puterr } from './Action';
import { useEffect } from 'react';
const Reducerform = () => {
  const { id } = useParams()
  console.log(id);
  const [state,dispatch]=useReducer(reducer,initialvalue);
  let nav = useNavigate()
  const [Object, setObject] = useState({
    name: "",
    amount: "",
    company: "",
    status: "Inactive",
    date: "",
    email: "",
  })
  
  const [nameError, setName] = useState("");
  const [amountError, setAmount] = useState("");
  const [companyError, setCompany] = useState("");
  const [statusError, setstatus] = useState(false);
  const [dateError, setDate] = useState("");
  const [emailError, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const val= await validation();
     
        if (val) {
          if (id) {
            await edit(id, Object);
          } else {
            await post(Object);
          }
        } else {
          return;
        }
        
      setObject({
        name: "",
        amount: "",
        company: "",
        status: "",
        date: "",
        email: "",
      })
  }


  const post = async () => {
  try{
    const res = await postdata(Object);
    console.log(res);
  if(res.status===200 || res.status===201){
  dispatch(postsuccess(Object));
  nav('/reducelist')
}
  }
catch(error){ 
dispatch(posterr(error))
}
  }

  const validation = async (e) => {
    let hasError = false;
    if (Object.name.length < 3) {
      setName("**Name required");
      hasError = true;
    } else {
      setName("");
    }
    if (Object.amount == "") {
      setAmount("**Amount required");
      hasError = true;
    } else {
      setEmail("");
    }
    if (Object.company == "") {
      setCompany("**Company required");
      hasError = true;
    } else {
      setCompany("");
    }
    if (Object.date == "") {
      setDate("**Date required");
      hasError = true;
    } else {
      setDate("");
    }
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Object.email)) {
      setEmail("**Email required");
      hasError = true;
    } else {
      setEmail("");
    }
   
    if (hasError) {
      return false;
    } else {
      return true;
    }
  }
  const statuscheck = (e) => {
    const value = e.target.checked;
    console.log(value);
    if (value) {
      setObject({ ...Object, status: "active" });
    } else {
      setObject({ ...Object, status: "inactive" });
    }
  }

  const edit = async () => {
    try {
      const res = await putdata(id, Object);
      if (res.status === 200 || res.status === 201) {
        dispatch(putsuccess(Object));
        nav('/reducelist');
      }
    } catch (error) {
      dispatch(puterr(error));
    }
  }

  useEffect(() => {
    const get = async () => {
      try {
        const res = await getdata(id);
        if (res.status === 200 || res.status === 201) {
          dispatch(getsuccess(res.data));
          setObject(res.data); 
        }
      } catch (error) {
        dispatch(geterr(error));
      }
    }
    get()
  }, [id])
  
  return (
    <div className="container main">
    <div className="form">
      <form className="form_change">
        <div className="input-group">
          <lable>Name</lable>
          <input
            type="text"
            id="name"
            value={Object.name}
            onChange={(e) => {
              setObject({ ...Object, name: e.target.value });
              setName("");
            }}
          ></input>
          <p id="name_error" className="text-danger">
            {nameError}
          </p>
        </div>
        <div className="input-group">
          <lable>Amount</lable>
          <input
            type="number"
            id="amount"
            value={Object.amount}
            onChange={(e) => {
              setObject({ ...Object, amount: e.target.value });
              setAmount("");
            }}
          ></input>
          <p id="amount_error" className="text-danger">
            {amountError}
          </p>
        </div>
        <div className="input-group">
          <label>Company</label>
          <select
            value={Object.company}
            onChange={(e) => {
              setObject({ ...Object, company: e.target.value });
              setCompany("");
            }}
          >
            <option value=""></option>
            <option value="Nestlé">Nestlé</option>
            <option value="Cadbury">Cadbury</option>
          </select>
          <p id="company_error" className="text-danger">
            {companyError}
          </p>
        </div>
        <div className="input-group">
          <lable>Status</lable>
          <input
            type="checkbox"
            checked={Object.status==="active"}
            onChange={statuscheck}
            className="status-check"
            id="status"
          />
          <p id="status_error" className="text-danger ">
            {statusError}
          </p>
        </div>
        <div className="input-group">
          <lable>Date</lable>
          <input
            type="date"
            id="date"
            value={Object.date}
            onChange={(e) => {
              setObject({ ...Object, date: e.target.value });
              setDate("");
            }}
          ></input>
          <p id="date_error" className="text-danger">
            {dateError}
          </p>
        </div>
        <div className="input-group">
          <lable>Email</lable>
          <input
            type="email"
            id="email"
            value={Object.email}
            onChange={(e) => {
              setObject({ ...Object, email: e.target.value });
              setEmail("");
            }}
          ></input>
          <p id="email_error" className="text-danger">
            {emailError}
          </p>
        </div>
        <div className="text-center mt-2">
          <button type="submit" onClick={submit} className="rounded fw-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Reducerform