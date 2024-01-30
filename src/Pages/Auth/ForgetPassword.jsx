import React from 'react'

function ForgetPassword() {
  return (
    <div className="account-box">
    <div className="account-wrapper">
      <h3 className="account-title">Forgot Password?</h3>
      <p className="account-subtitle">
        Enter your email to get a password reset link
      </p>
      {/* Account Form */}
      <form>
        <div className="input-block mb-4">
          <label className="col-form-label">Email Address</label>
          <input className="form-control" type="text" />
        </div>
        <div className="input-block mb-4 text-center">
          <button className="btn btn-primary account-btn" type="submit">
            Reset Password
          </button>
        </div>
        <div className="account-footer">
          <p>
            Remember your password? <a href="index-2">Login</a>
          </p>
        </div>
      </form>
      {/* /Account Form */}
    </div>
  </div>
  
  )
}

export default ForgetPassword
