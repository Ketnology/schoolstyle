import React from 'react'

function JobsDashboard() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Job Dashboard</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item">Jobs</li>
              <li className="breadcrumb-item active">Job Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className="fa-solid fa-briefcase" />
              </span>
              <div className="dash-widget-info">
                <h3>110</h3>
                <span>Jobs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className="fa-solid fa-users" />
              </span>
              <div className="dash-widget-info">
                <h3>40</h3>
                <span>Job Seekers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className="fa-solid fa-user" />
              </span>
              <div className="dash-widget-info">
                <h3>374</h3>
                <span>Employees</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className="fa-solid fa-paste" />
              </span>
              <div className="dash-widget-info">
                <h3>220</h3>
                <span>Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 text-center d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h3 className="card-title">Overview</h3>
                  <canvas id="lineChart" />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h3 className="card-title text-center">Latest Jobs</h3>
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      UI Developer{" "}
                      <span className="float-end text-sm text-muted">
                        1 Hours ago
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Android Developer{" "}
                      <span className="float-end text-sm text-muted">
                        1 Days ago
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      IOS Developer
                      <span className="float-end text-sm text-muted">
                        2 Days ago
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      PHP Developer
                      <span className="float-end text-sm text-muted">
                        3 Days ago
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      UI Developer
                      <span className="float-end text-sm text-muted">
                        3 Days ago
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <div className="card-header">
              <h3 className="card-title mb-0">Applicants List</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-nowrap custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>Departments</th>
                      <th>Start Date</th>
                      <th>Expire Date</th>
                      <th className="text-center">Job Types</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Resume</th>
                      <th className="text-center">Actions</th>
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
                          <a href="profile">
                            John Doe <span>Web Designer</span>
                          </a>
                        </h2>
                      </td>
                      <td>
                        <a href="job-details">Web Developer</a>
                      </td>
                      <td>Development</td>
                      <td>3 Mar 2019</td>
                      <td>31 May 2019</td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Full Time
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-info" />{" "}
                              Full Time
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-success" />{" "}
                              Part Time
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-danger" />{" "}
                              Internship
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-warning" />{" "}
                              Temporary
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-warning" />{" "}
                              Other
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Open
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-info" />{" "}
                              Open
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-success" />{" "}
                              Closed
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-danger" />{" "}
                              Cancelled
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fa-solid fa-download me-1" /> Download
                        </a>
                      </td>
                      <td className="text-center">
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
                            <a href="#" className="dropdown-item">
                              <i className="fa-solid fa-pencil m-r-5" /> Edit
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="fa-regular fa-trash-can m-r-5" />{" "}
                              Delete
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
                        <a href="job-details">Web Designer</a>
                      </td>
                      <td>Designing</td>
                      <td>3 Mar 2019</td>
                      <td>31 May 2019</td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-circle-dot text-success" />{" "}
                            Part Time
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-info" />{" "}
                              Full Time
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-success" />{" "}
                              Part Time
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-danger" />{" "}
                              Internship
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-warning" />{" "}
                              Temporary
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-warning" />{" "}
                              Other
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-circle-dot text-success" />{" "}
                            Closed
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-info" />{" "}
                              Open
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-success" />{" "}
                              Closed
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-danger" />{" "}
                              Cancelled
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fa-solid fa-download me-1" /> Download
                        </a>
                      </td>
                      <td className="text-center">
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
                            <a href="#" className="dropdown-item">
                              <i className="fa-solid fa-pencil m-r-5" /> Edit
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="fa-regular fa-trash-can m-r-5" />{" "}
                              Delete
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
                        <a href="job-details">Android Developer</a>
                      </td>
                      <td>Android</td>
                      <td>3 Mar 2019</td>
                      <td>31 May 2019</td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Internship
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-info" />{" "}
                              Full Time
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-success" />{" "}
                              Part Time
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-danger" />{" "}
                              Internship
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-warning" />{" "}
                              Temporary
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-warning" />{" "}
                              Other
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Cancelled
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-info" />{" "}
                              Open
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-success" />{" "}
                              Closed
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fa-regular fa-circle-dot text-danger" />{" "}
                              Cancelled
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fa-solid fa-download me-1" /> Download
                        </a>
                      </td>
                      <td className="text-center">
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
                            <a href="#" className="dropdown-item">
                              <i className="fa-solid fa-pencil m-r-5" /> Edit
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="fa-regular fa-trash-can m-r-5" />{" "}
                              Delete
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
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <div className="card-header">
              <h3 className="card-title mb-0">Shortlist Candidates</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-nowrap custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>Departments</th>
                      <th className="text-center">Status</th>
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
                          <a href="profile">
                            John Doe <span>Web Designer</span>
                          </a>
                        </h2>
                      </td>
                      <td>
                        <a href="job-details">Web Designer</a>
                      </td>
                      <td>Department</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />
                            Offered
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
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
                        <a href="job-details">Web Developer</a>
                      </td>
                      <td>Department</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />
                            Offered
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
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
                        <a href="job-details">Android Developer</a>
                      </td>
                      <td>Department</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />
                            Offered
                          </a>
                        </div>
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
    {/* /Page Content */}
  </div>
  

  )
}

export default JobsDashboard
