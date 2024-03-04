import React, { useCallback, useEffect } from "react";
import "./sagastyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getrequest } from "../redux/action/Actionsaga";

const Sagalist = () => {
  // const state =useSelector((res)=>console.log(res))
  // const state = useSelector((res) => res.Reducersaga);
  // console.log(state);
  const dispatch = useDispatch();
  const getdata = useCallback(() => {
    console.log("useCallback");
    dispatch(getrequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    console.log("getdata");
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container list">
      <div className="table_change">
        <table className="table mt-4  ">
          <thead>
            <tr>
              <th scope="col">SI.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Conform Password</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Language</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {state.array&&state.array.map(res=>
              <tr>
                <td>{res.name}</td>
              </tr>)} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sagalist;
