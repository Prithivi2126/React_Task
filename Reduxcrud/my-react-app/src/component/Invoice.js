import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Invoice = () => {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.Reduxreducer);

  return (
    <div className="container card invoice p-5  mt-5">
      <div className=" container text-start">
        <hr></hr>
        <p>
          <span className="fw-bold">Loaction: </span>
          {state.viewObj.country === "" ? "India" : state.viewObj.country}
        </p>
        <p>
          <span className="fw-bold">Remarks: </span>
          {state.viewObj.remarks}
        </p>
        <hr></hr>
      </div>
      <div className=" container mt-3 text-start">
      
        <table className="table mt-3 ">
          <thead>
            <tr className="table-info">
              <th scope="col">SI.NO</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
          {state.viewObj.products&&state.viewObj.products.map((row, index) => (
            <tr key={index} >
              <td>{index + 1}</td>
              <td>{row.state}</td>
              <td>{row.city}</td>
              <td>{row.remarks}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5">

      </div>
    </div>
  );
};

export default Invoice;
