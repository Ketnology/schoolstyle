import React from 'react'

function ManageResume() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-12">
            <h3 className="page-title">Manage Resumes</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item">Jobs</li>
              <li className="breadcrumb-item active">Manage Resumes</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Start Date</th>
                  <th>Expire Date</th>
                  <th className="text-center">Job Type</th>
                  <th className="text-center">Status</th>
                  <th>Resume</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        John Doe <span>Web Designer</span>
                      </a>
                    </h2>
                  </td>
                  <td>
                    <a href="job-details">Web Developer</a>
                  </td>
                  <td>Development</td>
                  <td>3 Mar 2019</td>
                  <td>31 May 2019</td>
                  <td className="text-center">
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Full Time
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-info" />{" "}
                          Full Time
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Part Time
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Internship
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-warning" />{" "}
                          Temporary
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-warning" />{" "}
                          Other
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Open
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-info" />{" "}
                          Open
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Closed
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Cancelled
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fa-solid fa-download me-1" /> Download
                    </a>
                  </td>
                  <td className="text-center">
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
                          href="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_job"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          href="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_job"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-09.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Richard Miles <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>
                    <a href="job-details">Web Designer</a>
                  </td>
                  <td>Designing</td>
                  <td>3 Mar 2019</td>
                  <td>31 May 2019</td>
                  <td className="text-center">
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Part Time
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-info" />{" "}
                          Full Time
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Part Time
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Internship
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-warning" />{" "}
                          Temporary
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-warning" />{" "}
                          Other
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Closed
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-info" />{" "}
                          Open
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Closed
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Cancelled
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fa-solid fa-download me-1" /> Download
                    </a>
                  </td>
                  <td className="text-center">
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
                          href="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_job"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          href="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_job"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-10.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        John Smith <span>Android Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>
                    <a href="job-details">Android Developer</a>
                  </td>
                  <td>Android</td>
                  <td>3 Mar 2019</td>
                  <td>31 May 2019</td>
                  <td className="text-center">
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Internship
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-info" />{" "}
                          Full Time
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Part Time
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Internship
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-warning" />{" "}
                          Temporary
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-warning" />{" "}
                          Other
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Cancelled
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-info" />{" "}
                          Open
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Closed
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Cancelled
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fa-solid fa-download me-1" /> Download
                    </a>
                  </td>
                  <td className="text-center">
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
                          href="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_job"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          href="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_job"
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
    {/* Edit Job Modal */}
    <div id="edit_job" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Job</h5>
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
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Job Title</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Web Developer"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Department</label>
                    <select className="select">
                      <option>-</option>
                      <option selected="">Web Development</option>
                      <option>Application Development</option>
                      <option>IT Management</option>
                      <option>Accounts Management</option>
                      <option>Support Management</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Job Location</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="California"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">No of Vacancies</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={5}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Experience</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="2 Years"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Age</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="-"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Salary From</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="32k"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Salary To</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="38k"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Job Type</label>
                    <select className="select">
                      <option selected="">Full Time</option>
                      <option>Part Time</option>
                      <option>Internship</option>
                      <option>Temporary</option>
                      <option>Remote</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>
                    <select className="select">
                      <option selected="">Open</option>
                      <option>Closed</option>
                      <option>Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Start Date</label>
                    <input
                      type="text"
                      className="form-control datetimepicker"
                      defaultValue="3 Mar 2019"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Expired Date</label>
                    <input
                      type="text"
                      className="form-control datetimepicker"
                      defaultValue="31 May 2019"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description</label>
                    <textarea className="form-control" defaultValue={""} />
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
    </div>
    {/* /Edit Job Modal */}
    {/* Delete Job Modal */}
    <div className="modal custom-modal fade" id="delete_job" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete</h3>
              <p>Are you sure want to delete?</p>
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
    {/* /Delete Job Modal */}
  </div>
  
  )
}

export default ManageResume
