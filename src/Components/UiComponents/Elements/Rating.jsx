import React from 'react'

function Rating() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Rating</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Rating */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Default Rating</h5>
            </div>
            <div className="card-body card-buttons">
              <p>This is the most basic example of ratings.</p>
              <div className="rating rating-default" />
            </div>
          </div>
        </div>
        {/* /Rating */}
        {/* Rating */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Score</h5>
            </div>
            <div className="card-body card-buttons">
              <p>Stars with a saved rating.</p>
              <div className="rating rating-score" />
            </div>
          </div>
        </div>
        {/* /Rating */}
        {/* Rating */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Max Number</h5>
            </div>
            <div className="card-body card-buttons">
              <p>Change the max numbers of stars</p>
              <div className="rating rating-number" />
            </div>
          </div>
        </div>
        {/* /Rating */}
        {/* Rating */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Read Only</h5>
            </div>
            <div className="card-body card-buttons">
              <p>Prevent users from voting</p>
              <div className="rating rating-read-only2" />
            </div>
          </div>
        </div>
        {/* /Rating */}
        {/* Rating */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Half Rating</h5>
            </div>
            <div className="card-body card-buttons">
              <p>You can represent a float score as a half star icon.</p>
              <div className="rating rating-half-enable" />
            </div>
          </div>
        </div>
        {/* /Rating */}
        {/* Rating */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Custom Icon</h5>
            </div>
            <div className="card-body card-buttons">
              <p>Use any icon you want.</p>
              <div className="rating rating-custom-icon" />
            </div>
          </div>
        </div>
        {/* /Rating */}
      </div>
    </div>
  </div>
  
  )
}

export default Rating
