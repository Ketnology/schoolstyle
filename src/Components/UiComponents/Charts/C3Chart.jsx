import React from 'react'

function C3Chart() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid pb-0">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Flot Chart</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Bar Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-bar-stacked" />
          </div>
        </div>
      </div>
      {/* /Chart */}
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Multiple Bar Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-bar" />
          </div>
        </div>
      </div>
      {/* /Chart */}
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Horizontal Bar Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-bar-rotated" />
          </div>
        </div>
      </div>
      {/* /Chart */}
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Line Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-sracked" />
          </div>
        </div>
      </div>
      {/* /Chart */}
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Line Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-spline-rotated" />
          </div>
        </div>
      </div>
      {/* /Chart */}
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Line Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-area-spline-sracked" />
          </div>
        </div>
      </div>
      {/* /Chart */}
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Pie Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-pie" />
          </div>
        </div>
      </div>
      {/* /Chart */}
      {/* Chart */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Donut Chart</h5>
          </div>
          <div className="card-body">
            <div id="chart-donut" />
          </div>
        </div>
      </div>
      {/* /Chart */}
    </div>
  </div>
</div>

  )
}

export default C3Chart
