import * as Type from '../../type/Type';

const initialState = {
    count : 0
  }
  
  const Calculationreducer = (state = initialState, action) => {
    console.log(action)
    console.log(state);
    switch (action.type) {
        case Type.INCREMENT:
        return {...state,count:state.count+1}
        case Type.DECREMENT:
        return {...state,count:state.count-1}
      default:
        return state;
    }
  }
  
  export default Calculationreducer