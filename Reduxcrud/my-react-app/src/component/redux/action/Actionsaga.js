import * as type from "../type/sagaTypes";

export const getrequest = () => {
  return {
    type: type.GET_REQUEST,
  };
};

export const getsuccess = (data) => {
  return {
    type: type.GET_SUCCESS,
    payload: data,
  };
};

export const getfailure = () => {
  return {
    type: type.GET_FAILURE,
  };
};
