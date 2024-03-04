import React from "react";

const International = (props) => {
    console.log(props)
    const  {clear,data,submit,handleChange,countryData,edit, save, cancel, deleteRow,state}=props
  return (
    <>
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
            {props.data &&
              props.data.map((res, index) => (
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
                            (country) => country.countryName === state.country
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
                            (country) => country.countryName === state.country
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
      </div>
    </>
  );
};

export default International
