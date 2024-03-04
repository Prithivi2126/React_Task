import * as Type from '../reducer/Reducertype';

export const initialvalue = {
  items: [], 
  error: null
};

export const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case Type.POST_REQ_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
    case Type.POST_REQ_FAILURE:
    case Type.GETAPI_REQ_FAILURE:
    case Type.DELETE_REQ_FAILURE:
      case Type.GET_REQ_FAILURE: 
      return { ...state, error: action.payload };
    case Type.GETAPI_REQ_SUCCESS:
      return { ...state, items: action.payload };
    case Type.DELETE_REQ_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item)=>item.id !== action.payload),
      };
      case Type.PUT_REQ_SUCCESS:
     
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case Type.GET_REQ_SUCCESS:
      
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
