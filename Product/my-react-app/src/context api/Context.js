import React from 'react'
import { createContext,useState } from 'react';
export const countercontext = createContext()
const Context = ({children}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(count + 1);
    };
    
    const decrement = () => {
    setCount(count - 1);
    };
  return (
    <div>  <countercontext.Provider value={{ count, increment, decrement }} >
    {children}
    </countercontext.Provider></div>
  )
}

export default Context