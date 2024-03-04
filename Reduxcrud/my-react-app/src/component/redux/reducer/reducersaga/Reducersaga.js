import * as type from "../../type/sagaTypes";

const initialState = {
  array: [],
};

const Reducersaga = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case type.GET_REQUEST:
      console.log(action);
      return { ...state };

    case type.GET_SUCCESS:
      console.log(action);
      return { ...state, array: action.payload };

    case type.GET_FAILURE:
      return { ...state };

    default:
      return state;
  }
};

export default Reducersaga;
