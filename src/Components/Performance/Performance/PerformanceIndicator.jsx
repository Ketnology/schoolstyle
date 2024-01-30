import React from 'react'

function PerformanceIndicator() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Performance Indicator</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Performance</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_indicator"
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
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Added By</th>
                  <th>Create At</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Web Designer </td>
                  <td>Designing</td>
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
                  <td>7 May 2019</td>
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
                          data-bs-target="#edit_indicator"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_indicator"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>IOS Developer </td>
                  <td>IOS</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Mike Litorus </a>
                    </h2>
                  </td>
                  <td>7 May 2019</td>
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
                          data-bs-target="#edit_indicator"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_indicator"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Web Designer </td>
                  <td>Designing</td>
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
                  <td>7 May 2019</td>
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
                          data-bs-target="#edit_indicator"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_indicator"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Web Designer </td>
                  <td>Designing</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-12.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Jeffrey Warden </a>
                    </h2>
                  </td>
                  <td>7 May 2019</td>
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
                          data-bs-target="#edit_indicator"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_indicator"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Web Designer </td>
                  <td>Designing</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Wilmer Deluna </a>
                    </h2>
                  </td>
                  <td>7 May 2019</td>
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
                          data-bs-target="#edit_indicator"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_indicator"
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
    {/* Add Performance Indicator Modal */}
    <div id="add_indicator" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Set New Indicator</h5>
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
                    <label className="col-form-label">Designation</label>
                    <select className="select">
                      <option>Select Designation</option>
                      <option>Web Designer</option>
                      <option>IOS Developer</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4 className="modal-sub-title">Technical</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Customer Experience</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Marketing</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Management</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Administration</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Presentation Skill</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Quality Of Work</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Efficiency</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4 className="modal-sub-title">Organizational</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Integrity</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Professionalism</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Work</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Critical Thinking</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Conflict Management</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Attendance</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Ability To Meet Deadline
                    </label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
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
    {/* /Add Performance Indicator Modal */}
    {/* Edit Performance Indicator Modal */}
    <div id="edit_indicator" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Performance Indicator</h5>
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
                    <label className="col-form-label">Designation</label>
                    <select className="select">
                      <option>Select Designation</option>
                      <option selected="">Web Designer</option>
                      <option>IOS Developer</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4 className="modal-sub-title">Technical</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Customer Experience</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option selected="">Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Marketing</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option selected="">Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Management</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option selected="">Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Administration</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option selected="">Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Presentation Skill</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Quality Of Work</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Efficiency</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4 className="modal-sub-title">Organizational</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Integrity</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Professionalism</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option selected="">Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Work</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Critical Thinking</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option selected="">Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Conflict Management</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option selected="">Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Attendance</label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option selected="">Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Ability To Meet Deadline
                    </label>
                    <select className="select">
                      <option>None</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option selected="">Advanced</option>
                      <option>Expert / Leader</option>
                    </select>
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
    {/* /Edit Performance Indicator Modal */}
    {/* Delete Performance Indicator Modal */}
    <div className="modal custom-modal fade" id="delete_indicator" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Performance Indicator List</h3>
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
    {/* /Delete Performance Indicator Modal */}
  </div>
  
  )
}

export default PerformanceIndicator
