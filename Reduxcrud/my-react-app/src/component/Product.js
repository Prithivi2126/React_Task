import React, { useEffect, useState } from "react";
import "./Redux.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Addrow,
  CancelRow,
  DeleteRow,
  EditRow,
  SaveRow,
} from "./redux/action/Action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import International from "./International";
import National from "./National";


const Product = () => {
  const [active, setactive] = useState("nationaldetails");
  const countryData = [
    {
      countryName: "Canada",
      stateData: [
        {
          stateName: "Alberta",
          city: [
            {
              cityName: "Edmonton",
            },
            {
              cityName: "Calgary",
            },
          ],
        },
        {
          stateName: "Manitoba",
          city: [
            {
              cityName: " Winkler",
            },
            {
              cityName: "Thompson",
            },
          ],
        },
      ],
    },
    {
      countryName: "India",
      stateData: [
        {
          stateName: "Tamil Nadu",
          city: [
            {
              cityName: "Chennai",
            },
            {
              cityName: "Thanjavur",
            },
          ],
        },
        {
          stateName: "Kerala",
          city: [
            {
              cityName: "Thrissur",
            },
            {
              cityName: "Trivandrum",
            },
          ],
        },
      ],
    },
    {
      countryName: "Germany",
      stateData: [
        {
          stateName: "Bavaria",
          city: [
            {
              cityName: "Munich",
            },
            {
              cityName: "Nuremberg",
            },
          ],
        },
        {
          stateName: "Berlin",
          city: [
            {
              cityName: "Bernau",
            },
            {
              cityName: "Strausberg",
            },
          ],
        },
      ],
    },
  ];
  const dispatch = useDispatch();
  let nav = useNavigate();
  const state = useSelector((res) => res.Reduxreducer);
  const [newObj, setNewObj] = useState({
    location: false,
    country: "",
    remarks: "",
  });
  const [newRow, setNewRow] = useState({
    state: "",
    city: "",
    remarks: "",
    saved: true,
  });
  const handleChecked = (e) => {
    setNewObj({ ...newObj, location: e.target.checked });

    if (e.target.checked) {
      dispatch({
        type: "Checked",
        payload: { flag: e.target.checked, country: "India" },
      });
    } else {
      dispatch({
        type: "Checked",
        payload: { flag: e.target.checked, country: null },
      });
    }
  };
  const handleCountry = (e) => {
    setNewObj({ ...newObj, country: e.target.value });
    if (e.target.value !== "") {
      dispatch({
        type: "Country",
        payload: { flag: true, country: e.target.value },
      });
    } else {
      dispatch({ type: "Country", payload: { flag: false, country: null } });
    }
  };
  const add = () => {
    const headerObj = newObj;
    console.log(headerObj);

    if (
      (headerObj.country !== "" || headerObj.location) &&
      headerObj.remarks !== ""
    ) {
      console.log("success", newRow);
      dispatch(Addrow(newRow));
    } else {
      console.log("error");
      toast("Please select either checkbox or country before adding a row");
    }
  };
  const handleChange = (e, ind) => {
    console.log(e.target.name);
    let name = e.target.name;
    let value = e.target.value;
    let obj = {
      [name]: value,
      index: ind,
    };
    console.log(obj);
    dispatch({ type: "rowColumn", payload: obj });
  };

  const save = (index) => {
    const updatedRow = state.rows[index];
    if (updatedRow.state || updatedRow.city || updatedRow.remarks) {
      dispatch(SaveRow(index));

      setNewRow({
        state: "",
        city: "",
        remarks: "",
        saved: true,
      });
    } else {
      toast("Please fill in all the fields before saving.");
      return;
    }
  };

  const cancel = (index) => {
    dispatch(CancelRow(index));
  };
  const edit = (index) => {
    console.log(index);
    dispatch(EditRow(index));
  };

  const deleteRow = (index) => {
    dispatch(DeleteRow(index));
  };

  const submit = () => {
    toast("Success");
    const unsavedRows = state.rows.filter((row) => row.saved === true);
    if (unsavedRows.length > 0) {
      toast("Please save all rows before submitting.");
      return;
    }
    if (
      state.rows.length !== 0 &&
      (newObj.location === true || newObj.country !== "") &&
      newObj.remarks
    ) {
      toast("Success");
      if (state.editObj) {
        const obj = newObj;
        obj.products = state.rows;
        obj.id = state.editObj.id;
        console.log(obj);
        dispatch({ type: "Update", payload: obj });
        setNewObj({
          location: false,
          country: "",
          remarks: "",
        });
      } else {
        const obj = newObj;
        obj.products = state.rows;
        obj.id = uuidv4();
        console.log(obj);
        dispatch({ type: "Submit", payload: obj });
        setNewObj({
          location: false,
          country: "",
          remarks: "",
        });
      }
      nav("/productList");
    } else {
      toast("Please select either checkbox or country before adding a row");
      return;
    }
  };

  const clear = () => {
    nav("/productList");
  };
  useEffect(() => {
    console.log(state.editObj);
    if (state.editObj) {
      setNewObj({
        ...newObj,
        remarks: state.editObj.remarks,
        country: state.editObj.country,
        location: state.editObj.location,
      });
      if (state.editObj.location) {
        dispatch({
          type: "Checked",
          payload: { flag: state.editObj.location, country: "India" },
        });
      }
      if (state.editObj.country !== "") {
        dispatch({
          type: "Country",
          payload: { flag: true, country: state.editObj.country },
        });
      }
      dispatch({ type: "EditAddRow", payload: state.editObj.products });
    }
  }, []);

  const selectTab = (data, value) => {
    setactive(value);
  };

  return (
    <div className="container p-5  ">
      <div className=" outer ">
        <div className=" mt-3 card ">
          <div className="d-flex justify-content-center  p-5  ">
            <div className="d-flex">
              <label htmlFor="check" className="fw-bold">
                Current location
              </label>
              <input
                type="checkbox"
                className="me-5 ms-2 "
                name="check"
                id="check"
                checked={newObj.location}
                disabled={state.selectCountry || state.addRowFlag}
                onChange={handleChecked}
              />
            </div>
            <div className="d-flex">
              <label htmlFor="country" className="fw-bold">
                Country
              </label>
              <select
                id="country"
                className="me-5 ms-2 "
                required
                value={newObj.country}
                disabled={state.checked || state.addRowFlag}
                onChange={handleCountry}
              >
                <option value="">Select a Country</option>
                {countryData
                  .filter((country) => country.countryName !== "India")
                  .map((country) => (
                    <option
                      key={country.countryName}
                      value={country.countryName}
                    >
                      {country.countryName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="d-flex">
              <label htmlFor="remark" className="fw-bold">
                Remark
              </label>
              <input
                type="text"
                id="remark"
                required
                className="ms-2"
                disabled={state.addRowFlag}
                value={newObj.remarks}
                onChange={(e) =>
                  setNewObj({ ...newObj, remarks: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className=" d-flex mt-5 container  justify-content-end ">
          {/* <button
              type="submit"
              disabled={state.addRowFlagTwo}
              className="btn btn-dark fw-bold"
              onClick={add}
            >
              Add Row
            </button> */}
          {active === "nationaldetails" ? (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={add}
              disabled={state.addRowFlagTwo}
            >
              Nationaladd
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={add}
              disabled={state.addRowFlagTwo}
            >
              Internationaladd
            </button>
          )}
        </div>
        <div className="mt-5">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li
                    className={`nav-item ${
                      active === "nationaldetails"
                        ? "active bg-danger text-warning "
                        : "text-warning"
                    }`}
                  >
                    <a
                      className="nav-link "
                      aria-current="page"
                      href="#nationaldetails"
                      onClick={(e) => selectTab(e, "nationaldetails")}
                    >
                      National
                    </a>
                  </li>
                  <li
                    className={`nav-item ${
                      active === "internationaldetails"
                        ? "active bg-danger text-warning "
                        : ""
                    }`}
                  >
                    <a
                      className="nav-link "
                      aria-current="page"
                      href="#internationaldetails"
                      onClick={(e) => selectTab(e, "internationaldetails")}
                    >
                      InterNational
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {active === "internationaldetails" ? (
        <>
        <International data={state.rows} handleChange={handleChange}
        clear={clear} submit={submit} countryData={countryData} state={state} edit={edit} save={save} cancel={cancel} deleteRow={deleteRow} />
          {/* <div className="outer">
            <table className="table container border-1">
              <thead>
                <tr>
                  <th>State</th>
                  <th>City</th>
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {state.rows &&
                  state.rows.map((res, index) => (
                    <tr key={index}>
                      <td>
                        {res.saved ? (
                          <select
                            id="state"
                            name="state"
                            value={res.state}
                            onChange={(e) => handleChange(e, index)}
                          >
                            <option value="">Select a State</option>
                            {countryData
                              .find(
                                (country) =>
                                  country.countryName === state.country
                              )
                              ?.stateData.map((stateData) => (
                                <option
                                  key={stateData.stateName}
                                  value={stateData.stateName}
                                >
                                  {stateData.stateName}
                                </option>
                              ))}
                          </select>
                        ) : (
                          <>{res.state}</>
                        )}
                      </td>
                      <td>
                        {res.saved ? (
                          <select
                            id="city"
                            name="city"
                            value={res.city}
                            onChange={(e) => handleChange(e, index)}
                          >
                            <option value="">Select a City</option>
                            {countryData
                              .find(
                                (country) =>
                                  country.countryName === state.country
                              )
                              ?.stateData.find(
                                (stateData) => stateData.stateName === res.state
                              )
                              ?.city.map((city) => (
                                <option
                                  key={city.cityName}
                                  value={city.cityName}
                                >
                                  {city.cityName}
                                </option>
                              ))}
                          </select>
                        ) : (
                          <>{res.city}</>
                        )}
                      </td>
                      <td>
                        {res.saved ? (
                          <textarea
                            type="text"
                            name="remarks"
                            id="remarks"
                            value={res.remarks}
                            onChange={(e) => handleChange(e, index)}
                          />
                        ) : (
                          <>{res.remarks}</>
                        )}
                      </td>

                      <td>
                        {res.saved ? (
                          <>
                            <button
                              type="submit"
                              className="bg-success rounded text-light mx-2"
                              onClick={() => save(index)}
                            >
                              Save
                            </button>
                            <button
                              type="submit"
                              className="bg-danger rounded text-light mx-2"
                              onClick={() => cancel(index)}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="submit"
                              className="bg-primary rounded text-light mx-2"
                              onClick={() => edit(index)}
                              disabled={state.addRowFlagTwo}
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="bg-danger rounded text-light mx-2"
                              onClick={() => deleteRow(index)}
                              disabled={state.addRowFlagTwo}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-2">
            <div className="d-flex justify-content-center mb-3">
              <button
                type="submit"
                className="rounded fw-bold text-light border-0 btn btn-secondary mx-2"
                onClick={clear}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded fw-bold text-light border-0 btn btn-primary mx-2"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </div> */}
        </>
      ) : active === "nationaldetails" ? (
        <>
        <National data={state.rows} handleChange={handleChange}
        clear={clear} submit={submit} countryData={countryData} state={state} edit={edit} save={save} cancel={cancel} deleteRow={deleteRow} />
        </>
      ) : (
        <></>
      )}

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Product;
