import React from 'react'

function Search() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Search</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Search</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Content Starts */}
      <div className="row">
        <div className="col-12">
          {/* Search Form */}
          <div className="main-search">
            <form action="#">
              <div className="input-group">
                <input type="text" className="form-control" />
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* /Search Form */}
          <div className="search-result">
            <h3>
              Search Result Found For: <u>Keyword</u>
            </h3>
            <p>215 Results found</p>
          </div>
          <div className="search-lists">
            <ul className="nav nav-tabs nav-tabs-solid">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#results_projects"
                  data-bs-toggle="tab"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#results_clients"
                  data-bs-toggle="tab"
                >
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#results_users"
                  data-bs-toggle="tab"
                >
                  Users
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="results_projects">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                    <div className="card">
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
                              <i className="fa-regular fa-trash-can m-r-5" />{" "}
                              Delete
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <div className="pro-deadline m-b-15">
                          <div className="sub-title">Deadline:</div>
                          <div className="text-muted">17 Apr 2019</div>
                        </div>
                        <div className="project-members m-b-15">
                          <div>Project Leader :</div>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
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
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="John Doe"
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
                                data-bs-toggle="tooltip"
                                title="Richard Miles"
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
                                data-bs-toggle="tooltip"
                                title="John Smith"
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
                                data-bs-toggle="tooltip"
                                title="Mike Litorus"
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
                                        <span className="visually-hidden">
                                          Next
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p className="m-b-5">
                          Progress{" "}
                          <span className="text-success float-end">40%</span>
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
                  <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                    <div className="card">
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
                              <i className="fa-regular fa-trash-can m-r-5" />{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="project-title">
                          <a href="project-view">Project Management</a>
                        </h4>
                        <small className="block text-ellipsis m-b-15">
                          <span className="text-xs">2</span>{" "}
                          <span className="text-muted">open tasks, </span>
                          <span className="text-xs">5</span>{" "}
                          <span className="text-muted">tasks completed</span>
                        </small>
                        <p className="text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <div className="pro-deadline m-b-15">
                          <div className="sub-title">Deadline:</div>
                          <div className="text-muted">17 Apr 2019</div>
                        </div>
                        <div className="project-members m-b-15">
                          <div>Project Leader :</div>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
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
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="John Doe"
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
                                data-bs-toggle="tooltip"
                                title="Richard Miles"
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
                                data-bs-toggle="tooltip"
                                title="John Smith"
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
                                data-bs-toggle="tooltip"
                                title="Mike Litorus"
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
                                        <span className="visually-hidden">
                                          Next
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p className="m-b-5">
                          Progress{" "}
                          <span className="text-success float-end">40%</span>
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
                  <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                    <div className="card">
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
                              <i className="fa-regular fa-trash-can m-r-5" />{" "}
                              Delete
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <div className="pro-deadline m-b-15">
                          <div className="sub-title">Deadline:</div>
                          <div className="text-muted">17 Apr 2019</div>
                        </div>
                        <div className="project-members m-b-15">
                          <div>Project Leader :</div>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
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
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="John Doe"
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
                                data-bs-toggle="tooltip"
                                title="Richard Miles"
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
                                data-bs-toggle="tooltip"
                                title="John Smith"
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
                                data-bs-toggle="tooltip"
                                title="Mike Litorus"
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
                                        <span className="visually-hidden">
                                          Next
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p className="m-b-5">
                          Progress{" "}
                          <span className="text-success float-end">40%</span>
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
                  <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                    <div className="card">
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
                              <i className="fa-regular fa-trash-can m-r-5" />{" "}
                              Delete
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <div className="pro-deadline m-b-15">
                          <div className="sub-title">Deadline:</div>
                          <div className="text-muted">17 Apr 2019</div>
                        </div>
                        <div className="project-members m-b-15">
                          <div>Project Leader :</div>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
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
                              <a
                                href="#"
                                data-bs-toggle="tooltip"
                                title="John Doe"
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
                                data-bs-toggle="tooltip"
                                title="Richard Miles"
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
                                data-bs-toggle="tooltip"
                                title="John Smith"
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
                                data-bs-toggle="tooltip"
                                title="Mike Litorus"
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
                                        <span className="visually-hidden">
                                          Next
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p className="m-b-5">
                          Progress{" "}
                          <span className="text-success float-end">40%</span>
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
              <div className="tab-pane" id="results_clients">
                <div className="row staff-grid-row">
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-19.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Global Technologies</a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Barry Cuda</a>
                      </h5>
                      <div className="small text-muted">CEO</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-29.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Delta Infotech</a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Tressa Wexler</a>
                      </h5>
                      <div className="small text-muted">Manager</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Cream Inc</a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Ruby Bartlett</a>
                      </h5>
                      <div className="small text-muted">CEO</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Wellware Company</a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Misty Tison</a>
                      </h5>
                      <div className="small text-muted">CEO</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-14.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Mustang Technologies</a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Daniel Deacon</a>
                      </h5>
                      <div className="small text-muted">CEO</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-18.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">
                          International Software Inc
                        </a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Walter Weaver</a>
                      </h5>
                      <div className="small text-muted">CEO</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-28.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Mercury Software Inc</a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Amanda Warren</a>
                      </h5>
                      <div className="small text-muted">CEO</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
                    <div className="profile-widget w-100">
                      <div className="profile-img">
                        <a href="client-profile" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-13.jpg"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
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
                            <i className="fa-solid fa-pencil m-r-5" /> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Carlson Tech</a>
                      </h4>
                      <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="client-profile">Betty Carlson</a>
                      </h5>
                      <div className="small text-muted">CEO</div>
                      <a href="chat" className="btn btn-white btn-sm m-t-10">
                        Message
                      </a>
                      <a
                        href="client-profile"
                        className="btn btn-white btn-sm m-t-10"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="results_users">
                <div className="table-responsive">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Created Date</th>
                        <th>Role</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-21.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile">
                              Daniel Porter <span>Admin</span>
                            </a>
                          </h2>
                        </td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="89ede8e7e0ece5f9e6fbfdecfbc9ecf1e8e4f9e5eca7eae6e4"
                          >
                            [email&nbsp;protected]
                          </a>
                        </td>
                        <td>Dreamguy's Technologies</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <span className="badge bg-inverse-danger">Admin</span>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa-regular fa-trash-can m-r-5" />{" "}
                                Delete
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
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="b5dfdadddbd1dad0f5d0cdd4d8c5d9d09bd6dad8"
                          >
                            [email&nbsp;protected]
                          </a>
                        </td>
                        <td>Dreamguy's Technologies</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <span className="badge bg-inverse-success">
                            Employee
                          </span>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa-regular fa-trash-can m-r-5" />{" "}
                                Delete
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
                              Richard Miles <span>Admin</span>
                            </a>
                          </h2>
                        </td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="5f2d363c373e2d3b3236333a2c1f3a273e322f333a713c3032"
                          >
                            [email&nbsp;protected]
                          </a>
                        </td>
                        <td>Dreamguy's Technologies</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <span className="badge bg-inverse-success">
                            Employee
                          </span>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa-regular fa-trash-can m-r-5" />{" "}
                                Delete
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
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="5a303532342937332e321a3f223b372a363f74393537"
                          >
                            [email&nbsp;protected]
                          </a>
                        </td>
                        <td>Dreamguy's Technologies</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <span className="badge bg-inverse-success">
                            Employee
                          </span>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa-regular fa-trash-can m-r-5" />{" "}
                                Delete
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
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="6e0307050b02071a011c1b1d2e0b160f031e020b400d0103"
                          >
                            [email&nbsp;protected]
                          </a>
                        </td>
                        <td>Dreamguy's Technologies</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <span className="badge bg-inverse-success">
                            Employee
                          </span>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa-regular fa-trash-can m-r-5" />{" "}
                                Delete
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
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="0a7d6366676f786e6f667f646b4a6f726b677a666f24696567"
                          >
                            [email&nbsp;protected]
                          </a>
                        </td>
                        <td>Dreamguy's Technologies</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <span className="badge bg-inverse-success">
                            Employee
                          </span>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa-regular fa-trash-can m-r-5" />{" "}
                                Delete
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
                                src="assets/img/profiles/avatar-19.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile">
                              Barry Cuda <span>Global Technologies</span>
                            </a>
                          </h2>
                        </td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="680a091a1a110b1d0c09280d10090518040d460b0705"
                          >
                            [email&nbsp;protected]
                          </a>
                        </td>
                        <td>Global Technologies</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <span className="badge bg-inverse-info">Client</span>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                              </a>
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
      </div>
      {/* /Content End */}
    </div>
    {/* /Page Content */}
  </div>
  
  )
}

export default Search
