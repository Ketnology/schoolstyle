import React from 'react'

function Clients() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Clients</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Clients</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_client"
            >
              <i className="fa-solid fa-plus" /> Add Client
            </a>
            <div className="view-icons">
              <a href="clients" className="grid-view btn btn-link active">
                <i className="fa fa-th" />
              </a>
              <a href="clients-list" className="list-view btn btn-link">
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
            <label className="focus-label">Client ID</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Client Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option>Select Company</option>
              <option>Global Technologies</option>
              <option>Delta Infotech</option>
            </select>
            <label className="focus-label">Company</label>
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
      {/* Search Filter */}
      <div className="row staff-grid-row">
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-19.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
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
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-29.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
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
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-07.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
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
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-06.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
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
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-14.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
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
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-18.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
                  <i className="fa-regular fa-trash-can m-r-5" /> Delete
                </a>
              </div>
            </div>
            <h4 className="user-name m-t-10 mb-0 text-ellipsis">
              <a href="client-profile">International Software Inc</a>
            </h4>
            <h5 className="user-name m-t-10 mb-0 text-ellipsis">
              <a href="client-profile">Walter Weaver</a>
            </h5>
            <div className="small text-muted">CEO</div>
            <a href="chat" className="btn btn-white btn-sm m-t-10">
              Message
            </a>
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-28.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
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
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex">
          <div className="profile-widget w-100">
            <div className="profile-img">
              <a href="client-profile" className="avatar">
                <img src="assets/img/profiles/avatar-13.jpg" alt="User Image" />
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
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_client"
                >
                  <i className="fa-solid fa-pencil m-r-5" /> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_client"
                >
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
            <a href="client-profile" className="btn btn-white btn-sm m-t-10">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* Add Client Modal */}
    <div id="add_client" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Client</h5>
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
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Last Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input className="form-control floating" type="email" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Client ID <span className="text-danger">*</span>
                    </label>
                    <input className="form-control floating" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Company Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="table-responsive m-t-15">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Projects</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Tasks</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Chat</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Estimates</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Invoices</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Timing Sheets</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Client Modal */}
    {/* Edit Client Modal */}
    <div id="edit_client" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Client</h5>
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
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="Barry"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Last Name</label>
                    <input
                      className="form-control"
                      defaultValue="Cuda"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="barrycuda"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control floating"
                      defaultValue="barrycuda@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Password</label>
                    <input
                      className="form-control"
                      defaultValue="barrycuda"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm Password</label>
                    <input
                      className="form-control"
                      defaultValue="barrycuda"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Client ID <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control floating"
                      defaultValue="CLT-0001"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input
                      className="form-control"
                      defaultValue={9876543210}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Company Name</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Global Technologies"
                    />
                  </div>
                </div>
              </div>
              <div className="table-responsive m-t-15">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Projects</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Tasks</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Chat</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Estimates</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Invoices</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Timing Sheets</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked="" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Client Modal */}
    {/* Delete Client Modal */}
    <div className="modal custom-modal fade" id="delete_client" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Client</h3>
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
    {/* /Delete Client Modal */}
  </div>
  
  )
}

export default Clients
