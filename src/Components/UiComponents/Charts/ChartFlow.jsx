import React from 'react'

function ChartFlow() {
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
              <div className="h-250" id="flotBar1" />
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
              <div className="h-250" id="flotBar2" />
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
              <div className="h-250" id="flotLine1" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Line ChartPOints</h5>
            </div>
            <div className="card-body">
              <div className="h-250" id="flotLine2" />
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
              <div className="h-250" id="flotArea1" />
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Area Chart Points</h5>
            </div>
            <div className="card-body">
              <div className="h-250" id="flotArea2" />
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
              <div className="h-250" id="flotPie1" />
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
              <div className="h-250" id="flotPie2" />
            </div>
          </div>
        </div>
        {/* /Chart */}
      </div>
    </div>
  </div>
  
  )
}

export default ChartFlow
