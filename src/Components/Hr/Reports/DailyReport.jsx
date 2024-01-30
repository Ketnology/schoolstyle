import React from 'react'

function DailyReport() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col">
            <h3 className="page-title">Daily Report</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Daily Report</li>
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
      {/* Content Starts */}
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-6">
          <div className="card">
            <div className="card-body text-center">
              <h3>
                <b>101</b>
              </h3>
              <p>Total Employees</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card">
            <div className="card-body text-center">
              <h3 className="text-success">
                <b>84</b>
              </h3>
              <p>Today Present</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card">
            <div className="card-body text-center">
              <h3 className="text-danger">
                <b>12</b>
              </h3>
              <p>Today Absent</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card">
            <div className="card-body text-center">
              <h3>
                <b>5</b>
              </h3>
              <p>Today Left</p>
            </div>
          </div>
        </div>
      </div>
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
          <div className="d-grid">
            <a href="#" className="btn btn-success">
              {" "}
              Search{" "}
            </a>
          </div>
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
                  <th className="text-center">Status</th>
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
                      Week off
                    </button>
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
                        Richard Miles <span>#0002</span>
                      </a>
                    </h2>
                  </td>
                  <td>20 Dec 2020</td>
                  <td>Web Developer</td>
                  <td className="text-center">
                    <button className="btn btn-outline-danger btn-sm">
                      Absent
                    </button>
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
                        John Smith <span>#003</span>
                      </a>
                    </h2>
                  </td>
                  <td>20 Dec 2020</td>
                  <td>Android Developer</td>
                  <td className="text-center">
                    <button className="btn btn-outline-info btn-sm">
                      Week off
                    </button>
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
                        Mike Litorus <span>#004</span>
                      </a>
                    </h2>
                  </td>
                  <td>20 Dec 2020</td>
                  <td>IOS Developer</td>
                  <td className="text-center">
                    <button className="btn btn-outline-info btn-sm">
                      Week off
                    </button>
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
                        Wilmer Deluna <span>#005</span>
                      </a>
                    </h2>
                  </td>
                  <td>20 Dec 2020</td>
                  <td>Team Leader</td>
                  <td className="text-center">
                    <button className="btn btn-outline-info btn-sm">
                      Week off
                    </button>
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

export default DailyReport
