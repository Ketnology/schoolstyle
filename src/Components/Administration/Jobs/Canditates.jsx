import React from 'react'

function Canditates() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Candidates List</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item">Jobs</li>
            <li className="breadcrumb-item active">Candidates List</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add_employee"
            className="btn add-btn"
          >
            {" "}
            Add Candidates
          </a>
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
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Created Date</th>
                <th className="text-center">Action</th>
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
                    <a href="profile">John Doe </a>
                  </h2>
                </td>
                <td>9876543210</td>
                <td>
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="32585d5a5c565d5772574a535f425e571c515d5f"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>1 Jan 2013</td>
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
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_job"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
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
                    <a href="profile">Richard Miles </a>
                  </h2>
                </td>
                <td>9876543210</td>
                <td>
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="b3c1dad0dbd2c1d7dedadfd6c0f3d6cbd2dec3dfd69dd0dcde"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>18 Mar 2014</td>
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
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_job"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
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
                    <a href="profile">John Smith </a>
                  </h2>
                </td>
                <td>9876543210</td>
                <td>
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="c7ada8afa9b4aaaeb3af87a2bfa6aab7aba2e9a4a8aa"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>1 Apr 2014</td>
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
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_job"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
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
  {/* Add Employee Modal */}
  <div id="add_employee" className="modal custom-modal fade" role="dialog">
    <div
      className="modal-dialog modal-dialog-centered modal-lg"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Candidates</h5>
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
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Last Name</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="email" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Employee ID <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Created Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Phone </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Employee Modal */}
  {/* Edit Job Modal */}
  <div id="edit_job" className="modal custom-modal fade" role="dialog">
    <div
      className="modal-dialog modal-dialog-centered modal-lg"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Candidates</h5>
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
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Last Name</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="email" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Employee ID <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Created Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Phone </label>
                  <input className="form-control" type="text" />
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

export default Canditates
