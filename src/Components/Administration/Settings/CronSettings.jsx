import React from 'react'

function CronSettings() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Cron Setting</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <form>
          <div className="input-block mb-3">
            <label className="col-form-label">
              Cron Key <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" defaultValue="" />
          </div>
          <div className="input-block mb-3">
            <label className="col-form-label">
              Auto Backup Database <span className="text-danger">*</span>
            </label>
            <br />
            <label className="switch">
              <input type="hidden" defaultValue="off" name="auto_backup_db" />
              <input
                type="checkbox"
                defaultChecked="checked"
                name="auto_backup_db"
              />
              <span />
            </label>
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

export default CronSettings
