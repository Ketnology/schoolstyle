import React from 'react'

function Termination() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Termination</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Termination</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <a
            href="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#add_termination"
          >
            <i className="fa-solid fa-plus" /> Add Termination
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
                <th>Terminated Employee </th>
                <th>Department</th>
                <th>Termination Type </th>
                <th>Termination Date </th>
                <th>Reason</th>
                <th>Notice Date </th>
                <th className="text-end">Action</th>
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
                <td>Web Development</td>
                <td>Misconduct</td>
                <td>28 Feb 2019</td>
                <td>Lorem Ipsum Dollar</td>
                <td>28 Feb 2019</td>
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
                        data-bs-target="#edit_termination"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_termination"
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
  {/* Add Termination Modal */}
  <div id="add_termination" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Termination</h5>
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
                Terminated Employee <span className="text-danger">*</span>
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Termination Type <span className="text-danger">*</span>
              </label>
              <div className="add-group-btn">
                <select className="select">
                  <option>Misconduct</option>
                  <option>Others</option>
                </select>
                <a className="btn btn-primary" href="javascript:void(0);">
                  <i className="fa-solid fa-plus" /> Add
                </a>
              </div>
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Termination Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input type="text" className="form-control datetimepicker" />
              </div>
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Reason <span className="text-danger">*</span>
              </label>
              <textarea className="form-control" rows={4} defaultValue={""} />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Notice Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input type="text" className="form-control datetimepicker" />
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
  {/* /Add Termination Modal */}
  {/* Edit Termination Modal */}
  <div id="edit_termination" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Termination</h5>
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
                Terminated Employee <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="John Doe"
              />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Termination Type <span className="text-danger">*</span>
              </label>
              <div className="add-group-btn">
                <select className="select">
                  <option>Misconduct</option>
                  <option>Others</option>
                </select>
                <a className="btn btn-primary" href="javascript:void(0);">
                  <i className="fa-solid fa-plus" /> Add
                </a>
              </div>
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Termination Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input
                  type="text"
                  className="form-control datetimepicker"
                  defaultValue="28/02/2019"
                />
              </div>
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Reason <span className="text-danger">*</span>
              </label>
              <textarea className="form-control" rows={4} defaultValue={""} />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Notice Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input
                  type="text"
                  className="form-control datetimepicker"
                  defaultValue="28/02/2019"
                />
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
  {/* /Edit Termination Modal */}
  {/* Delete Termination Modal */}
  <div
    className="modal custom-modal fade"
    id="delete_termination"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="form-header">
            <h3>Delete Termination</h3>
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
  {/* /Delete Termination Modal */}
</div>

  )
}

export default Termination
