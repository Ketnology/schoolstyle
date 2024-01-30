import React from 'react'

function RolesAndPermission() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Roles &amp; Permissions</h3>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
          <a
            href="#"
            className="btn btn-primary w-100"
            data-bs-toggle="modal"
            data-bs-target="#add_role"
          >
            <i className="fa-solid fa-plus" /> Add Roles
          </a>
          <div className="roles-menu">
            <ul>
              <li className="active">
                <a href="javascript:void(0);">
                  Administrator
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  CEO
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  Manager
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  Team Leader
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  Accountant
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  Web Developer
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  Web Designer
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  HR
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  UI/UX Developer
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  SEO Analyst
                  <span className="role-action">
                    <span
                      className="action-circle large"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_role"
                    >
                      <i className="material-icons">edit</i>
                    </span>
                    <span
                      className="action-circle large delete-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_role"
                    >
                      <i className="material-icons">delete</i>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
          <h6 className="card-title m-b-20">Module Access</h6>
          <div className="m-b-30">
            <ul className="list-group notification-list">
              <li className="list-group-item">
                Employee
                <div className="status-toggle">
                  <input type="checkbox" id="staff_module" className="check" />
                  <label htmlFor="staff_module" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Holidays
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="holidays_module"
                    className="check"
                    defaultChecked=""
                  />
                  <label htmlFor="holidays_module" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Leaves
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="leave_module"
                    className="check"
                    defaultChecked=""
                  />
                  <label htmlFor="leave_module" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Events
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="events_module"
                    className="check"
                    defaultChecked=""
                  />
                  <label htmlFor="events_module" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Chat
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="chat_module"
                    className="check"
                    defaultChecked=""
                  />
                  <label htmlFor="chat_module" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Jobs
                <div className="status-toggle">
                  <input type="checkbox" id="job_module" className="check" />
                  <label htmlFor="job_module" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="table-responsive">
            <table className="table table-striped custom-table">
              <thead>
                <tr>
                  <th>Module Permission</th>
                  <th className="text-center">Read</th>
                  <th className="text-center">Write</th>
                  <th className="text-center">Create</th>
                  <th className="text-center">Delete</th>
                  <th className="text-center">Import</th>
                  <th className="text-center">Export</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Employee</td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Holidays</td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Leaves</td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Events</td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="custom_check">
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* Add Role Modal */}
    <div id="add_role" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Role</h5>
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
                  Role Name <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Role Modal */}
    {/* Edit Role Modal */}
    <div id="edit_role" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-md">
          <div className="modal-header">
            <h5 className="modal-title">Edit Role</h5>
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
                  Role Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  defaultValue="Team Leader"
                  type="text"
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
    {/* /Edit Role Modal */}
    {/* Delete Role Modal */}
    <div className="modal custom-modal fade" id="delete_role" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Role</h3>
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
    {/* /Delete Role Modal */}
  </div>
  
  )
}

export default RolesAndPermission
