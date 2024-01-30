import React from 'react'

function Login() {
  return (
<div className="account-box">
  <div className="account-wrapper">
    <h3 className="account-title">Login</h3>
    <p className="account-subtitle">Access to our dashboard</p>
    {/* Account Form */}
    <form action="https://smarthr.dreamstechnologies.com/html/template/admin-dashboard">
      <div className="input-block mb-4">
        <label className="col-form-label">Email Address</label>
        <input
          className="form-control"
          type="text"
          defaultValue="admin@dreamguystech.com"
        />
      </div>
      <div className="input-block mb-4">
        <div className="row align-items-center">
          <div className="col">
            <label className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <a className="text-muted" href="forgot-password">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="position-relative">
          <input
            className="form-control"
            type="password"
            defaultValue={123456}
            id="password"
          />
          <span className="fa-solid fa-eye-slash" id="toggle-password" />
        </div>
      </div>
      <div className="input-block mb-4 text-center">
        <button className="btn btn-primary account-btn" type="submit">
          Login
        </button>
      </div>
      <div className="account-footer">
        <p>
          Don't have an account yet? <a href="register">Register</a>
        </p>
      </div>
    </form>
    {/* /Account Form */}
  </div>
</div>

  )
}

export default Login
