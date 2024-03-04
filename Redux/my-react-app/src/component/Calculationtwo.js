import React from 'react'
import {  connect } from 'react-redux';
import { increment } from './redux/action/Action';
import { decrement } from './redux/action/Action';
const Calculationtwo = (props) => {
  return (
  
         <div>
      <p> {props.count}</p>
      <button onClick={props.increment} className='btn btn-primary mx-2'>Increment</button>
      <button onClick={props.decrement} className='btn btn-danger'>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.Calculationreducer.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

   
  

export default connect(mapStateToProps, mapDispatchToProps)(Calculationtwo)