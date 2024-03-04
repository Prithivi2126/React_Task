
import React, { useState } from 'react';
import OTPInput from 'otp-input-react'

const Password = () => {
  const [otp, setOtp] = useState('');
console.log(otp)
  return (
    <div className='container'>
      <div>
         <label>Enter your OTP</label>
         <OTPInput value={otp} onChange={setOtp}  OTPLength={4} otpType="number"  autoFocus/>
      </div>
    </div>
  );
};

export default Password;

