import React from 'react'

function Projects() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Projects</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Projects</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#create_project"
            >
              <i className="fa-solid fa-plus" /> Create Project
            </a>
            <div className="view-icons">
              <a href="projects" className="grid-view btn btn-link active">
                <i className="fa fa-th" />
              </a>
              <a href="project-list" className="list-view btn btn-link">
                <i className="fa-solid fa-bars" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Project Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Employee Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option>Select Designation</option>
              <option>Web Developer</option>
              <option>Web Designer</option>
              <option>Android Developer</option>
              <option>Ios Developer</option>
            </select>
            <label className="focus-label">Designation</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <a href="#" className="btn btn-success w-100">
            {" "}
            Search{" "}
          </a>
        </div>
      </div>
      {/* Search Filter */}
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="dropdown dropdown-action profile-action">
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
                    data-bs-target="#edit_project"
                  >
                    <i className="fa-solid fa-pencil m-r-5" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                  >
                    <i className="fa-regular fa-trash-can m-r-5" /> Delete
                  </a>
                </div>
              </div>
              <h4 className="project-title">
                <a href="project-view">Office Management</a>
              </h4>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">1</span>{" "}
                <span className="text-muted">open tasks, </span>
                <span className="text-xs">9</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown printer took a galley of type and
                scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Doe">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img
                        src="assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Smith">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Mike Litorus">
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
                              <span className="visually-hidden">Previous</span>
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
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                              <span className="visually-hidden">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="m-b-5">
                Progress <span className="text-success float-end">40%</span>
              </p>
              <div className="progress progress-xs mb-0">
                <div
                  className="progress-bar bg-success w-40"
                  role="progressbar"
                  data-bs-toggle="tooltip"
                  title="40%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="dropdown dropdown-action profile-action">
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
                    data-bs-target="#edit_project"
                  >
                    <i className="fa-solid fa-pencil m-r-5" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                  >
                    <i className="fa-regular fa-trash-can m-r-5" /> Delete
                  </a>
                </div>
              </div>
              <h4 className="project-title">
                <a href="project-view">Project Management</a>
              </h4>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">2</span>{" "}
                <span clasrs="text-muted">open tasks, </span>
                <span className="text-xs">5</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown printer took a galley of type and
                scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Doe">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img
                        src="assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Smith">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Mike Litorus">
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
                              <span className="visually-hidden">Previous</span>
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
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                              <span className="visually-hidden">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="m-b-5">
                Progress <span className="text-success float-end">40%</span>
              </p>
              <div className="progress progress-xs mb-0">
                <div
                  className="progress-bar bg-success w-40"
                  role="progressbar"
                  data-bs-toggle="tooltip"
                  title="40%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="dropdown dropdown-action profile-action">
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
                    data-bs-target="#edit_project"
                  >
                    <i className="fa-solid fa-pencil m-r-5" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                  >
                    <i className="fa-regular fa-trash-can m-r-5" /> Delete
                  </a>
                </div>
              </div>
              <h4 className="project-title">
                <a href="project-view">Video Calling App</a>
              </h4>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">3</span>{" "}
                <span className="text-muted">open tasks, </span>
                <span className="text-xs">3</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown printer took a galley of type and
                scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Doe">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img
                        src="assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Smith">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Mike Litorus">
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
                              <span className="visually-hidden">Previous</span>
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
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                              <span className="visually-hidden">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="m-b-5">
                Progress <span className="text-success float-end">40%</span>
              </p>
              <div className="progress progress-xs mb-0">
                <div
                  className="progress-bar bg-success w-40"
                  role="progressbar"
                  data-bs-toggle="tooltip"
                  title="40%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="dropdown dropdown-action profile-action">
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
                    data-bs-target="#edit_project"
                  >
                    <i className="fa-solid fa-pencil m-r-5" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                  >
                    <i className="fa-regular fa-trash-can m-r-5" /> Delete
                  </a>
                </div>
              </div>
              <h4 className="project-title">
                <a href="project-view">Hospital Administration</a>
              </h4>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">12</span>{" "}
                <span className="text-muted">open tasks, </span>
                <span className="text-xs">4</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown printer took a galley of type and
                scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Doe">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img
                        src="assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="John Smith">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" title="Mike Litorus">
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
                              <span className="visually-hidden">Previous</span>
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
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                              <span className="visually-hidden">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="m-b-5">
                Progress <span className="text-success float-end">40%</span>
              </p>
              <div className="progress progress-xs mb-0">
                <div
                  className="progress-bar bg-success w-40"
                  role="progressbar"
                  data-bs-toggle="tooltip"
                  title="40%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* Create Project Modal */}
    <div id="create_project" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Project</h5>
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
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Project Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Client</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Start Date</label>
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
                    <label className="col-form-label">End Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Rate</label>
                    <input
                      placeholder="$50"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="input-block mb-3">
                    <label className="col-form-label">&nbsp;</label>
                    <select className="select">
                      <option>Hourly</option>
                      <option>Fixed</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Priority</label>
                    <select className="select">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Project Leader</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Leader</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Jeffery Lalor"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Team</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Members</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="John Doe"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Richard Miles"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-09.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="John Smith"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-10.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Mike Litorus"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                        />
                      </a>
                      <span className="all-team">+2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Description</label>
                <div id="editor" />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Upload Files</label>
                <input className="form-control" type="file" />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Create Project Modal */}
    {/* Edit Project Modal */}
    <div id="edit_project" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Project</h5>
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
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Project Name</label>
                    <input
                      className="form-control"
                      defaultValue="Project Management"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Client</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Start Date</label>
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
                    <label className="col-form-label">End Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Rate</label>
                    <input
                      placeholder="$50"
                      className="form-control"
                      defaultValue="$5000"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="input-block mb-3">
                    <label className="col-form-label">&nbsp;</label>
                    <select className="select">
                      <option>Hourly</option>
                      <option selected="">Fixed</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Priority</label>
                    <select className="select">
                      <option selected="">High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Project Leader</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Leader</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Jeffery Lalor"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Team</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Members</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="John Doe"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Richard Miles"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-09.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="John Smith"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-10.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Mike Litorus"
                        className="avatar"
                      >
                        <img
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                        />
                      </a>
                      <span className="all-team">+2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Description</label>
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="Enter your message here"
                  defaultValue={""}
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Upload Files</label>
                <input className="form-control" type="file" />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Project Modal */}
    {/* Delete Project Modal */}
    <div className="modal custom-modal fade" id="delete_project" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Project</h3>
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
    {/* /Delete Project Modal */}
  </div>
  
  )
}

export default Projects
