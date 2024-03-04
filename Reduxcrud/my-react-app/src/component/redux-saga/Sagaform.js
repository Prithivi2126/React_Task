import React from "react";
import "./sagastyle.css";
import { useNavigate } from "react-router-dom";

const Sagaform = () => {
  let nav = useNavigate();
  const submit = () => {
    nav("/sagalist");
  }
  return (
    <div className="mt-3 container rounded  form">
      <div className="mt-2 input-group text-white text-start">
        <lable htmlFor="name" className="fs-5">
          Name
        </lable>
        <input type="text" id="name" className="rounded " />
      </div>
      <div className="mt-2 input-group text-white text-start">
        <lable htmlFor="email" className="fs-5">
          Email
        </lable>
        <input type="email" id="email" className="rounded" />
      </div>
      <div className="mt-2 input-group text-white text-start">
        <lable htmlFor="number" className="fs-5">
          Phone Number
        </lable>
        <input type="number" id="number" className="rounded" />
      </div>
      <div className="mt-2 input-group text-white text-start">
        <lable htmlFor="password" className="fs-5">
          Password
        </lable>
        <input type="password" id="password" className="rounded" />
      </div>
      <div className="mt-2 input-group text-white text-start">
        <lable htmlFor="c-password" className="fs-5">
          Conform Password
        </lable>
        <input type="password" id="c_password" className="rounded" />
      </div>
      <div className="mt-2 text-white text-start">
        <lable htmlFor="gender" className="fs-5">
          gender
        </lable>
        <input
          type="checkbox"
          onChange="male()"
          className="mx-2"
          id="male"
          name="gender"
          value="male"
        />
        <lable htmlFor="male">male</lable>
        <input
          type="checkbox"
          className="mx-2"
          onChange="female()"
          id="female"
          name="gender"
          value="female"
        />
        <lable htmlFor="female">female</lable>
      </div>
      <div className="mt-4 input-group text-white text-start">
        <lable htmlFor="language" className="fs-5">
          Language
        </lable>
        <select id="language" className="rounded">
          <option value="">Select</option>
          <option value="tamil">tamil</option>
          <option value="english">english</option>
          <option value="hindi">hindi</option>
        </select>
      </div>
      <div className="mt-4 input-group text-white text-start">
        <lable htmlFor="date" className="fs-5">
          Date of Birth
        </lable>
        <input type="date" id="date" className="rounded" />
      </div>
    </div>
  );
};

export default Sagaform;
