import React from 'react'

function ProjectReports() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Project Reports</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Project Reports</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Content Starts */}
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <select className="form-control floating select">
              <option>Name1</option>
              <option>Name2</option>
            </select>
            <label className="focus-label">Project Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <select className="form-control floating select">
              <option>Active</option>
              <option>Pending</option>
            </select>
            <label className="focus-label">Status</label>
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
                  <th>#</th>
                  <th>Project Title</th>
                  <th>Client Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a href="project-view">Hospital Administration</a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="client-profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-19.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="client-profile">Global Technologies</a>
                    </h2>
                  </td>
                  <td>9 Jan 2021</td>
                  <td>10 Apr 2021</td>
                  <td>
                    <div className="dropdown action-label">
                      <a href="#" className="btn btn-white btn-sm btn-rounded">
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Active{" "}
                      </a>
                    </div>
                  </td>
                  <td>
                    <ul className="team-members">
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="John Doe"
                        >
                          <img
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="Richard Miles"
                        >
                          <img
                            src="assets/img/profiles/avatar-09.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="John Smith"
                        >
                          <img
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="Mike Litorus"
                        >
                          <img
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <a href="project-view">Office Management</a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="client-profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-29.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="client-profile">Delta Infotech</a>
                    </h2>
                  </td>
                  <td>10 Dec 2021</td>
                  <td>2 May 2021</td>
                  <td>
                    <div className="action-label">
                      <a href="#" className="btn btn-white btn-sm btn-rounded">
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Active{" "}
                      </a>
                    </div>
                  </td>
                  <td>
                    <ul className="team-members text-nowrap">
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="John Doe"
                        >
                          <img
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="Richard Miles"
                        >
                          <img
                            src="assets/img/profiles/avatar-09.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="John Smith"
                        >
                          <img
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="Mike Litorus"
                        >
                          <img
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li className="dropdown avatar-dropdown">
                        <a
                          href="#"
                          className="all-users dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          +15
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <div className="avatar-group">
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-11.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-12.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-13.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a className="avatar avatar-xs" href="#">
                              <img
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="User Image"
                              />
                            </a>
                          </div>
                          <div className="avatar-pagination">
                            <ul className="pagination">
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">«</span>
                                  <span className="visually-hidden">
                                    Previous
                                  </span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">»</span>
                                  <span className="visually-hidden">Next</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export default ProjectReports
