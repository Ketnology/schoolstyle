import React from 'react'

function TrainingList() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Training</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Training</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_training"
            >
              <i className="fa-solid fa-plus" /> Add New{" "}
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
                  <th>Training Type</th>
                  <th>Trainer</th>
                  <th>Employee</th>
                  <th>Time Duration</th>
                  <th>Description </th>
                  <th>Cost </th>
                  <th>Status </th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Git Training</td>
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
                  <td>
                    <ul className="team-members">
                      <li>
                        <a
                          href="#"
                          title="Bernardo Galaviz"
                          data-bs-toggle="tooltip"
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
                          title="Richard Miles"
                          data-bs-toggle="tooltip"
                        >
                          <img
                            src="assets/img/profiles/avatar-09.jpg"
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
                  <td>7 May 2019 - 10 May 2019</td>
                  <td>Lorem ipsum dollar</td>
                  <td>$400</td>
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
                          data-bs-target="#edit_training"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_training"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Swift Training</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="profile" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-09.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">Richard Miles</a>
                    </h2>
                  </td>
                  <td>
                    <ul className="team-members">
                      <li>
                        <a href="#" title="John Doe" data-bs-toggle="tooltip">
                          <img
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="User Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Richard Miles"
                          data-bs-toggle="tooltip"
                        >
                          <img
                            src="assets/img/profiles/avatar-09.jpg"
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
                  <td>7 May 2019 - 10 May 2019</td>
                  <td>Lorem ipsum dollar</td>
                  <td>$800</td>
                  <td>
                    <div className="dropdown action-label">
                      <a
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Inactive
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
                          data-bs-target="#edit_training"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_training"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Node Training</td>
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
                  <td>
                    <ul className="team-members">
                      <li>
                        <a
                          href="#"
                          title="Bernardo Galaviz"
                          data-bs-toggle="tooltip"
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
                          title="Richard Miles"
                          data-bs-toggle="tooltip"
                        >
                          <img
                            src="assets/img/profiles/avatar-09.jpg"
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
                  <td>7 May 2019 - 10 May 2019</td>
                  <td>Lorem ipsum dollar</td>
                  <td>$400</td>
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
                          data-bs-target="#edit_training"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_training"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Angular Training</td>
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
                  <td>
                    <ul className="team-members">
                      <li>
                        <a
                          href="#"
                          title="Bernardo Galaviz"
                          data-bs-toggle="tooltip"
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
                          title="Richard Miles"
                          data-bs-toggle="tooltip"
                        >
                          <img
                            src="assets/img/profiles/avatar-09.jpg"
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
                  <td>7 May 2019 - 10 May 2019</td>
                  <td>Lorem ipsum dollar</td>
                  <td>$400</td>
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
                          data-bs-target="#edit_training"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_training"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Git Training</td>
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
                  <td>
                    <ul className="team-members">
                      <li>
                        <a
                          href="#"
                          title="Bernardo Galaviz"
                          data-bs-toggle="tooltip"
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
                          title="Richard Miles"
                          data-bs-toggle="tooltip"
                        >
                          <img
                            src="assets/img/profiles/avatar-09.jpg"
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
                  <td>7 May 2019 - 10 May 2019</td>
                  <td>Lorem ipsum dollar</td>
                  <td>$400</td>
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
                          data-bs-target="#edit_training"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_training"
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
    {/* Add Training List Modal */}
    <div id="add_training" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Training</h5>
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
                    <label className="col-form-label">Training Type</label>
                    <select className="select">
                      <option>Node Training</option>
                      <option>Swift Training</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Trainer</label>
                    <select className="select">
                      <option>Mike Litorus </option>
                      <option>John Doe</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Employees</label>
                    <select className="select">
                      <option>Bernardo Galaviz</option>
                      <option>Jeffrey Warden</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Training Cost <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Start Date <span className="text-danger">*</span>
                    </label>
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
                    <label className="col-form-label">
                      End Date <span className="text-danger">*</span>
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
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
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
    {/* /Add Training List Modal */}
    {/* Edit Training List Modal */}
    <div id="edit_training" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Training List</h5>
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
                    <label className="col-form-label">Training Type</label>
                    <select className="select">
                      <option selected="">Node Training</option>
                      <option>Swift Training</option>
                      <option>Git Training</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Trainer</label>
                    <select className="select">
                      <option>Mike Litorus </option>
                      <option selected="">John Doe</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Employees</label>
                    <select className="select">
                      <option>Bernardo Galaviz</option>
                      <option selected="">Jeffrey Warden</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Training Cost <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$400"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Start Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        defaultValue="07-08-2019"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      End Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        defaultValue="10-08-2019"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={"Lorem ipsum ismap"}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>
                    <select className="select">
                      <option selected="">Active</option>
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
    {/* /Edit Training List Modal */}
    {/* Delete Training List Modal */}
    <div className="modal custom-modal fade" id="delete_training" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Training List</h3>
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
    {/* /Delete Training List Modal */}
  </div>
  
  )
}

export default TrainingList
