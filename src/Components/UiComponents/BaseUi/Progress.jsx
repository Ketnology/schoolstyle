import React from 'react'

function Progress() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Progress</h5>
      </div>
    </div>
    {/* /Page Header */}
    {/* Progress */}
    <div className="progress-example card bg-white">
      <div className="card-header">
        <h5 className="card-title">Large Progress Bars</h5>
      </div>
      <div className="card-body pb-0">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div className="progress progress-lg">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-lg">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-lg">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-lg">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-lg">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress progress-lg">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-lg">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-lg">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-lg">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-lg">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="progress-example card bg-white">
      <div className="card-header">
        <h5 className="card-title">Default Progress Bars</h5>
      </div>
      <div className="card-body pb-0">
        <div className="row">
          <div className="col-md-6">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="progress-example card bg-white">
      <div className="card-header">
        <h5 className="card-title">Medium Progress Bars</h5>
      </div>
      <div className="card-body pb-0">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div className="progress progress-md">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-md">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-md">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-md">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-md">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress progress-md">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-md">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-md">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-md">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-md">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="progress-example card bg-white">
      <div className="card-header">
        <h5 className="card-title">Small Progress Bars</h5>
      </div>
      <div className="card-body pb-0">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div className="progress progress-sm">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-sm">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-sm">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-sm">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-sm">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress progress-sm">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-sm">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="progress-example card bg-white mb-0">
      <div className="card-header">
        <h5 className="card-title">Extra Small Progress Bars</h5>
      </div>
      <div className="card-body pb-0">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div className="progress progress-xs">
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-xs">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-xs">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-xs">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="progress progress-xs">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress progress-xs">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-xs">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-xs">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-xs">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress progress-xs">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Progress */}
  </div>
</div>

  )
}

export default Progress
