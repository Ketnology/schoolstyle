import React from 'react'

function UserDashboard() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">User Job Dashboard</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item">Jobs</li>
              <li className="breadcrumb-item">User Dashboard</li>
              <li className="breadcrumb-item">User Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Content Starts */}
      <div className="card">
        <div className="card-body">
          {/* <h4 class="card-title">Solid justified</h4> */}
          <ul className="nav nav-tabs nav-tabs-solid nav-justified">
            <li className="nav-item">
              <a className="nav-link active" href="user-dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="user-all-jobs">
                All{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="saved-jobs">
                Saved
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="applied-jobs">
                Applied
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="interviewing">
                Interviewing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="offered-jobs">
                Offered
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="visited-jobs">
                Visitied{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="archived-jobs">
                Archived{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className="fa-regular fa-file-lines" />
              </span>
              <div className="dash-widget-info">
                <h3>110</h3>
                <span>Offered</span>
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
                <h3>40</h3>
                <span>Applied</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className="fa-solid fa-retweet" />
              </span>
              <div className="dash-widget-info">
                <h3>374</h3>
                <span>Visited</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className="fa-regular fa-floppy-disk" />
              </span>
              <div className="dash-widget-info">
                <h3>220</h3>
                <span>Saved</span>
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
                    <li className="list-group-item list-group-item-action">
                      PHP Developer
                      <span className="float-end text-sm text-muted">
                        4 Days ago
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      UI Developer
                      <span className="float-end text-sm text-muted">
                        4 Days ago
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Android Developer
                      <span className="float-end text-sm text-muted">
                        6 Days ago
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
              <h3 className="card-title mb-0">Offered Jobs</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-nowrap custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th className="text-center">Job Type</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a href="job-details">Web Developer</a>
                      </td>
                      <td>Development</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Full Time
                          </a>
                        </div>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-info download-offer"
                        >
                          <span>
                            <i className="fa-solid fa-download me-1" /> Download
                            Offer
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <a href="job-details">Web Designer</a>
                      </td>
                      <td>Designing</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-circle-dot text-success" />{" "}
                            Part Time
                          </a>
                        </div>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-info download-offer"
                        >
                          <span>
                            <i className="fa-solid fa-download me-1" /> Download
                            Offer
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a href="job-details">Android Developer</a>
                      </td>
                      <td>Android</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Internship
                          </a>
                        </div>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-info download-offer"
                        >
                          <span>
                            <i className="fa-solid fa-download me-1" /> Download
                            Offer
                          </span>
                        </a>
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
              <h3 className="card-title mb-0">Applied Jobs</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-nowrap custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th>Start Date</th>
                      <th>Expire Date</th>
                      <th className="text-center">Job Type</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a href="job-details">Web Developer</a>
                      </td>
                      <td>Development</td>
                      <td>3 Mar 2019</td>
                      <td>31 May 2019</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Full Time
                          </a>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Open
                          </a>
                        </div>
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
                            <a className="dropdown-item" href="#">
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
                        <a href="job-details">Web Designer</a>
                      </td>
                      <td>Designing</td>
                      <td>3 Mar 2019</td>
                      <td>31 May 2019</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-success" />{" "}
                            Part Time
                          </a>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-success" />{" "}
                            Closed
                          </a>
                        </div>
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
                            <a className="dropdown-item" href="#">
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
                        <a href="job-details">Android Developer</a>
                      </td>
                      <td>Android</td>
                      <td>3 Mar 2019</td>
                      <td>31 May 2019</td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Internship
                          </a>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="action-label">
                          <a
                            className="btn btn-white btn-sm btn-rounded"
                            href="#"
                          >
                            <i className="fa-regular fa-circle-dot text-danger" />{" "}
                            Cancelled
                          </a>
                        </div>
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
                            <a className="dropdown-item" href="#">
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
      {/* /Content End */}
    </div>
    {/* /Page Content */}
  </div>
  
  )
}

export default UserDashboard
