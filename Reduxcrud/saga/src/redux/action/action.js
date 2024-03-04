import * as types from './../type/type'

export const getDataRequest=()=>{
 return{
    type:types.GET_REQUEST
 }
}
export const getDataSuccess=(data)=>{
    console.log(data)
    return{
        type:types.GET_SUCCESS,
        payload:data
     }
}

export const postDataRequest=(data)=>{
   return{
      type:types.POST_REQUEST,
      payload:data
   }
  }

  export const postDataSuccess=(data)=>{
   console.log(data)
   return{
       type:types.POST_SUCCESS,
       payload:data
    }
}

export const deleteDataRequest=(data)=>{
   return{
      type:types.DELETE_REQUEST,
      payload:data
   }
  }

  export const deleteDataSuccess=(data)=>{
  
   return{
       type:types.DELETE_SUCCESS,
       payload:data
    }
}

export const getapiDataRequest=(id)=>{
   return{
      type:types.GETAPI_REQUEST,
      payload:id
   }
  }

  export const getapiDataSuccess=(data)=>{
  
   return{
       type:types.GETAPI_SUCCESS,
       payload:data
    }
}

export const putDataRequest=(id)=>{
   return{
      type:types.PUT_REQUEST,
      payload:id
   }
  }

  export const putDataSuccess=(id)=>{
  
   return{
       type:types.PUT_SUCCESS,
       payload:id
    }
}
