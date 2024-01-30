import React from 'react'

function LockScreen() {
  return (
<div className="account-box">
  <div className="account-wrapper">
    {/* Lock User Img */}
    <div className="lock-user">
      <img
        src="assets/img/profiles/avatar-02.jpg"
        alt="User Image"
        className="rounded-circle"
      />
      <h4>John Doe</h4>
    </div>
    {/* /Lock User Img */}
    {/* Account Form */}
    <form action="https://smarthr.dreamstechnologies.com/html/template/admin-dashboard">
      <div className="input-block mb-3">
        <label className="col-form-label">Password</label>
        <input className="form-control" type="password" />
      </div>
      <div className="input-block mb-3 text-center">
        <button className="btn btn-primary account-btn" type="submit">
          Enter
        </button>
      </div>
      <div className="account-footer">
        <p>
          Sign in as a different user? <a href="index-2">Login</a>
        </p>
      </div>
    </form>
    {/* /Account Form */}
  </div>
</div>

  )
}

export default LockScreen
