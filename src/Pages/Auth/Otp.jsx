import React from 'react'

function Otp() {
  return (
<div className="account-box">
  <div className="account-wrapper">
    <h3 className="account-title">OTP</h3>
    <p className="account-subtitle">Verification your account</p>
    {/* Account Form */}
    <form action="https://smarthr.dreamstechnologies.com/html/template/admin-dashboard">
      <div className="otp-wrap">
        <input
          type="text"
          placeholder={0}
          maxLength={1}
          className="otp-input"
        />
        <input
          type="text"
          placeholder={0}
          maxLength={1}
          className="otp-input"
        />
        <input
          type="text"
          placeholder={0}
          maxLength={1}
          className="otp-input"
        />
        <input
          type="text"
          placeholder={0}
          maxLength={1}
          className="otp-input"
        />
      </div>
      <div className="input-block mb-4 text-center">
        <button className="btn btn-primary account-btn" type="submit">
          Enter
        </button>
      </div>
      <div className="account-footer">
        <p>
          Not yet received? <a href="javascript:void(0);">Resend OTP</a>
        </p>
      </div>
    </form>
    {/* /Account Form */}
  </div>
</div>

  )
}

export default Otp
