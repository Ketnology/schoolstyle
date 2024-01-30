import React from 'react'

function Expenses() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Expenses</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Expenses</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_expense"
            >
              <i className="fa-solid fa-plus" /> Add Expense
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Item Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option> -- Select -- </option>
              <option>Loren Gatlin</option>
              <option>Tarah Shropshire</option>
            </select>
            <label className="focus-label">Purchased By</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option> -- Select -- </option>
              <option> Cash </option>
              <option> Cheque </option>
            </select>
            <label className="focus-label">Paid By</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus">
            <div className="cal-icon">
              <input
                className="form-control floating datetimepicker"
                type="text"
              />
            </div>
            <label className="focus-label">From</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus">
            <div className="cal-icon">
              <input
                className="form-control floating datetimepicker"
                type="text"
              />
            </div>
            <label className="focus-label">To</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <a href="#" className="btn btn-success w-100">
            {" "}
            Search{" "}
          </a>
        </div>
      </div>
      {/* /Search Filter */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Purchase From</th>
                  <th>Purchase Date</th>
                  <th>Purchased By</th>
                  <th>Amount</th>
                  <th>Paid By</th>
                  <th className="text-center">Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Dell Laptop</strong>
                  </td>
                  <td>Amazon</td>
                  <td>5 Jan 2019</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar avatar-xs">
                        <img
                          src="assets/img/profiles/avatar-04.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Loren Gatlin</a>
                    </h2>
                  </td>
                  <td>$1215</td>
                  <td>Cash</td>
                  <td className="text-center">
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
                          data-bs-target="#edit_expense"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_expense"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Mac System</strong>
                  </td>
                  <td>Amazon</td>
                  <td>5 Jan 2019</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar avatar-xs">
                        <img
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Tarah Shropshire</a>
                    </h2>
                  </td>
                  <td>$1215</td>
                  <td>Cheque</td>
                  <td className="text-center">
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
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
                          data-bs-target="#edit_expense"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_expense"
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
    {/* Add Expense Modal */}
    <div id="add_expense" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Expense</h5>
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
                    <label className="col-form-label">Item Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase From</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchased By </label>
                    <select className="select">
                      <option>Daniel Porter</option>
                      <option>Roger Dixon</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Amount</label>
                    <input
                      placeholder="$50"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Paid By</label>
                    <select className="select">
                      <option>Cash</option>
                      <option>Cheque</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>
                    <select className="select">
                      <option>Pending</option>
                      <option>Approved</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Attachments</label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="attach-files">
                <ul>
                  <li>
                    <img
                      src="assets/img/placeholder.jpg"
                      alt="Placeholder Image"
                    />
                    <a href="#" className="fa fa-close file-remove" />
                  </li>
                  <li>
                    <img
                      src="assets/img/placeholder.jpg"
                      alt="Placeholder Image"
                    />
                    <a href="#" className="fa fa-close file-remove" />
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Expense Modal */}
    {/* Edit Expense Modal */}
    <div id="edit_expense" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Expense</h5>
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
                    <label className="col-form-label">Item Name</label>
                    <input
                      className="form-control"
                      defaultValue="Dell Laptop"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase From</label>
                    <input
                      className="form-control"
                      defaultValue="Amazon"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchased By </label>
                    <select className="select">
                      <option>Daniel Porter</option>
                      <option>Roger Dixon</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Amount</label>
                    <input
                      placeholder="$50"
                      className="form-control"
                      defaultValue="$10000"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Paid By</label>
                    <select className="select">
                      <option>Cash</option>
                      <option>Cheque</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>
                    <select className="select">
                      <option>Pending</option>
                      <option>Approved</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Attachments</label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="attach-files">
                <ul>
                  <li>
                    <img
                      src="assets/img/placeholder.jpg"
                      alt="Placeholder Image"
                    />
                    <a href="#" className="fa fa-close file-remove" />
                  </li>
                  <li>
                    <img
                      src="assets/img/placeholder.jpg"
                      alt="Placeholder Image"
                    />
                    <a href="#" className="fa fa-close file-remove" />
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Expense Modal */}
    {/* Delete Expense Modal */}
    <div className="modal custom-modal fade" id="delete_expense" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Expense</h3>
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
    {/* Delete Expense Modal */}
  </div>
  
  )
}

export default Expenses
