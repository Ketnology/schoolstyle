import React from 'react'

function LeavesEmployee() {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper">
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Leaves</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Leaves</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_leave"
              >
                <i className="fa-solid fa-plus" /> Add Leave
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Leave Statistics */}
        <div className="row">
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Annual Leave</h6>
              <h4>12</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Medical Leave</h6>
              <h4>3</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Other Leave</h6>
              <h4>4</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Remaining Leave</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>
        {/* /Leave Statistics */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table leave-employee-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Leave Type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>No of Days</th>
                    <th>Reason</th>
                    <th className="text-center">Status</th>
                    <th>Approved by</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Casual Leave</td>
                    <td>8 Mar 2019</td>
                    <td>9 Mar 2019</td>
                    <td>2 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-purple" />{" "}
                          New
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
                          >
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Medical Leave</td>
                    <td>27 Feb 2019</td>
                    <td>27 Feb 2019</td>
                    <td>1 day</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Approved
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
                          >
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>LOP</td>
                    <td>24 Feb 2019</td>
                    <td>25 Feb 2019</td>
                    <td>2 days</td>
                    <td>Personnal</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Approved
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
                          >
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Paternity Leave</td>
                    <td>13 Feb 2019</td>
                    <td>17 Feb 2019</td>
                    <td>5 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Declined
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
                          >
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Casual Leave</td>
                    <td>30 Jan 2019</td>
                    <td>30 Jan 2019</td>
                    <td>Second Half</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-purple" />{" "}
                          New
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
                          >
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Hospitalisation</td>
                    <td>15 Jan 2019</td>
                    <td>25 Jan 2019</td>
                    <td>10 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Approved
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
                          >
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Casual Leave</td>
                    <td>13 Jan 2019</td>
                    <td>14 Jan 2019</td>
                    <td>2 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Approved
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
                          >
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Casual Leave</td>
                    <td>10 Jan 2019</td>
                    <td>10 Jan 2019</td>
                    <td>First Half</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Declined
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
                            data-bs-target="#edit_leave"
                          >
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
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
      {/* Add Leave Modal */}
      <div id="add_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
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
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                    <option>Medical Leave</option>
                    <option>Loss of Pay</option>
                  </select>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" type="text" />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" type="text" />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" readOnly="" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly=""
                    defaultValue={12}
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Reason <span className="text-danger">*</span>
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
      {/* /Add Leave Modal */}
      {/* Edit Leave Modal */}
      <div id="edit_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave</h5>
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
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                  </select>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      defaultValue="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      defaultValue="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly=""
                    type="text"
                    defaultValue={2}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly=""
                    defaultValue={12}
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={"Going to hospital"}
                  />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Leave Modal */}
      {/* Delete Leave Modal */}
      <div className="modal custom-modal fade" id="delete_approve" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Leave</h3>
                <p>Are you sure want to Cancel this leave?</p>
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
      {/* /Delete Leave Modal */}
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default LeavesEmployee
