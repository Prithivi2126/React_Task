import * as Type from "../reducer/Reducertype";

export const postsuccess = (data) => {
  return {
    type: Type.POST_REQ_SUCCESS,
    payload: data,
  };
};

export const posterr = (data) => {
  return {
    type: Type.POST_REQ_FAILURE,
    payload: data,
  };
};

export const getApisuccess = (data) => {
  console.log(data);
  return {
    type: Type.GETAPI_REQ_SUCCESS,
    payload: data,
  };
};

export const getApierr = (data) => {
  console.log(data);
  return {
    type: Type.GETAPI_REQ_FAILURE,
    payload: data,
  }
}

export const deletesuccess = (data) => {
  return {
    type: Type.DELETE_REQ_SUCCESS,
    payload: data,
  };
};

export const deleteerr = (data) => {
  return {
    type: Type.DELETE_REQ_FAILURE,
    payload: data,
  };
};

export const putsuccess = (data) => {
  return {
    type: Type.PUT_REQ_SUCCESS,
    payload: data,
  };
};

export const puterr = (data) => {
  return {
    type: Type.PUT_REQ_FAILURE,
    payload: data,
  };
};

export const getsuccess = (data) => {
  return {
    type: Type.GET_REQ_SUCCESS,
    payload: data,
  };
};

export const geterr = (data) => {
  return {
    type: Type.GET_REQ_FAILURE,
    payload: data,
  };
};
