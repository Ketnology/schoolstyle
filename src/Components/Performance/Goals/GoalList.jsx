import React from 'react'

function GoalList() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Goal Tracking</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Goal Tracking</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_goal"
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
                  <th>Goal Type</th>
                  <th>Subject</th>
                  <th>Target Achievement</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Description </th>
                  <th>Status </th>
                  <th>Progress </th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Event Goal</td>
                  <td>Test Goal</td>
                  <td>Lorem ipsum dollar</td>
                  <td>7 May 2019</td>
                  <td>10 May 2019</td>
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
                  <td>
                    <p className="mb-1">Completed 73%</p>
                    <div className="progress height-5">
                      <div className="progress-bar bg-primary progress-sm w-73 height-10" />
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
                          data-bs-target="#edit_goal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_goal"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Invoice Goal</td>
                  <td>Test Goal</td>
                  <td>Lorem ipsum dollar</td>
                  <td>7 May 2019</td>
                  <td>10 May 2019</td>
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
                  <td>
                    <p className="mb-1">Completed 100%</p>
                    <div className="progress height-5">
                      <div className="progress-bar bg-primary progress-sm w-100 height-10" />
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
                          data-bs-target="#edit_goal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_goal"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Employee Goal</td>
                  <td>Test Goal</td>
                  <td>Lorem ipsum dollar</td>
                  <td>7 May 2019</td>
                  <td>10 May 2019</td>
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
                  <td>
                    <p className="mb-1">Completed 73%</p>
                    <div className="progress height-5">
                      <div className="progress-bar bg-primary progress-sm w-73 height-10" />
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
                          data-bs-target="#edit_goal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_goal"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Invoice Goal</td>
                  <td>Test Goal</td>
                  <td>Lorem ipsum dollar</td>
                  <td>7 May 2019</td>
                  <td>10 May 2019</td>
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
                  <td>
                    <p className="mb-1">Completed 73%</p>
                    <div className="progress height-5">
                      <div className="progress-bar bg-primary progress-sm w-73 height-10" />
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
                          data-bs-target="#edit_goal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_goal"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Project Goal</td>
                  <td>Test Goal</td>
                  <td>Lorem ipsum dollar</td>
                  <td>7 May 2019</td>
                  <td>10 May 2019</td>
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
                  <td>
                    <p className="mb-1">Completed 73%</p>
                    <div className="progress height-5">
                      <div className="progress-bar bg-primary progress-sm w-73 height-10" />
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
                          data-bs-target="#edit_goal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_goal"
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
    <div id="add_goal" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Goal Tracking</h5>
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
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Goal Type</label>
                    <select className="select">
                      <option>Invoice Goal</option>
                      <option>Event Goal</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Subject</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Target Achievement</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Start Date <span className="text-danger">*</span>
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
                    <label className="col-form-label">
                      End Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>
                    <select className="select">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
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
    {/* /Add Goal Modal */}
    {/* Edit Goal Modal */}
    <div id="edit_goal" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Goal Tracking</h5>
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
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Goal Type</label>
                    <select className="select">
                      <option selected="">Invoice Goal</option>
                      <option>Event Goal</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Subject</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Test Goal"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Target Achievement</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Lorem ipsum dollar"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Start Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        defaultValue="01-01-2019"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      End Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        defaultValue="01-01-2019"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 mb-3">
                  <div className="input-block mb-3">
                    <label htmlFor="customRange">Progress</label>
                    <input
                      type="range"
                      className="form-control-range form-range"
                      id="customRange"
                    />
                    <div className="mt-2" id="result">
                      Progress Value: <b />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={"Lorem ipsum dollar"}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>
                    <select className="select">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
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
    {/* /Edit Goal Modal */}
    {/* Delete Goal Modal */}
    <div className="modal custom-modal fade" id="delete_goal" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Goal Tracking List</h3>
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

export default GoalList
