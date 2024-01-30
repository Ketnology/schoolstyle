import React from 'react'

function OverTime() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Overtime</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Overtime</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_overtime"
            >
              <i className="fa-solid fa-plus" /> Add Overtime
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Overtime Statistics */}
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="stats-info">
            <h6>Overtime Employee</h6>
            <h4>
              12 <span>this month</span>
            </h4>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="stats-info">
            <h6>Overtime Hours</h6>
            <h4>
              118 <span>this month</span>
            </h4>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="stats-info">
            <h6>Pending Request</h6>
            <h4>23</h4>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="stats-info">
            <h6>Rejected</h6>
            <h4>5</h4>
          </div>
        </div>
      </div>
      {/* /Overtime Statistics */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table leave-employee-table mb-0 datatable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>OT Date</th>
                  <th className="text-center">OT Hours</th>
                  <th>OT Type</th>
                  <th>Description</th>
                  <th className="text-center">Status</th>
                  <th>Approved by</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <h2 className="table-avatar blue-link">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">John Doe</a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td className="text-center">2</td>
                  <td>Normal day OT 1.5x</td>
                  <td>Lorem ipsum dollar</td>
                  <td className="text-center">
                    <div className="action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded"
                        href="javascript:void(0);"
                      >
                        <i className="fa-regular fa-circle-dot text-purple" /> New
                      </a>
                    </div>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar avatar-xs">
                        <img
                          src="assets/img/profiles/avatar-09.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Richard Miles</a>
                    </h2>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_overtime"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_overtime"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* Add Overtime Modal */}
    <div id="add_overtime" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Overtime</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Select Employee <span className="text-danger">*</span>
                </label>
                <select className="select">
                  <option>-</option>
                  <option>John Doe</option>
                  <option>Richard Miles</option>
                  <option>John Smith</option>
                </select>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overtime Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input className="form-control datetimepicker" type="text" />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overtime Hours <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <textarea rows={4} className="form-control" defaultValue={""} />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Overtime Modal */}
    {/* Edit Overtime Modal */}
    <div id="edit_overtime" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Overtime</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Select Employee <span className="text-danger">*</span>
                </label>
                <select className="select">
                  <option>-</option>
                  <option>John Doe</option>
                  <option>Richard Miles</option>
                  <option>John Smith</option>
                </select>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overtime Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input className="form-control datetimepicker" type="text" />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overtime Hours <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <textarea rows={4} className="form-control" defaultValue={""} />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Overtime Modal */}
    {/* Delete Overtime Modal */}
    <div className="modal custom-modal fade" id="delete_overtime" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Overtime</h3>
              <p>Are you sure want to Cancel this?</p>
            </div>
            <div className="modal-btn delete-action">
              <div className="row">
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary continue-btn"
                  >
                    Delete
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    className="btn btn-primary cancel-btn"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Delete Overtime Modal */}
  </div>
  
  )
}

export default OverTime
