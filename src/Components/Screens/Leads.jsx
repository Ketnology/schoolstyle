import React from 'react'

function Leads() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Leads</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Leads</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped table-nowrap custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Lead Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Project</th>
                  <th>Assigned Staff</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Wilmer Deluna</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="87f0eeebeae2f5e3e2ebf2e9e6c7e2ffe6eaf7ebe2a9e4e8ea"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Hospital Administration</a>
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
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>10 hours ago</td>
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
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Lesley Grauer</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="4529203629203c22372430203705203d24283529206b262a28"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Video Calling App</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>5 Mar 2019</td>
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
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Jeffery Lalor</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="066c63606063747f6a676a697446637e676b766a632865696b"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Office Management</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>27 Feb 2019</td>
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
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Wilmer Deluna</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="fc8b959091998e98999089929dbc99849d918c9099d29f9391"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Hospital Administration</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>10 hours ago</td>
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
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Lesley Grauer</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="c2aea7b1aea7bba5b0a3b7a7b082a7baa3afb2aea7eca1adaf"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Video Calling App</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>5 Mar 2019</td>
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
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Jeffery Lalor</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="8ce6e9eaeae9fef5e0ede0e3fecce9f4ede1fce0e9a2efe3e1"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Office Management</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>27 Feb 2019</td>
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
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Wilmer Deluna</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="95e2fcf9f8f0e7f1f0f9e0fbf4d5f0edf4f8e5f9f0bbf6faf8"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Hospital Administration</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>10 hours ago</td>
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
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Lesley Grauer</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="4b272e38272e322c392a3e2e390b2e332a263b272e65282426"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Video Calling App</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>5 Mar 2019</td>
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
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <h2 className="table-avatar">
                      <a href="#" className="avatar">
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="#">Jeffery Lalor</a>
                    </h2>
                  </td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="94fef1f2f2f1e6edf8f5f8fbe6d4f1ecf5f9e4f8f1baf7fbf9"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>9876543210</td>
                  <td>
                    <a href="project-view">Office Management</a>
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
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="badge bg-inverse-success">Working</span>
                  </td>
                  <td>27 Feb 2019</td>
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
  </div>
  
  )
}

export default Leads
