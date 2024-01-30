import React from 'react'

function Button() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Buttons</h5>
        </div>
      </div>
      {/* /Page Header */}
      {/* Buttons */}
      <div className="card card-buttons">
        <div className="card-body">
          <h5 className="card-title">Default Button</h5>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
          <hr />
          <h5 className="card-title">Button Sizes</h5>
          <p>
            <button type="button" className="btn btn-primary btn-lg">
              Primary
            </button>
            <button type="button" className="btn btn-secondary btn-lg">
              Secondary
            </button>
            <button type="button" className="btn btn-success btn-lg">
              Success
            </button>
            <button type="button" className="btn btn-danger btn-lg">
              Danger
            </button>
            <button type="button" className="btn btn-warning btn-lg">
              Warning
            </button>
            <button type="button" className="btn btn-info btn-lg">
              Info
            </button>
            <button type="button" className="btn btn-light btn-lg">
              Light
            </button>
            <button type="button" className="btn btn-dark btn-lg">
              Dark
            </button>
          </p>
          <p>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
            <button type="button" className="btn btn-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-success">
              Success
            </button>
            <button type="button" className="btn btn-danger">
              Danger
            </button>
            <button type="button" className="btn btn-warning">
              Warning
            </button>
            <button type="button" className="btn btn-info">
              Info
            </button>
            <button type="button" className="btn btn-light">
              Light
            </button>
            <button type="button" className="btn btn-dark">
              Dark
            </button>
          </p>
          <p>
            <button type="button" className="btn btn-primary btn-sm">
              Primary
            </button>
            <button type="button" className="btn btn-secondary btn-sm">
              Secondary
            </button>
            <button type="button" className="btn btn-success btn-sm">
              Success
            </button>
            <button type="button" className="btn btn-danger btn-sm">
              Danger
            </button>
            <button type="button" className="btn btn-warning btn-sm">
              Warning
            </button>
            <button type="button" className="btn btn-info btn-sm">
              Info
            </button>
            <button type="button" className="btn btn-light btn-sm">
              Light
            </button>
            <button type="button" className="btn btn-dark btn-sm">
              Dark
            </button>
          </p>
        </div>
      </div>
      {/* Rounded Button */}
      <div className="card card-buttons">
        <div className="card-header">
          <h5 className="card-title">Rounded Button</h5>
          <p className="card-text">
            use <code>.btn-rounded</code> in class <code>.btn</code> class to get
            Rounded button
          </p>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-rounded btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-rounded btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-rounded btn-success">
            Success
          </button>
          <button type="button" className="btn btn-rounded btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-rounded btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-rounded btn-info">
            Info
          </button>
          <button type="button" className="btn btn-rounded btn-light">
            Light
          </button>
          <button type="button" className="btn btn-rounded btn-dark">
            Dark
          </button>
          <hr />
          <p>
            use <code>.btn-rounded</code> in class <code>.btn-outline-*</code>{" "}
            class to get Rounded Outline button
          </p>
          <button type="button" className="btn btn-rounded btn-outline-primary">
            Primary
          </button>
          <button type="button" className="btn btn-rounded btn-outline-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-rounded btn-outline-success">
            Success
          </button>
          <button type="button" className="btn btn-rounded btn-outline-danger">
            Danger
          </button>
          <button type="button" className="btn btn-rounded btn-outline-warning">
            Warning
          </button>
          <button type="button" className="btn btn-rounded btn-outline-info">
            Info
          </button>
          <button type="button" className="btn btn-rounded btn-outline-light">
            Light
          </button>
          <button type="button" className="btn btn-rounded btn-outline-dark">
            Dark
          </button>
        </div>
      </div>
      {/* /Rounded Button */}
      {/* Outline Buttons */}
      <div className="card card-buttons">
        <div className="card-header">
          <h5 className="card-title">Outline Buttons</h5>
          <p className="card-text">
            Use <code>.btn-outline-*</code> class for outline buttons.
          </p>
        </div>
        <div className="card-body">
          <div className="row row-sm align-items-center">
            <div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-primary">
                Primary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-secondary">
                Secondary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-success">
                Success
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-warning">
                Warning
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-danger">
                Danger
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-info">
                Info
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-light">
                Light
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-dark">
                Dark
              </button>
            </div>
          </div>
          <div className="row row-sm align-items-center mt-3">
            <div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn w-100 btn-outline-primary active"
              >
                Primary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn w-100 btn-outline-secondary active"
              >
                Secondary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn w-100 btn-outline-success active"
              >
                Success
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn w-100 btn-outline-warning active"
              >
                Warning
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn w-100 btn-outline-danger active"
              >
                Danger
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-info active">
                Info
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn w-100 btn-outline-light active"
              >
                Light
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button type="button" className="btn w-100 btn-outline-dark active">
                Dark
              </button>
            </div>
          </div>
          <div className="row row-sm align-items-center mt-3">
            <div className="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-primary"
              >
                Primary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-secondary"
              >
                Secondary
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-success"
              >
                Success
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-warning"
              >
                Warning
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-danger"
              >
                Danger
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-info"
              >
                Info
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-light"
              >
                Light
              </button>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                disabled=""
                type="button"
                className="btn w-100 btn-outline-dark"
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Outline Buttons */}
      {/* Progress Button */}
      <div className="card card-buttons mb-0">
        <div className="card-header">
          <h5 className="card-title mb-0">Progress Button</h5>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-primary">
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            />
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            />
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            />
            Success
          </button>
          <button type="button" className="btn btn-danger">
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            />
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            />
            Warning
          </button>
          <button type="button" className="btn btn-info">
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            />
            Info
          </button>
          <button type="button" className="btn btn-dark">
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
            />
            Dark
          </button>
        </div>
      </div>
      {/* /Progress Button */}
    </div>
  </div>
  
  )
}

export default Button
