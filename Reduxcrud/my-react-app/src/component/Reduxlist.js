import React, { useState } from "react";
import "./Redux.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteRow, editTable } from "./redux/action/Action";

const Reduxlist = () => {
  const state = useSelector((res) => res.Reduxreducer);
  let nav = useNavigate();
  const [id, setid] = useState();
  const dispatch = useDispatch();

  const Delete = (index) => {
    dispatch(DeleteRow(index));
  };

  const editdata = (data) => {
    dispatch(editTable(data));
    nav("/reduxform");
  };

  const view = () => {
    nav("/invoice");
  };

  const add = () => {
    nav("/reduxform");
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
          {state.rows.map((row, index) => (
            <tr key={index} className="text-center">
              {index === 0 && (
                <>
                  <td>{index + 1}</td>
                  <td>{state.selectedCountry || "India"}</td>
                  <td>{state.remark}</td>

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
                      onClick={() => Delete(index)}
                    >
                      Delete
                    </button>
                    <button
                      type="submit"
                      className="bg-success rounded mx-2"
                      onClick={() => view()}
                    >
                      View
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Reduxlist;
