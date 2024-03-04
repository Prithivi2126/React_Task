import React, { useEffect, useState } from "react";
import "./Redux.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Addrow,
  CancelRow,
  DeleteRow,
  EditRow,
  SaveRow,
  editTable,
} from "./redux/action/Action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
const Reduxform = () => {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.Reduxreducer);
  let nav = useNavigate();
  const [newRow, setNewRow] = useState({
    state: "",
    city: "",
    remarks: "",
  });
  const [newObj, setNewObj] = useState({});

  const [nonEditFlag, setNonEditFlag] = useState(false);
  const [isRowAdded, setIsRowAdded] = useState(false);
  const add = () => {
    setNonEditFlag(true);
    if (isRowAdded) {
      toast(" Please save it before adding a new one.");
      return;
    }
    if (state.checked || state.selectCountry || state.remark) {
      if (newRow.state || newRow.city || newRow.remarks) {
        dispatch(SaveRow(newRow));
        setNewRow({
          state: "",
          city: "",
          remarks: "",
        });
        setIsRowAdded(false);
      } else {
        if (state.rows.every((row) => row.saved && !row.editable)) {
          dispatch(Addrow({ ...newRow, disabled: false }));
        } else {
          toast("Please save the previous row before adding a new row.");
        }
      }
    } else {
      toast("Please select either checkbox or country before adding a row");
    }
  };
  useEffect(() => {
    if (state.editValue) {
      setNewRow(state.checked, state.selectCountry, state.remark);
    }
  });

  const handleChecked = (e) => {
    const isChecked = e.target.checked;
    dispatch({ type: "checked", payload: isChecked });
    if (isChecked) {
      dispatch({ type: "Country", payload: "India" });
    }
  };
  const handleCountry = (e) => {
    console.log(e.target.value);
    dispatch({ type: "Country", payload: e.target.value });
  };
  const handleRemark = (e) => {
    console.log(e.target.value);
    dispatch({ type: "remark", payload: e.target.value });
  };
  const handleChange = (e, ind) => {
    setNonEditFlag(true);
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

  const save = (index) => {
    const updatedRow = state.rows[index];
    if (updatedRow.state || updatedRow.city || updatedRow.remarks) {
      dispatch(SaveRow(index));
      setNonEditFlag(false);
    } else {
      toast("Please fill in all the fields before saving.");
      return;
    }
  };

  const cancel = (index) => {
    dispatch(CancelRow(index));
    setNonEditFlag(false);
  };

  const edit = (index) => {
    dispatch(EditRow(index));
    setNonEditFlag(true);
  };

  const deleteRow = (index) => {
    dispatch(DeleteRow(index));
    setNonEditFlag(false);
  };

  const editdata = (index) => {
    dispatch(editTable(index, state.rows[index]));
  };
  const submit = () => {
    const unsavedRows = state.rows.filter((row) => !row.saved);
    if (unsavedRows.length > 0) {
      toast("Please save all rows before submitting.");
      return;
    }
    console.log(unsavedRows.length);
    console.log(state.checked);
    console.log(state.selectCountry);
    console.log(state.remark);
    if (state.remark && unsavedRows.length !== 0) {
    } else {
      toast("Please select either checkbox or country before adding a row");
      return;
    }

    nav("/reduxlist");
  };

  const clear = () => {
    nav("/reduxlist");
  };

  return (
    <div>
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
                  onChange={handleChecked}
                  disabled={state.selectCountry}
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
                  onChange={handleCountry}
                  disabled={state.checked}
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
                  value={state.remark}
                  onChange={handleRemark}
                />
              </div>
            </div>
          </div>
          <div className=" d-flex mt-5 container  justify-content-end ">
            <button
              type="submit"
              className="btn btn-dark fw-bold"
              onClick={add}
              disabled={nonEditFlag}
            >
              Add Row
            </button>
          </div>
        </div>
        <div clas>
          <div className="outer">
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
                        <select
                          id="state"
                          name="state"
                          value={res.state}
                          onChange={(e) => handleChange(e, index)}
                          disabled={!res.editable && res.readonly}
                        >
                          <option value="">Select a State</option>
                          {countryData
                            .find(
                              (country) =>
                                country.countryName === state.selectedCountry
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
                      </td>
                      <td>
                        <select
                          id="city"
                          name="city"
                          value={res.city}
                          onChange={(e) => handleChange(e, index)}
                          disabled={!res.editable && res.readonly}
                        >
                          <option value="">Select a City</option>
                          {countryData
                            .find(
                              (country) =>
                                country.countryName === state.selectedCountry
                            )
                            ?.stateData.find(
                              (stateData) => stateData.stateName === res.state
                            )
                            ?.city.map((city) => (
                              <option key={city.cityName} value={city.cityName}>
                                {city.cityName}
                              </option>
                            ))}
                        </select>
                      </td>
                      <td>
                        <textarea
                          type="text"
                          name="remarks"
                          id="remarks"
                          value={res.remarks}
                          onChange={(e) => handleChange(e, index)}
                          disabled={!res.editable && res.readonly}
                        />
                      </td>

                      <td>
                        {res.saved && !res.editable ? (
                          <>
                            <button
                              type="submit"
                              className="bg-primary rounded text-light mx-2"
                              onClick={() => edit(index)}
                              disabled={nonEditFlag}
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="bg-danger rounded text-light mx-2"
                              onClick={() => deleteRow(index)}
                              disabled={nonEditFlag}
                            >
                              Delete
                            </button>
                          </>
                        ) : (
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
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
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
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Reduxform;
