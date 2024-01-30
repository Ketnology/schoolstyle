import React from 'react'

function FormInputGroups() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col">
            <h3 className="page-title">Input Groups</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Input Groups</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Basic Examples</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">Group Left</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">Group Right</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        @example.com
                      </span>
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">URL Example</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text">https://</span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">
                    Group with Price
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input type="text" className="form-control" />
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row mb-0">
                  <label className="col-form-label col-lg-2">
                    Group with Price (Left)
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Sizing</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">
                    Input Group Large
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group input-group-lg">
                      <span className="input-group-text" id="sizing-addon1">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-describedby="sizing-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">
                    Input Group Default
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text" id="sizing-addon2">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-describedby="sizing-addon2"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row mb-0">
                  <label className="col-form-label col-lg-2">
                    Input Group Small
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text" id="sizing-addon3">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-describedby="sizing-addon3"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Checkbox and Radio Addons</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">Checkbox</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row mb-0">
                  <label className="col-form-label col-lg-2">Radio</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input type="radio" />
                      </span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Multiple Addons</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">
                    Radio and Text Addons
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                        </label>
                      </span>
                      <span className="input-group-text">$</span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row mb-0">
                  <label className="col-form-label col-lg-2">Two Addons</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-header">
              <h4 className="card-title mb-0">Buttons with dropdowns</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="input-block mb-3 row">
                  <label className="col-form-label col-lg-2">
                    Radio and Text Addons
                  </label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <button
                        type="button"
                        className="btn btn-white dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Action
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div role="separator" className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Left dropdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3 row mb-0">
                  <label className="col-form-label col-lg-2">Two Addons</label>
                  <div className="col-lg-10">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Right dropdown"
                      />
                      <button
                        type="button"
                        className="btn btn-white dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Action
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div role="separator" className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default FormInputGroups
