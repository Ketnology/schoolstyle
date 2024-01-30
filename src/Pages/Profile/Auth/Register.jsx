import React from "react";
import { AuthLink } from "../../Styling/ExternalLink";

function Register() {
  return (
    <>
    <AuthLink/>
    <div className="account-box">
      <div className="account-wrapper">
        <h3 className="account-title">Register</h3>
        <p className="account-subtitle">Access to our dashboard</p>
        {/* Account Form */}
        <form action="">
          <div className="input-block mb-4">
            <label className="col-form-label">
              Email<span className="mandatory">*</span>
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="input-block mb-4">
            <label className="col-form-label">
              Password<span className="mandatory">*</span>
            </label>
            <input className="form-control" type="password" />
          </div>
          <div className="input-block mb-4">
            <label className="col-form-label">
              Repeat Password<span className="mandatory">*</span>
            </label>
            <input className="form-control" type="password" />
          </div>
          <div className="input-block mb-4 text-center">
            <button className="btn btn-primary account-btn" type="submit">
              Register
            </button>
          </div>
          <div className="account-footer">
            <p>
              Already have an account? <a href="index-2">Login</a>
            </p>
          </div>
        </form>
        {/* /Account Form */}
      </div>
    </div>
    </>
  );
}

export default Register;
