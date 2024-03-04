import React from 'react'

import { useContext } from 'react';
import { countercontext } from './Context';
const Process = () => {
    const { count, increment, decrement } = useContext(countercontext);
  return (
    <div>
     
    <h2> {count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  
    </div>
  )
}

export default Process