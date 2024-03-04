import React, { useState } from "react";
import "./Redux.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const state = useSelector((res) => res.Reduxreducer);
  console.log(state);
  let nav = useNavigate();
  const dispatch = useDispatch();

  const Delete = (index) => {
    dispatch({ type: "Delete", payload: index });
  };

  const editdata = (data) => {
    dispatch({ type: "Edit", payload: data });
    nav("/product");
  };

  const view = (data) => {
    dispatch({ type: "View", payload: data });
    nav("/invoice");
  };

  const add = () => {
    nav("/product");
  };

  return (
    <div className="container outer">
      <div className="mt-2 d-flex justify-content-end">
        <button
          type="submit"
          className="rounded fw-bold text-light border-0 btn btn-dark"
          onClick={add}
        >
          Add
        </button>
      </div>
      <table className="table mt-4 border-1">
        <thead>
          <tr>
            <th scope="col">SI.NO</th>
            <th scope="col">Country</th>
            <th scope="col">Remarks</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.productDetails &&
            state.productDetails.map((row, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{row.country === "" ? "India" : row.country}</td>
                <td>{row.remarks}</td>
                <td>
                  <button
                    type="submit"
                    className="bg-primary rounded mx-2"
                    onClick={() => editdata(row)}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="bg-danger rounded mx-2"
                    onClick={() => Delete(row.id)}
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="bg-success rounded mx-2"
                    onClick={() => view(row)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
