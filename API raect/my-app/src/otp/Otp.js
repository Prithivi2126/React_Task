import React, { useState } from 'react'
import OtpInput from 'react'

const Otp = () => {
    const [otp, setOtp] = useState('');
  return (
    <div className='text-center row'>
        <div className='justify-content-center'>
        <label>enter your Otp</label>
      {/* <OtpInput value={otp}
      onChange={setOtp}
      numInputs={4}></OtpInput> */}
        </div>
    </div>
  )
}

export default Otp