import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";
import image1 from "./images/bg_1.jpg.webp";
import Dummy from "./Dummy.json";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const auth = UseAuth();
  const nav = useNavigate();
  console.log(auth);
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    const details = Dummy.items.find(
      (res) => res.name === values.name && res.password === values.password
    );
    console.log(details);
    auth.setAuthValue(details);
    nav("/");
    console.log(Dummy);
    console.log("Form submitted with values:", values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="card">
        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="row">
            <div className="col-lg-6 col-md-6 order-lg-2 order-md-2 p-0 half">
              <div className="d-flex align-items-center h-100">
                <img
                  src={image1}
                  alt=""
                  className="image img-fluid w-100 h-100"
                />
              </div>
            </div>
            <div className="content col-lg-6 col-md-6 order-lg-1 order-md-1">
              <div className="container">
                <div className="row align-items-center justify-content-center my-5">
                  <div className="col-lg-8 col-md-10 col-sm-12 my-4 text-start">
                    <p className="text- fs-3">
                      Login to <strong>Colorlib</strong>
                    </p>
                    <div className="form-group text-start mt-4">
                      <label htmlFor="name">Username</label>
                      <Field
                        type="text"
                        className="form-control mt-2"
                        placeholder="your Username"
                        id="name"
                        name="name"
                      />
                      <div className="text-danger">
                        <ErrorMessage name="name" />
                      </div>
                    </div>

                    <div className="form-group text-start mt-3">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        className="form-control mt-2"
                        placeholder="Your Password"
                        id="password"
                        name="password"
                      />

                      <div className="text-danger">
                        <ErrorMessage name="password" />
                      </div>
                    </div>

                    <div className="mb-4 mt-3">
                      <div className="d-flex justify-content-between">
                        <div className="form-check">
                          <Field
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            name="rememberMe"
                          />
                          <label
                            className="form-check-label remember"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <div>
                          <span className="ml-auto password">
                            <a href="#">Forgot Password</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-block w-100 mt-3">
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
