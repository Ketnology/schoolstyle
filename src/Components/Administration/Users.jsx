import React from 'react'

function Users() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Users</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Users</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_user"
            >
              <i className="fa-solid fa-plus" /> Add User
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Name</label>
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
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option>Select Role</option>
              <option>Web Developer</option>
              <option>Web Designer</option>
              <option>Android Developer</option>
              <option>Ios Developer</option>
            </select>
            <label className="focus-label">Role</label>
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
            <table className="table table-striped custom-table datatable">
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
                      data-cfemail="ceaaafa0a7aba2bea1bcbaabbc8eabb6afa3bea2abe0ada1a3"
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
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_user"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_user"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
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
                      data-cfemail="fd97929593999298bd98859c908d9198d39e9290"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>Dreamguy's Technologies</td>
                  <td>1 Jan 2013</td>
                  <td>
                    <span className="badge bg-inverse-success">Employee</span>
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
                          data-bs-target="#edit_user"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_user"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
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
                      data-cfemail="f88a919b90998a9c9591949d8bb89d80999588949dd69b9795"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>Dreamguy's Technologies</td>
                  <td>1 Jan 2013</td>
                  <td>
                    <span className="badge bg-inverse-success">Employee</span>
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
                          data-bs-target="#edit_user"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_user"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
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
                      data-cfemail="f69c999e98859b9f829eb6938e979b869a93d895999b"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>Dreamguy's Technologies</td>
                  <td>1 Jan 2013</td>
                  <td>
                    <span className="badge bg-inverse-success">Employee</span>
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
                          data-bs-target="#edit_user"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_user"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
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
                      data-cfemail="c8a5a1a3ada4a1bca7babdbb88adb0a9a5b8a4ade6aba7a5"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>Dreamguy's Technologies</td>
                  <td>1 Jan 2013</td>
                  <td>
                    <span className="badge bg-inverse-success">Employee</span>
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
                          data-bs-target="#edit_user"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_user"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
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
                      data-cfemail="35425c59585047515059405b5475504d54584559501b565a58"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>Dreamguy's Technologies</td>
                  <td>1 Jan 2013</td>
                  <td>
                    <span className="badge bg-inverse-success">Employee</span>
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
                          data-bs-target="#edit_user"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_user"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
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
                      data-cfemail="2b494a595952485e4f4a6b4e534a465b474e05484446"
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
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_user"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_user"
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
    {/* Add User Modal */}
    <div id="add_user" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add User</h5>
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
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Last Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Role</label>
                    <select className="select">
                      <option>Admin</option>
                      <option>Client</option>
                      <option>Employee</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Company</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control floating" />
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
                      <td>Employee</td>
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
                      <td>Holidays</td>
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
                      <td>Leaves</td>
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
                      <td>Events</td>
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
    {/* /Add User Modal */}
    {/* Edit User Modal */}
    <div id="edit_user" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
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
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="John"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Last Name</label>
                    <input
                      className="form-control"
                      defaultValue="Doe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="johndoe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="johndoe@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input
                      className="form-control"
                      defaultValue={9876543210}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Role</label>
                    <select className="select">
                      <option>Admin</option>
                      <option>Client</option>
                      <option selected="">Employee</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Company</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="FT-0001"
                      className="form-control floating"
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
                      <td>Employee</td>
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
                      <td>Holidays</td>
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
                      <td>Leaves</td>
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
                      <td>Events</td>
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
    {/* /Edit User Modal */}
    {/* Delete User Modal */}
    <div className="modal custom-modal fade" id="delete_user" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete User</h3>
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
    {/* /Delete User Modal */}
  </div>
  
  )
}

export default Users
