import React from 'react'
import { SettingsLink } from '../../../Styling/ExternalLink'

function Localization() {
  return (
      <>
      <SettingsLink/>
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Basic Settings</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Default Country</label>
                  <select className="select">
                    <option selected="selected">USA</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Date Format</label>
                  <select className="select">
                    <option value="d/m/Y">15/05/2016</option>
                    <option value="d.m.Y">15.05.2016</option>
                    <option value="d-m-Y">15-05-2016</option>
                    <option value="m/d/Y">05/15/2016</option>
                    <option value="Y/m/d">2016/05/15</option>
                    <option value="Y-m-d">2016-05-15</option>
                    <option value="M d Y">May 15 2016</option>
                    <option selected="selected" value="d M Y">
                      15 May 2016
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Timezone</label>
                  <select className="select">
                    <option>(UTC +5:30) Antarctica/Palmer</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Default Language</label>
                  <select className="select">
                    <option selected="selected">English</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Currency Code</label>
                  <select className="select">
                    <option selected="selected">USD</option>
                    <option>Pound</option>
                    <option>EURO</option>
                    <option>Ringgit</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Currency Symbol</label>
                  <input
                    className="form-control"
                    readOnly=""
                    defaultValue="$"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </div>
   </>
  
  )
}

export default Localization
