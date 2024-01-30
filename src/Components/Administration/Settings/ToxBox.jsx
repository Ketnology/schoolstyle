import React from 'react'

function ToxBox() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">ToxBox Setting</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <form>
          <div className="input-block mb-3">
            <label className="col-form-label">
              ApiKey <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue="xxxxxxxx"
              readOnly=""
            />
          </div>
          <div className="input-block mb-3">
            <label className="col-form-label">
              ApiSecret <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue="xxxxxxxxxxxxxxxxxxxxxxxxxx"
              readOnly=""
            />
          </div>
          <div className="submit-section">
            <button className="btn btn-primary submit-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Page Content */}
</div>

  )
}

export default ToxBox
