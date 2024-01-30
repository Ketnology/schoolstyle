import React from 'react'

function ChangePassword() {
  return (
<div className="account-box">
  <div className="account-wrapper">
    <h3 className="account-title">Change Password</h3>
    <form>
      <div className="input-block mb-3">
        <label className="col-form-label">Old password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="input-block mb-3">
        <label className="col-form-label">New password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="input-block mb-3">
        <label className="col-form-label">Confirm password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="submit-section mb-4">
        <button className="btn btn-primary submit-btn">Update Password</button>
      </div>
    </form>
  </div>
</div>

  )
}

export default ChangePassword
