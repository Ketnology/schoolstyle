import React from 'react'
import { ExternalLink } from '../../Styling/ExternalLink'

function Four0Four() {
  return (
  <>
  <ExternalLink/>
    <div className="error-page">
      <div className="main-wrapper">
  <div className="error-box">
    <h1>404</h1>
    <h3>
      <i className="fa-solid fa-triangle-exclamation" /> Oops! Page not found!
    </h3>
    <p>The page you requested was not found.</p>
    <a href="admin-dashboard" className="btn btn-custom">
      Back to Home
    </a>
  </div>
</div>

    </div>
  </>
  )
}

export default Four0Four
