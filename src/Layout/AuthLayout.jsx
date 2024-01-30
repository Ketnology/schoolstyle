import React from "react";
import { Outlet } from "react-router-dom";
import { AuthLink } from "../Styling/ExternalLink";

function AuthLayout({ children }) {
  return (
    <>
      <AuthLink />
      <div className="account-page">
        {/* Main Wrapper */}
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              <div className="account-logo">
                <a href="admin-dashboard">
                  <img
                    src="assets/img/logo2.png"
                    alt="Dreamguy's Technologies"
                  />
                </a>
              </div>
              {children}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
