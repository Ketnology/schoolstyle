import React from 'react'

function ShiftSchedule() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col">
            <h3 className="page-title">Daily Scheduling</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="employees">Employees</a>
              </li>
              <li className="breadcrumb-item active">Shift Scheduling</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a href="shift-list" className="btn add-btn m-r-5">
              Shifts
            </a>
            <a
              href="#"
              className="btn add-btn m-r-5"
              data-bs-toggle="modal"
              data-bs-target="#add_schedule"
            >
              {" "}
              Assign Shifts
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Content Starts */}
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Employee</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option>All Department</option>
              <option value={1}>Finance</option>
              <option value={2}>Finance and Management</option>
              <option value={3}>Hr &amp; Finance</option>
              <option value={4}>ITech</option>
            </select>
            <label className="focus-label">Department</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-2">
          <div className="input-block mb-3 form-focus focused">
            <div className="cal-icon">
              <input
                className="form-control floating datetimepicker"
                type="text"
              />
            </div>
            <label className="focus-label">From</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-2">
          <div className="input-block mb-3 form-focus focused">
            <div className="cal-icon">
              <input
                className="form-control floating datetimepicker"
                type="text"
              />
            </div>
            <label className="focus-label">To</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-2">
          <a href="#" className="btn btn-success w-100">
            {" "}
            Search{" "}
          </a>
        </div>
      </div>
      {/* Search Filter */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table datatable leave-employee-table">
              <thead>
                <tr>
                  <th>Scheduled Shift</th>
                  <th>Fri 21</th>
                  <th>Sat 22</th>
                  <th>Sun 23</th>
                  <th>Mon 24</th>
                  <th>Tue 25</th>
                  <th>Wed 26</th>
                  <th>Thu 27</th>
                  <th>Fri 28</th>
                  <th>Sat 29</th>
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
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
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
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
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
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
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
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
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
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
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
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
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
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <h2>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          className="green-border"
                        >
                          <span className="username-info m-b-10">
                            6:30 am - 9:30 pm ( 14 hrs 15 mins)
                          </span>
                          <span className="userrole-info">
                            Web Designer - SMARTHR
                          </span>
                        </a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="user-add-shedule-list">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span>
                          <i className="fa-solid fa-plus" />
                        </span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* /Content End */}
    </div>
    {/* /Page Content */}
  </div>
  
  )
}

export default ShiftSchedule
