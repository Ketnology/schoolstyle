import React from 'react'

function EmployeeSalary() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Employee Salary</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Salary</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_salary"
            >
              <i className="fa-solid fa-plus" /> Add Salary
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus">
            <input type="text" className="form-control floating" />
            <label className="focus-label">Employee Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option value=""> -- Select -- </option>
              <option value="">Employee</option>
              <option value={1}>Manager</option>
            </select>
            <label className="focus-label">Role</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option> -- Select -- </option>
              <option> Pending </option>
              <option> Approved </option>
              <option> Rejected </option>
            </select>
            <label className="focus-label">Leave Status</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
                  <th>Employee</th>
                  <th>Employee ID</th>
                  <th>Email</th>
                  <th>Join Date</th>
                  <th>Role</th>
                  <th>Salary</th>
                  <th>Payslip</th>
                  <th className="text-end">Action</th>
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
                        John Doe <span>Web Designer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0001</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="a3c9cccbcdc7ccc6e3c6dbc2ced3cfc68dc0ccce"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Designer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$59698</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                        Richard Miles <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0002</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="dba9b2b8b3baa9bfb6b2b7bea89bbea3bab6abb7bef5b8b4b6"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$72000</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                  <td>FT-0003</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="42282d2a2c312f2b362a02273a232f322e276c212d2f"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Android Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$48200</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                  <td>FT-0004</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="d7babebcb2bbbea3b8a5a2a497b2afb6baa7bbb2f9b4b8ba"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        IOS Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$59698</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                  <td>FT-0005</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="55223c39383027313039203b3415302d34382539307b363a38"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Team Leader{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$43000</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                          src="assets/img/profiles/avatar-12.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Jeffrey Warden <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0006</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="2f454a49495d4a56584e5d4b4a416f4a574e425f434a014c4042"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$45000</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                          src="assets/img/profiles/avatar-13.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Bernardo Galaviz <span>Web Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0007</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="83e1e6f1ede2f1e7ece4e2efe2f5eaf9c3e6fbe2eef3efe6ade0ecee"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2014</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Web Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$38400</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Lesley Grauer <span>Team Leader</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0008</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="8be7eef8e7eef2ecf9eafeeef9cbeef3eae6fbe7eea5e8e4e6"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jun 2015</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Team Leader{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$75500</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Jeffery Lalor <span>Team Leader</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0009</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="bcd6d9dadad9cec5d0ddd0d3cefcd9c4ddd1ccd0d992dfd3d1"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Team Leader{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$73550</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                          src="assets/img/profiles/avatar-04.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Loren Gatlin <span>Android Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0010</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="402c2f32252e2721342c292e002538212d302c256e232f2d"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Android Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$55000</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="profile">
                        Tarah Shropshire <span>Android Developer</span>
                      </a>
                    </h2>
                  </td>
                  <td>FT-0011</td>
                  <td>
                    <a
                      href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="b6c2d7c4d7dec5dec4d9c6c5dedfc4d3f6d3ced7dbc6dad398d5d9db"
                    >
                      [email&nbsp;protected]
                    </a>
                  </td>
                  <td>1 Jan 2013</td>
                  <td>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Android Developer{" "}
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Software Engineer
                        </a>
                        <a className="dropdown-item" href="#">
                          Software Tester
                        </a>
                        <a className="dropdown-item" href="#">
                          Frontend Developer
                        </a>
                        <a className="dropdown-item" href="#">
                          UI/UX Developer
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>$92400</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="salary-view">
                      Generate Slip
                    </a>
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
                          data-bs-target="#edit_salary"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_salary"
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
    {/* Add Salary Modal */}
    <div id="add_salary" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Staff Salary</h5>
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
            <form action="https://smarthr.dreamstechnologies.com/html/template/salary">
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Select Staff</label>
                    <select className="select">
                      <option>John Doe</option>
                      <option>Richard Miles</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="col-form-label">Net Salary</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <h4 className="text-primary">Earnings</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Basic</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">DA(40%)</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">HRA(15%)</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Conveyance</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Allowance</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Medical Allowance</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Others</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="add-more">
                    <a href="#">
                      <i className="fa-solid fa-plus-circle" /> Add More
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4 className="text-primary">Deductions</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">TDS</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">ESI</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">PF</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Leave</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Prof. Tax</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Labour Welfare</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Others</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="add-more">
                    <a href="#">
                      <i className="fa-solid fa-plus-circle" /> Add More
                    </a>
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
    {/* /Add Salary Modal */}
    {/* Edit Salary Modal */}
    <div id="edit_salary" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-md"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Staff Salary</h5>
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
            <form action="https://smarthr.dreamstechnologies.com/html/template/salary">
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Select Staff</label>
                    <select className="select">
                      <option>John Doe</option>
                      <option>Richard Miles</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="col-form-label">Net Salary</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="$4000"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <h4 className="text-primary">Earnings</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Basic</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$6500"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">DA(40%)</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$2000"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">HRA(15%)</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$700"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Conveyance</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$70"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Allowance</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$30"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Medical Allowance</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$20"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Others</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4 className="text-primary">Deductions</h4>
                  <div className="input-block mb-3">
                    <label className="col-form-label">TDS</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$300"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">ESI</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$20"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">PF</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$20"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Leave</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$250"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Prof. Tax</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$110"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Labour Welfare</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$10"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Fund</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$40"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Others</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$15"
                    />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Salary Modal */}
    {/* Delete Salary Modal */}
    <div className="modal custom-modal fade" id="delete_salary" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Salary</h3>
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
    {/* /Delete Salary Modal */}
  </div>
  
  )
}

export default EmployeeSalary
