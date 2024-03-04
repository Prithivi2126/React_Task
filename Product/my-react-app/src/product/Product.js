import React, { useEffect, useState } from "react";
import "./Product.css";
import { API_URL } from "../service/Mockapi";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [Object, setObject] = useState({
    name: "",
    amount: "",
    company: "",
    status: "inactive",
    date: "",
    email: "",
  });
  let nav = useNavigate();
  const [nameError, setName] = useState("");
  const [amountError, setAmount] = useState("");
  const [companyError, setCompany] = useState("");
  const [statusError, setstatus] = useState(false);
  const [dateError, setDate] = useState("");
  const [emailError, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const val = await validation();
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
    });
  };

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
  };
  const post = async (Object) => {
    const res = await axios.post(API_URL, Object);
    nav("/list");
  };

  const edit = async (id, Object) => {
    const res = await axios.put(API_URL + id, Object);
    nav("/list");
  };
  useEffect(() => {
    if (id) {
      const getdata = async (data) => {
        const res = await axios.get(API_URL + data);
        setObject(res.data);
      };
      getdata(id);
    }
  }, [id]);
  
  const statuscheck = (e) => {
    const value = e.target.checked;
    console.log(value);
    if (value) {
      setObject({ ...Object, status: "active" });
    } else {
      setObject({ ...Object, status: "inactive" });
    }
  };
  

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
  );
};

export default Product;
