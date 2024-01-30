import React from 'react'

function Charts() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header pb-0">
          <h5>Chartjs</h5>
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
              <div>
                <canvas id="chartBar1" className="h-300" />
              </div>
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Transparency </h5>
            </div>
            <div className="card-body">
              <div>
                <canvas id="chartBar2" className="h-300" />
              </div>
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Gradient Bar Chart</h5>
            </div>
            <div className="card-body">
              <div>
                <canvas id="chartBar3" className="h-300" />
              </div>
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
              <div className="chartjs-wrapper-demo">
                <canvas id="chartBar4" className="h-300" />
              </div>
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Horizontal Bar Chart Style2</h5>
            </div>
            <div className="card-body">
              <div className="chartjs-wrapper-demo">
                <canvas id="chartBar5" className="h-300" />
              </div>
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Vertical Stacked Bar Chart</h5>
            </div>
            <div className="card-body">
              <div className="chartjs-wrapper-demo">
                <canvas id="chartStacked1" className="h-300" />
              </div>
            </div>
          </div>
        </div>
        {/* /Chart */}
        {/* Chart */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Horizontal Stacked Bar Chart</h5>
            </div>
            <div className="card-body">
              <div className="chartjs-wrapper-demo">
                <canvas id="chartStacked2" className="h-300" />
              </div>
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
              <div className="chartjs-wrapper-demo">
                <canvas id="chartLine1" className="h-300" />
              </div>
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
              <div className="chartjs-wrapper-demo">
                <canvas id="chartPie" className="h-300" />
              </div>
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
              <div className="chartjs-wrapper-demo">
                <canvas id="chartDonut" className="h-300" />
              </div>
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
              <div className="chartjs-wrapper-demo">
                <canvas id="chartArea1" className="h-300" />
              </div>
            </div>
          </div>
        </div>
        {/* /Chart */}
      </div>
    </div>
  </div>
  
  )
}

export default Charts
