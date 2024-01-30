import React from 'react'

function ApexChart() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Charts</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Apex Simple</h5>
            </div>
            <div className="card-body">
              <div id="s-line" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Area Chart</h5>
            </div>
            <div className="card-body">
              <div id="s-line-area" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Column Chart</h5>
            </div>
            <div className="card-body">
              <div id="s-col" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Column Stacked Chart</h5>
            </div>
            <div className="card-body">
              <div id="s-col-stacked" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Bar Chart</h5>
            </div>
            <div className="card-body">
              <div id="s-bar" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Mixed Chart</h5>
            </div>
            <div className="card-body">
              <div id="mixed-chart" />
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
              <div id="donut-chart" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Radial Chart</h5>
            </div>
            <div className="card-body">
              <div id="radial-chart" />
            </div>
          </div>
        </div>
        {/* /Chart */}
      </div>
    </div>
  </div>
  
  )
}

export default ApexChart
