import React from 'react'

function ProvidentFund() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Provident Fund</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Provident Fund</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_pf"
            >
              <i className="fa-solid fa-plus" /> Add Provident Fund
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table datatable mb-0">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Provident Fund Type</th>
                  <th>Employee Share</th>
                  <th>Organization Share</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                  <td>Percentage of Basic Salary</td>
                  <td>2%</td>
                  <td>2%</td>
                  <td>
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Pending
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-danger" />{" "}
                          Pending
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-circle-dot text-success" />{" "}
                          Approved
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
                          data-bs-target="#edit_pf"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_pf"
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
    {/* Add PF Modal */}
    <div id="add_pf" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Provident Fund</h5>
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
                    <label className="col-form-label">Employee Name</label>
                    <select className="form-control select">
                      <option value={3}>John Doe (FT-0001)</option>
                      <option value={23}>Richard Miles (FT-0002)</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Provident Fund Type</label>
                    <select className="form-control select">
                      <option value="Fixed Amount" selected="">
                        Fixed Amount
                      </option>
                      <option value="Percentage of Basic Salary">
                        Percentage of Basic Salary
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="show-fixed-amount">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Employee Share (Amount)
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Organization Share (Amount)
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="show-basic-salary">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Employee Share (%)
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Organization Share (%)
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
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
    {/* /Add PF Modal */}
    {/* Edit PF Modal */}
    <div id="edit_pf" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Provident Fund</h5>
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
                    <label className="col-form-label">Employee Name</label>
                    <select className="form-control select">
                      <option value={3}>John Doe (FT-0001)</option>
                      <option value={23}>Richard Miles (FT-0002)</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Provident Fund Type</label>
                    <select className="form-control select">
                      <option value="Fixed Amount" selected="">
                        Fixed Amount
                      </option>
                      <option value="Percentage of Basic Salary">
                        Percentage of Basic Salary
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="show-fixed-amount">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Employee Share (Amount)
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Organization Share (Amount)
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="show-basic-salary">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Employee Share (%)
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="2%"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Organization Share (%)
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="2%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
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
    {/* /Edit PF Modal */}
    {/* Delete PF Modal */}
    <div className="modal custom-modal fade" id="delete_pf" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Provident Fund</h3>
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
    {/* /Delete PF Modal */}
  </div>
  
  )
}

export default ProvidentFund
