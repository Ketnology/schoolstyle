import React from 'react'

function PerformanceAppraisal() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Performance Appraisal</h3>
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
              data-bs-target="#add_appraisal"
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
                  <th>Employee</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Appraisal Date</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
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
                  <td>Web Designer </td>
                  <td>Designing</td>
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
                          data-bs-target="#edit_appraisal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_appraisal"
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
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Mike Litorus </a>
                    </h2>
                  </td>
                  <td>IOS Developer </td>
                  <td>IOS</td>
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
                          data-bs-target="#edit_appraisal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_appraisal"
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
                          src="assets/img/profiles/avatar-13.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Bernardo Galaviz </a>
                    </h2>
                  </td>
                  <td>Web Developer </td>
                  <td>Designing</td>
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
                          data-bs-target="#edit_appraisal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_appraisal"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
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
                  <td>Web Developer </td>
                  <td>Designing</td>
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
                          data-bs-target="#edit_appraisal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_appraisal"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
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
                  <td>Team Leader </td>
                  <td>IOS</td>
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
                          data-bs-target="#edit_appraisal"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_appraisal"
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
    {/* Add Performance Appraisal Modal */}
    <div id="add_appraisal" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Give Performance Appraisal</h5>
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
                    <label className="col-form-label">Employee</label>
                    <select className="select">
                      <option>Select Employee</option>
                      <option>John Doe</option>
                      <option>Mike Litorus</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Select Date <span className="text-danger">*</span>
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
                  <div className="card">
                    <div className="card-body">
                      <div className="tab-box">
                        <div className="row user-tabs">
                          <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                            <ul className="nav nav-tabs nav-tabs-solid">
                              <li className="nav-item">
                                <a
                                  href="#appr_technical"
                                  data-bs-toggle="tab"
                                  className="nav-link active"
                                >
                                  Technical
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#appr_organizational"
                                  data-bs-toggle="tab"
                                  className="nav-link"
                                >
                                  Organizational
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div
                          id="appr_technical"
                          className="pro-overview tab-pane fade show active"
                        >
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="bg-white">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Technical Competencies</th>
                                      <th />
                                      <th />
                                      <th />
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th colSpan={2}>Indicator</th>
                                      <th colSpan={2}>Expected Value</th>
                                      <th>Set Value</th>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Customer Experience</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="customer_experience"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Marketing</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="marketing"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Management</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="management"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Administration</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="administration"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Presentation Skill</td>
                                      <td colSpan={2}>Expert / Leader</td>
                                      <td>
                                        <select
                                          name="presentation_skill"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Quality Of Work</td>
                                      <td colSpan={2}>Expert / Leader</td>
                                      <td>
                                        <select
                                          name="quality_of_work"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Efficiency</td>
                                      <td colSpan={2}>Expert / Leader</td>
                                      <td>
                                        <select
                                          name="efficiency"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="appr_organizational">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="bg-white">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Organizational Competencies</th>
                                      <th />
                                      <th />
                                      <th />
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th colSpan={2}>Indicator</th>
                                      <th colSpan={2}>Expected Value</th>
                                      <th>Set Value</th>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Integrity</td>
                                      <td colSpan={2}>Beginner</td>
                                      <td>
                                        <select
                                          name="integrity"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Professionalism</td>
                                      <td colSpan={2}>Beginner</td>
                                      <td>
                                        <select
                                          name="professionalism"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Team Work</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="team_work"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Critical Thinking</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="critical_thinking"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Conflict Management</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="conflict_management"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Attendance</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="attendance"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>
                                        Ability To Meet Deadline
                                      </td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="ability_to_meet_deadline"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
    {/* /Add Performance Appraisal Modal */}
    {/* Edit Performance Appraisal Modal */}
    <div id="edit_appraisal" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Performance Appraisal</h5>
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
                    <label className="col-form-label">Employee</label>
                    <select className="select">
                      <option>Select Employee</option>
                      <option>John Doe</option>
                      <option selected="">Mike Litorus</option>
                    </select>
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Select Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        defaultValue="7/08/2019"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="tab-box">
                        <div className="row user-tabs">
                          <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                            <ul className="nav nav-tabs nav-tabs-solid">
                              <li className="nav-item">
                                <a
                                  href="#appr_technical1"
                                  data-bs-toggle="tab"
                                  className="nav-link active"
                                >
                                  Technical
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#appr_organizational1"
                                  data-bs-toggle="tab"
                                  className="nav-link"
                                >
                                  Organizational
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div
                          id="appr_technical1"
                          className="pro-overview tab-pane fade show active"
                        >
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="bg-white">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Technical Competencies</th>
                                      <th />
                                      <th />
                                      <th />
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th colSpan={2}>Indicator</th>
                                      <th colSpan={2}>Expected Value</th>
                                      <th>Set Value</th>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Customer Experience</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="customer_experience"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Marketing</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="marketing"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Management</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="management"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Administration</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="administration"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Presentation Skill</td>
                                      <td colSpan={2}>Expert / Leader</td>
                                      <td>
                                        <select
                                          name="presentation_skill"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Quality Of Work</td>
                                      <td colSpan={2}>Expert / Leader</td>
                                      <td>
                                        <select
                                          name="quality_of_work"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Efficiency</td>
                                      <td colSpan={2}>Expert / Leader</td>
                                      <td>
                                        <select
                                          name="efficiency"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                          <option value={4}>
                                            {" "}
                                            Expert / Leader
                                          </option>
                                        </select>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="appr_organizational1">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="bg-white">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Organizational Competencies</th>
                                      <th />
                                      <th />
                                      <th />
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th colSpan={2}>Indicator</th>
                                      <th colSpan={2}>Expected Value</th>
                                      <th>Set Value</th>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Integrity</td>
                                      <td colSpan={2}>Beginner</td>
                                      <td>
                                        <select
                                          name="integrity"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Professionalism</td>
                                      <td colSpan={2}>Beginner</td>
                                      <td>
                                        <select
                                          name="professionalism"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Team Work</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="team_work"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Critical Thinking</td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="critical_thinking"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Conflict Management</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="conflict_management"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>Attendance</td>
                                      <td colSpan={2}>Intermediate</td>
                                      <td>
                                        <select
                                          name="attendance"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>
                                        Ability To Meet Deadline
                                      </td>
                                      <td colSpan={2}>Advanced</td>
                                      <td>
                                        <select
                                          name="ability_to_meet_deadline"
                                          className="form-control form-select"
                                        >
                                          <option value="">None</option>
                                          <option value={1}> Beginner</option>
                                          <option value={2}> Intermediate</option>
                                          <option value={3}> Advanced</option>
                                        </select>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
    {/* /Edit Performance Appraisal Modal */}
    {/* Delete Performance Appraisal Modal */}
    <div className="modal custom-modal fade" id="delete_appraisal" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Performance Appraisal List</h3>
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
    {/* /Delete Performance Appraisal Modal */}
  </div>
  
  )
}

export default PerformanceAppraisal
