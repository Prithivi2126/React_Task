import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <ReCAPTCHA
        sitekey="6Lc1KTEpAAAAAPcR2M3dPDqK2699Y3nYrsJI_OF1"
        onChange={onChange}
      />
    </div>
  )
}
export default Captcha;
