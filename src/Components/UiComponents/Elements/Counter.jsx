import React from 'react'

function Counter() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Counter</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body card-buttons">
              <h5 className="card-title">Clients</h5>
              <h6 className="counter">3,000</h6>
            </div>
          </div>
        </div>
        {/* /Counter */}
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body card-buttons">
              <h5 className="card-title">Total Sales</h5>
              <h6 className="counter">10,000</h6>
            </div>
          </div>
        </div>
        {/* /Counter */}
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body card-buttons">
              <h5 className="card-title">Total Projects</h5>
              <h6 className="counter">15,000</h6>
            </div>
          </div>
        </div>
        {/* /Counter */}
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Count Down</h5>
            </div>
            <div className="card-body card-buttons">
              <h6 className="card-text">Time Count from 3</h6>
              <span id="timer-countdown" />
            </div>
          </div>
        </div>
        {/* /Counter */}
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Count Up</h5>
            </div>
            <div className="card-body card-buttons">
              <h6 className="card-text">Time Counting From 0</h6>
              <span id="timer-countup" />
            </div>
          </div>
        </div>
        {/* /Counter */}
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Count Inbetween</h5>
            </div>
            <div className="card-body card-buttons">
              <h6 className="card-text">Time counting from 30 to 20</h6>
              <span id="timer-countinbetween" />
            </div>
          </div>
        </div>
        {/* /Counter */}
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Count Callback</h5>
            </div>
            <div className="card-body card-buttons">
              <h6 className="card-text">
                Count from 10 to 0 and calls timer end callback
              </h6>
              <span id="timer-countercallback" />
            </div>
          </div>
        </div>
        {/* /Counter */}
        {/* Counter */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Custom Output</h5>
            </div>
            <div className="card-body card-buttons">
              <h6 className="card-text">Changed output pattern</h6>
              <span id="timer-outputpattern" />
            </div>
          </div>
        </div>
        {/* /Counter */}
      </div>
    </div>
  </div>
  
  )
}

export default Counter
