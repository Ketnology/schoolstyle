import React from 'react'

function InvoiceSettings() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Invoice Settings</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <form>
          <div className="input-block mb-3 row">
            <label className="col-lg-3 col-form-label">Invoice prefix</label>
            <div className="col-lg-9">
              <input type="text" defaultValue="INV" className="form-control" />
            </div>
          </div>
          <div className="input-block mb-3 row">
            <label className="col-lg-3 col-form-label">Invoice Logo</label>
            <div className="col-lg-7">
              <input type="file" className="form-control" />
              <span className="form-text text-muted">
                Recommended image size is 200px x 40px
              </span>
            </div>
            <div className="col-lg-2">
              <div className="img-thumbnail float-end">
                <img
                  src="assets/img/logo3.png"
                  className="img-fluid"
                  alt="Logo"
                  width={140}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="submit-section">
            <button className="btn btn-primary submit-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Page Content */}
</div>

  )
}

export default InvoiceSettings
