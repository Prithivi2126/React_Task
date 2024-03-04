import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../list.css";
import * as Yup from "yup";
import Sidenav from "./Sidenav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDataRequest, putDataRequest } from "../redux/action/action";

const Sagaform = () => {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.reducer);
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [date, setDate] = useState("");

  async function validateName(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid = name.length > 3;
        resolve(isValid);
      }, 500);
    });
  }

  const onSubmitForm = async (values, { setSubmitting }) => {
    console.log("Submitting values:", values);
    if (values.id) {
      dispatch(putDataRequest(values));
    } else {
      dispatch(postDataRequest(values));
    }
    setSubmitting(false);
    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setC_password("");
    setGender("");
    setLanguage("");
    setDate("");
    nav("/sagalist");
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .test(
        "len",
        "Name must be between 3 and 10 characters",
        async function (value) {
          if (!value) return true;
          const isNameValid = await validateName(value);
          return isNameValid && value.length <= 10;
        }
      ),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
     password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/,
        "Invalid Password"
      ),
    c_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    gender: Yup.string().required("Gender is required"),
    language: Yup.string()
      .required("Language is required")
      .notOneOf(["Select"], "Language is required"),
    date: Yup.date().required("Date of Birth is required"),
  });


  useEffect(() => {
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
  

  const back = () => {
    nav("/sagalist");
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="sagaform">
        <Sidenav />
      </div>
      <div className="mt-2 mb-2 " style={{ width: "100%", maxWidth: "800px" }}>
        <div className="container rounded form" style={{ padding: "30px" }}>
          <h2 className="text-center">REGISTRATION FORM!</h2>
          <Formik
          enableReinitialize={true}
          initialValues={{
            name,
            email,
            number,
            password,
            c_password,
            gender,
            language,
            date,
            id: state.editobj ? state.editobj.id : null,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmitForm}
          >
            {({ isSubmitting, touched, setFieldTouched, errors, values }) => (
              <Form>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="name" className="fs-6">
                        Name
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        className={`form-control mt-1 ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                        onFocus={(e) => {
                          setFieldTouched("name", true);
                        }}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="email" className="fs-6  mt-1">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        className={`form-control mt-1 ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                        onFocus={() => setFieldTouched("email", true, false)}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="number" className="fs-6  mt-1">
                        Phone Number
                      </label>
                      <Field
                        type="number"
                        id="number"
                        name="number"
                        value={values.number}
                        className={`form-control mt-1 ${
                          touched.number && errors.number ? "is-invalid" : ""
                        }`}
                        onFocus={() => setFieldTouched("number", true, false)}
                      />
                      <ErrorMessage
                        name="number"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="password" className="fs-6  mt-1">
                        Password
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        className={`form-control mt-1 ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                        onFocus={() => setFieldTouched("password", true, false)}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="c_password" className="fs-6  mt-1">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        id="c_password"
                        name="c_password"
                        value={values.c_password}
                        className={`form-control mt-1 ${
                          touched.c_password && errors.c_password
                            ? "is-invalid"
                            : ""
                        }`}
                        onFocus={() =>
                          setFieldTouched("c_password", true, false)
                        }
                      />
                      <ErrorMessage
                        name="c_password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="gender" className="fs-6  mt-1">
                        Gender
                      </label>
                      <div>
                        <Field
                          type="radio"
                          className="mx-2 mt-2"
                          id="male"
                          name="gender"
                          value="male"
                          checked={values.gender === "male"}
                        />
                        <label htmlFor="male">Male</label>
                        <Field
                          type="radio"
                          className="mx-2 mt-2"
                          id="female"
                          name="gender"
                          value="female"
                          checked={values.gender === "female"}
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="language" className="fs-6  mt-1">
                        Language
                      </label>
                      <Field
                        as="select"
                        id="language"
                        name="language"
                        value={values.language}
                        className={`form-control mt-1 ${
                          touched.language && errors.language
                            ? "is-invalid"
                            : ""
                        }`}
                        onFocus={() => setFieldTouched("language", true, false)}
                      >
                        <option value="">Select</option>
                        <option value="tamil">Tamil</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                      </Field>
                      <ErrorMessage
                        name="language"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group text-start">
                      <label htmlFor="date" className="fs-6  mt-1">
                        Date of Birth
                      </label>
                      <Field
                        type="date"
                        id="date"
                        name="date"
                        value={values.date}
                        className={`form-control mt-1 ${
                          touched.date && errors.date ? "is-invalid" : ""
                        }`}
                        onFocus={() => setFieldTouched("date", true, false)}
                      />
                      <ErrorMessage
                        name="date"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className=" mt-4">
                    <button
                      type="submit"
                      className="btn btn-block fw-bold w-40 me-3"
                      style={{ backgroundColor: "#fb771a" }}
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                  <div className=" mt-4">
                    <button
                      type="submit"
                      className="btn btn-block bg-dark text-white border-0 fw-bold w-40"
                      onClick={back}
                    >
                      back
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Sagaform;
