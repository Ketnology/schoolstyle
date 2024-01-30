import React from 'react'

function TimeSheet() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Timesheet</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Timesheet</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_todaywork"
            >
              <i className="fa-solid fa-plus" /> Add Today Work
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
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Projects</th>
                  <th className="text-center">Assigned Hours</th>
                  <th className="text-center">Hours</th>
                  <th className="d-none d-sm-table-cell">Description</th>
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
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Office Management</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">7</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
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
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Project Management</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
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
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Video Calling App</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Mike Litorus <span>IOS Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Hospital Administration</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Wilmer Deluna <span>Team Leader</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Office Management</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">7</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-12.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Jeffrey Warden <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Project Management</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-13.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Bernardo Galaviz <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Video Calling App</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Lesley Grauer <span>Team Leader</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Hospital Administration</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Jeffery Lalor <span>Team Leader</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Ware house developement</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">9</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-04.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Loren Gatlin <span>Android Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Office Management</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Tarah Shropshire <span>Android Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Project Management</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-08.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Catherine Manseau <span>Android Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>8 Mar 2019</td>
                  <td>
                    <h2>Video Calling App</h2>
                  </td>
                  <td className="text-center">20</td>
                  <td className="text-center">12</td>
                  <td className="d-none d-sm-table-cell col-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel elit neque.
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
                          data-bs-target="#edit_todaywork"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_workdetail"
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
    {/* Add Today Work Modal */}
    <div id="add_todaywork" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Today Work details</h5>
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
                <div className="input-block mb-3 col-sm-6">
                  <label className="col-form-label">
                    Project <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Office Management</option>
                    <option>Project Management</option>
                    <option>Video Calling App</option>
                    <option>Hospital Administration</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-block mb-3 col-sm-4">
                  <label className="col-form-label">
                    Deadline <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="5 May 2019"
                      readOnly=""
                    />
                  </div>
                </div>
                <div className="input-block mb-3 col-sm-4">
                  <label className="col-form-label">
                    Total Hours <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={100}
                    readOnly=""
                  />
                </div>
                <div className="input-block mb-3 col-sm-4">
                  <label className="col-form-label">
                    Remaining Hours <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={60}
                    readOnly=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-block mb-3 col-sm-6">
                  <label className="col-form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" type="text" />
                  </div>
                </div>
                <div className="input-block mb-3 col-sm-6">
                  <label className="col-form-label">
                    Hours <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Description <span className="text-danger">*</span>
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
    {/* /Add Today Work Modal */}
    {/* Edit Today Work Modal */}
    <div id="edit_todaywork" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Work Details</h5>
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
                <div className="input-block mb-3 col-sm-6">
                  <label className="col-form-label">
                    Project <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Office Management</option>
                    <option>Project Management</option>
                    <option>Video Calling App</option>
                    <option>Hospital Administration</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-block mb-3 col-sm-4">
                  <label className="col-form-label">
                    Deadline <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="5 May 2019"
                      readOnly=""
                    />
                  </div>
                </div>
                <div className="input-block mb-3 col-sm-4">
                  <label className="col-form-label">
                    Total Hours <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={100}
                    readOnly=""
                  />
                </div>
                <div className="input-block mb-3 col-sm-4">
                  <label className="col-form-label">
                    Remaining Hours <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={60}
                    readOnly=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-block mb-3 col-sm-6">
                  <label className="col-form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      defaultValue="03/03/2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-block mb-3 col-sm-6">
                  <label className="col-form-label">
                    Hours <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" defaultValue={9} />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <textarea
                  rows={4}
                  className="form-control"
                  defaultValue={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."
                  }
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
    {/* /Edit Today Work Modal */}
    {/* Delete Today Work Modal */}
    <div className="modal custom-modal fade" id="delete_workdetail" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Work Details</h3>
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
    {/* Delete Today Work Modal */}
  </div>
  
  )
}

export default TimeSheet
