import * as types from "../../type/type";

const intialValue = {
  array: [],
  editobj: null,
};

const reducer = (state = intialValue, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case types.GET_REQUEST:
    case types.PUT_REQUEST:
    case types.DELETE_REQUEST:
    case types.GETAPI_REQUEST:
    case types.POST_REQUEST:
      return {
        ...state,
      };
    case types.GET_SUCCESS:
      return {
        ...state,
        array: action.payload,
      }
    case types.POST_SUCCESS:
      return { ...state, array: [...state.array, action.payload] }

    case types.DELETE_SUCCESS:
      return {
        ...state,
        array: state.array.filter((item) => item.id !== action.payload)
      }
    

    case types.PUT_SUCCESS:
      return {
        ...state,
        array: state.array.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case types.GETAPI_SUCCESS:
      return {
        ...state,
        editobj: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
