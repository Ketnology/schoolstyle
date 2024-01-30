import React from 'react'

function GoalType() {
  return (
    <div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Goal Type</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Goal Type</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <a
            href="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#add_type"
          >
            <i className="fa-solid fa-plus" /> Add New
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
                <th className="width-thirty">#</th>
                <th>Type </th>
                <th>Description </th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Invoice Goal</td>
                <td>Lorem ipsum dollar</td>
                <td>
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Active
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Active
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Inactive
                      </a>
                    </div>
                  </div>
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
                        data-bs-target="#edit_type"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_type"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Event Goal</td>
                <td>Lorem ipsum dollar</td>
                <td>
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-danger" />{" "}
                      Inactive
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Active
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Inactive
                      </a>
                    </div>
                  </div>
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
                        data-bs-target="#edit_type"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_type"
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
  {/* Add Goal Modal */}
  <div id="add_type" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add New Goal Type</h5>
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
                Goal Type <span className="text-danger">*</span>
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea className="form-control" rows={4} defaultValue={""} />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">Status</label>
              <select className="select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Goal Modal */}
  {/* Edit Goal Modal */}
  <div id="edit_type" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Goal Type</h5>
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
                Goal Type <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="Invoice Goal"
              />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows={4}
                defaultValue={"Lorem ipsum is map"}
              />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">Status</label>
              <select className="select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Goal Modal */}
  {/* Delete Goal Modal */}
  <div className="modal custom-modal fade" id="delete_type" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="form-header">
            <h3>Delete Goal Type</h3>
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
  {/* /Delete Goal Modal */}
</div>

  )
}

export default GoalType
