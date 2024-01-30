import React from 'react'

function LeaveReport() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col">
            <h3 className="page-title">Leave Report</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Leave Report</li>
            </ul>
          </div>
          <div className="col-auto">
            <a href="#" className="btn btn-primary">
              PDF
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Search Filter */}
      <div className="row filter-row mb-4">
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input className="form-control floating" type="text" />
            <label className="focus-label">Employee</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option>Select Department</option>
              <option>Designing</option>
              <option>Development</option>
              <option>Finance</option>
              <option>Hr &amp; Finance</option>
            </select>
            <label className="focus-label">Department</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
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
        <div className="col-sm-6 col-md-3">
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
        <div className="col-sm-6 col-md-3">
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
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Department</th>
                  <th>Leave Type</th>
                  <th>No.of Days</th>
                  <th>Remaining Leave</th>
                  <th>Total Leaves</th>
                  <th>Total Leave Taken</th>
                  <th>Leave Carry Forward</th>
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
                        John Doe <span>#0001</span>
                      </a>
                    </h2>
                  </td>
                  <td>20 Dec 2020</td>
                  <td>Design</td>
                  <td className="text-center">
                    <button className="btn btn-outline-info btn-sm">
                      Sick Leave
                    </button>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-danger btn-sm">05</span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-warning btn-sm">
                      <b>08</b>
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-success btn-sm">
                      <b>20</b>
                    </span>
                  </td>
                  <td className="text-center">12</td>
                  <td className="text-center">08</td>
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
                        Richard Miles <span>#0002</span>
                      </a>
                    </h2>
                  </td>
                  <td>21 Dec 2020</td>
                  <td>Web Developer</td>
                  <td className="text-center">
                    <button className="btn btn-outline-warning btn-sm">
                      Parenting Leave
                    </button>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-danger btn-sm">03</span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-warning btn-sm">
                      <b>08</b>
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-success btn-sm">
                      <b>20</b>
                    </span>
                  </td>
                  <td className="text-center">12</td>
                  <td className="text-center">05</td>
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
                        John Smith <span>#003</span>
                      </a>
                    </h2>
                  </td>
                  <td>22 Dec 2020</td>
                  <td>Android Developer</td>
                  <td className="text-center">
                    <button className="btn btn-outline-danger btn-sm">
                      Emercency Leave
                    </button>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-danger btn-sm">01</span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-warning btn-sm">
                      <b>09</b>
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-success btn-sm">
                      <b>20</b>
                    </span>
                  </td>
                  <td className="text-center">17</td>
                  <td className="text-center">03</td>
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
                        Mike Litorus <span>#004</span>
                      </a>
                    </h2>
                  </td>
                  <td>23 Dec 2020</td>
                  <td>IOS Developer</td>
                  <td className="text-center">
                    <button className="btn btn-outline-info btn-sm">
                      Sick Leave
                    </button>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-danger btn-sm">15</span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-warning btn-sm">
                      <b>05</b>
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-success btn-sm">
                      <b>20</b>
                    </span>
                  </td>
                  <td className="text-center">15</td>
                  <td className="text-center">05</td>
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
                        Wilmer Deluna <span>#005</span>
                      </a>
                    </h2>
                  </td>
                  <td>24 Dec 2020</td>
                  <td>Team Leader</td>
                  <td className="text-center">
                    <button className="btn btn-outline-info btn-sm">
                      Sick Leave
                    </button>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-danger btn-sm">10</span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-warning btn-sm">
                      <b>07</b>
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="btn btn-success btn-sm">
                      <b>20</b>
                    </span>
                  </td>
                  <td className="text-center">18</td>
                  <td className="text-center">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </div>
  
  )
}

export default LeaveReport
