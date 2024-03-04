import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[count ,setcount] = useState(0);
    const squaredcount = useMemo(()=>{
        
        return count * count
       
    },[count])
  
    function counterset(){
        if (count < 3) {
            setcount((prevCount) => prevCount + 1);
          }
    }

    console.log(squaredcount)
  return (
    <div>
<p>Count : {count}</p>
<p>Squared Count : {squaredcount}</p>
<button onClick={counterset}>increment count</button>
    </div>
  )
}

export default Usememo