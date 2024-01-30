import React from 'react'

function MorrisChart() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Morris Chart</h5>
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
              <div id="morrisBar1" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Stacked Bar Chart </h5>
            </div>
            <div className="card-body">
              <div id="morrisBar3" />
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
              <div id="morrisLine1" />
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
              <div id="morrisArea1" />
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
              <div id="morrisBar6" />
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
              <div id="morrisBar7" />
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
              <div id="morrisDonut1" />
            </div>
          </div>
        </div>
        {/* /Chart */}
      </div>
    </div>
  </div>
  
  )
}

export default MorrisChart
