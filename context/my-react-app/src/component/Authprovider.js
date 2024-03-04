import React, { createContext, useState } from 'react'
export const context = createContext({})
const Authprovider = ({children}) => {
          const [authValue,setAuthValue]=useState(null)
          const obj={
            authValue,
            setAuthValue
          }
  return (
    <div>
     <context.Provider value={obj} >
        {children}
     </context.Provider>
    </div>
  )
}

export default Authprovider