import * as Type from "../type/Type"

export const Addrow = (rows) => {
  return {
    type: Type.ADDROW,
    payload: rows,
  }
}

export const SaveRow = (index) => {
  return {
    type: Type.SAVEROW,
    payload: index,
  }
}

export const CancelRow = (index) => {
  return {
    type: Type.CANCELROW,
    payload: index,
  }
}
export const EditRow = (index) => {
  return {
    type: Type.EDITROW,
    payload: index,
  }
}

export const DeleteRow = (index) => {
  return {
    type: Type.DELETEROW,
    payload: index,
  }
}
export const editTable = (data) => {
  return {
    type: Type.EDITTABLE,
    payload: data,
  }
}

export const submitdata = (data) => {
  return {
    type: Type.EDITTABLE,
    payload: data,
  }
}



