import React, { useCallback, useEffect, useState } from "react";
import "./saga.css";
import {
  postDataRequest,
  postDataSuccess,
  putDataRequest,
} from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
const StudentDetails = () => {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.reducer);
  const nav = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [c_password, setC_password] = useState();
  const [gender, setGender] = useState();
  const [language, setLanguage] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    console.log(state.editobj);
    if (state.editobj) {
      setName(state.editobj.name);
      setEmail(state.editobj.email);
      setNumber(state.editobj.number);
      setPassword(state.editobj.password);
      setC_password(state.editobj.c_password);
      setLanguage(state.editobj.language);
      setGender(state.editobj.gender);
      setDate(state.editobj.date);
    }
  }, [state.editobj]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      c_password: "",
      gender: "",
      language: "",
      date: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.number) {
        errors.number = "Required";
      } else if (!/^\d{10}$/i.test(values.number)) {
        errors.number = "Invalid number";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
          values.password
        )
      ) {
        errors.password = "Invalid password";
      }
      if (!values.c_password) {
        errors.cpassword = "Required";
      } else if (values.c_password !== values.password) {
        errors.c_password = "Invalid password";
      }
      if (!values.language) {
        errors.language = "Required";
      }
      if (!values.date) {
        errors.date = "Required";
      }

      return errors;
    },
    onSubmit: (values) => {
      const Object = {
        name: values.name,
        email: values.email,
        number: values.number,
        password: values.password,
        c_password: values.c_password,
        gender: values.gender,
        language: values.language,
        date: values.date,
      };
      if (state.editobj) {
        Object.id = state.editobj.id;
        dispatch(putDataRequest(Object));
      } else {
        dispatch(postDataRequest(Object));
      }
      nav("/list");
    },
  });
  console.log(formik.values);

  return (
    <div className="mt-3 container rounded  form">
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-2 input-group text-white text-start">
          <lable htmlFor="name" className="fs-5">
            Name
          </lable>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            className="rounded "
            value={formik.values.name}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
          />
          {formik.errors.name ? (
            <span className="text-danger">{formik.errors.name}</span>
          ) : null}
        </div>
        <div className="mt-2 input-group text-white text-start">
          <lable htmlFor="email" className="fs-5">
            Email
          </lable>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            className="rounded"
            value={formik.values.email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          />
          {formik.errors.email ? (
            <span className="text-danger">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="mt-2 input-group text-white text-start">
          <lable htmlFor="number" className="fs-5">
            Phone Number
          </lable>
          <input
            type="number"
            id="number"
            name="number"
            className="rounded"
            value={formik.values.number}
            // onChange={(e) => {
            //   setNumber(e.target.value);
            // }}
            onChange={formik.handleChange}
          />
          {formik.errors.number ? (
            <span className="text-danger">{formik.errors.number}</span>
          ) : null}
        </div>
        <div className="mt-2 input-group text-white text-start">
          <lable htmlFor="password" className="fs-5">
            Password
          </lable>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded"
            value={formik.values.password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <span className="text-danger">{formik.errors.password}</span>
          ) : null}
        </div>
        <div className="mt-2 input-group text-white text-start">
          <lable htmlFor="c-password" className="fs-5">
            Conform Password
          </lable>
          <input
            type="password"
            id="c_password"
            name="c_password"
            className="rounded"
            value={formik.values.c_password}
            // onChange={(e) => {
            //   setC_password(e.target.value);
            // }}
            onChange={formik.handleChange}
          />
          {formik.errors.c_password ? (
            <span className="text-danger">{formik.errors.c_password}</span>
          ) : null}
        </div>
        <div className="mt-2 text-white text-start">
          <lable htmlFor="gender" className="fs-5">
            gender
          </lable>
          <input
            type="radio"
            className="mx-2"
            id="male"
            name="gender"
            value="male"
            checked={formik.values.gender === "male"}
            // onChange={(e) => {
            //   setGender("male");
            // }}
            onChange={formik.handleChange}
          />

          <lable htmlFor="male">male</lable>
          <input
            type="radio"
            className="mx-2"
            id="female"
            name="gender"
            value="female"
            checked={formik.values.gender === "female"}
            // onChange={(e) => {
            //   setGender("female");
            // }}
            onChange={formik.handleChange}
          />
          <lable htmlFor="female">female</lable>
        </div>
        <div className="mt-4 input-group text-white text-start">
          <lable htmlFor="language" className="fs-5">
            Language
          </lable>
          <select
            id="language"
            className="rounded"
            value={formik.values.language}
            name="language"
            // onChange={(e) => {
            //   setLanguage(e.target.value);
            // }}
            onChange={formik.handleChange}
          >
            <option value="">Select</option>
            <option value="tamil">tamil</option>
            <option value="english">english</option>
            <option value="hindi">hindi</option>
          </select>
          {formik.errors.language ? (
            <span className="text-danger">{formik.errors.language}</span>
          ) : null}
        </div>
        <div className="mt-4 input-group text-white text-start">
          <lable htmlFor="date" className="fs-5">
            Date of Birth
          </lable>
          <input
            type="date"
            id="date"
            name="date"
            className="rounded"
            value={formik.values.date}
            // onChange={(e) => {
            //   setDate(e.target.value);
            // }}
            onChange={formik.handleChange}
          />
          {formik.errors.date ? (
            <span className="text-danger">{formik.errors.date}</span>
          ) : null}
        </div>
        <div className="text-center mt-2">
          <button type="submit" className="rounded fw-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentDetails;
