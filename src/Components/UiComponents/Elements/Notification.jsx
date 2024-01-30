import React from 'react'

function Notification() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid pb-0">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Notification</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Alert */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Alert</div>
          </div>
          <div className="card-body">
            <a
              href="javascript: void(0);"
              id="alert"
              className="btn btn-primary waves-effect waves-light"
            >
              Click me
            </a>
          </div>
        </div>
      </div>
      {/* /Alert */}
      {/* Alert */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Confirm</div>
          </div>
          <div className="card-body">
            <a
              href="javascript: void(0);"
              id="alert-confirm"
              className="btn btn-primary waves-effect waves-light"
            >
              Click me
            </a>
          </div>
        </div>
      </div>
      {/* /Alert */}
      {/* Alert */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Prompt</div>
          </div>
          <div className="card-body">
            <a
              href="javascript: void(0);"
              id="alert-prompt"
              className="btn btn-primary waves-effect waves-light"
            >
              Click me
            </a>
          </div>
        </div>
      </div>
      {/* /Alert */}
      {/* Alert */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Success Alert</div>
          </div>
          <div className="card-body">
            <a
              href="javascript: void(0);"
              id="alert-success"
              className="btn btn-primary btn-sm waves-effect waves-light"
            >
              Click me
            </a>
          </div>
        </div>
      </div>
      {/* /Alert */}
      {/* Alert */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Error Alert</div>
          </div>
          <div className="card-body">
            <a
              href="javascript: void(0);"
              id="alert-error"
              className="btn btn-primary btn-sm waves-effect waves-light"
            >
              Click me
            </a>
          </div>
        </div>
      </div>
      {/* /Alert */}
      {/* Alert */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Warnng Alert</div>
          </div>
          <div className="card-body">
            <a
              href="javascript: void(0);"
              id="alert-warning"
              className="btn btn-primary btn-sm waves-effect waves-light"
            >
              Click me
            </a>
          </div>
        </div>
      </div>
      {/* /Alert */}
    </div>
  </div>
</div>

  )
}

export default Notification
