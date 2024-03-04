import React, { useState } from "react";
import { increment } from "./redux/action/Action";
import { decrement } from "./redux/action/Action";
import { useDispatch, useSelector } from "react-redux";

const Calculation = () => {
    const user = useSelector((state)=>state.Calculationreducer);
    console.log(user)
     const dispatch = useDispatch()

  const Add=()=>{
    dispatch(increment())
  }
  const Substract=()=>{
    dispatch(decrement())
  }
  return (
    <div className="mt-4">
      <h2> {user.count}</h2>
      <button className="btn btn-primary mx-2" onClick={Add}>increment</button>
      <button  className ="btn btn-danger " onClick={Substract}>decrement</button>
    </div>
  );
};

export default Calculation;
