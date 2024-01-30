import React from 'react'

function Tooltip() {
  return (
    <div className="page-wrapper">
  <div className="content container-fluid pb-0">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Tooltip</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Tooltip */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Html Element</h5>
          </div>
          <div className="card-body card-buttons">
            <div className="popover-list">
              <button
                className="example-popover btn btn-primary mb-0"
                type="button"
                data-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Popover title"
              >
                Hover Me
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Tooltip */}
      {/* Popover */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Direction Tooltip</h5>
          </div>
          <div className="card-body card-buttons">
            <div className="tooltip-list">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
              >
                Tooltip on top
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Tooltip on right"
              >
                Tooltip on right
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip on bottom"
              >
                Tooltip on bottom
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Tooltip on left"
              >
                Tooltip on left
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Popover */}
      {/* Tooltip */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Html Element</h5>
          </div>
          <div className="card-body card-buttons">
            <div className="popover-list">
              <button
                type="button"
                className="btn btn-primary mb-0"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
              >
                Tooltip with HTML
              </button>
              <button
                type="button"
                className="btn btn-primary mb-0"
                data-bs-toggle="tooltip"
                data-bs-trigger="click"
                data-bs-html="true"
                data-bs-placement="bottom"
                title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
              >
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Tooltip */}
    </div>
  </div>
</div>

  )
}

export default Tooltip
