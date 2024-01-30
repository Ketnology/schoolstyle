import React from 'react'

function Toast() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Toastr</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card" id="types">
            <div className="card-header">
              <h4 className="card-title">Types</h4>
            </div>
            <div className="card-body card-buttons">
              <button
                type="button"
                className="btn btn-outline-success me-1 mb-1"
                id="type-success"
              >
                Success
              </button>
              <button
                type="button"
                className="btn btn-outline-info me-1 mb-1"
                id="type-info"
              >
                Info
              </button>
              <button
                type="button"
                className="btn btn-outline-warning me-1 mb-1"
                id="type-warning"
              >
                Warning
              </button>
              <button
                type="button"
                className="btn btn-outline-danger me-1 mb-1"
                id="type-error"
              >
                Error
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Position</h4>
            </div>
            <div className="card-body card-buttons">
              <div className="row">
                <div className="col-sm-12 mb-4">
                  <h5 className="mb-3">Top Positions</h5>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-top-left"
                  >
                    Top Left
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-top-center"
                  >
                    Top Center
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-top-right"
                  >
                    Top Right
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-top-full"
                  >
                    Top Full Width
                  </button>
                </div>
                <div className="col-sm-12">
                  <h5 className="mb-3">Bottom Positions</h5>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-bottom-left"
                  >
                    Bottom Left
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-bottom-center"
                  >
                    Bottom Center
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-bottom-right"
                  >
                    Bottom Right
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1 mb-1"
                    id="position-bottom-full"
                  >
                    Bottom Full Width
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Options</h4>
            </div>
            <div className="card-body card-buttons">
              <button
                type="button"
                className="btn btn-outline-success me-1 mb-1"
                id="text-notification"
              >
                Notifications
              </button>
              <button
                type="button"
                className="btn btn-outline-success me-1 mb-1"
                id="close-button"
              >
                Close Button
              </button>
              <button
                type="button"
                className="btn btn-outline-success me-1 mb-1"
                id="progress-bar"
              >
                Progress Bar
              </button>
              <button
                type="button"
                className="btn btn-outline-success me-1 mb-1"
                id="clear-toast-btn"
              >
                Clear Toast
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Clear Toasts</h4>
            </div>
            <div className="card-body card-buttons">
              <div className="row mt-1">
                <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
                  <h5>Remove</h5>
                  <p>
                    Immediately remove current toasts without using animation.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-info me-1 mb-1"
                    id="show-remove-toast"
                  >
                    Show Toast
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger me-1 mb-1"
                    id="remove-toast"
                  >
                    Remove Toast
                  </button>
                </div>
                <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
                  <h5>Clear</h5>
                  <p>Remove current toasts using animation.</p>
                  <button
                    type="button"
                    className="btn btn-outline-info me-1 mb-1"
                    id="show-clear-toast"
                  >
                    Show Toast
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger me-1 mb-1"
                    id="clear-toast"
                  >
                    Clear Toast
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Duration &amp; Timeout</h4>
            </div>
            <div className="card-body card-buttons">
              <p>
                you can use options like <code>showDuration</code>,{" "}
                <code>hideDuration</code>, <code>timeout</code> for your toasts.
                To create a sticky toast set the <code>timeout</code> to{" "}
                <code>0</code>
              </p>
              <button
                type="button"
                className="btn btn-outline-info me-1 mb-1"
                id="fast-duration"
              >
                Show .5s
              </button>
              <button
                type="button"
                className="btn btn-outline-info me-1 mb-1"
                id="slow-duration"
              >
                Hide 3s
              </button>
              <button
                type="button"
                className="btn btn-outline-info me-1 mb-1"
                id="timeout"
              >
                Timeout 5s
              </button>
              <button
                type="button"
                className="btn btn-outline-info me-1 mb-1"
                id="sticky"
              >
                Sticky Toast
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Toast
