import React from 'react'

function UserReports() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">User Report</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">User Reports</li>
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
          <label className="focus-label">User Role</label>
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
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Role</th>
                <th>Designation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
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
                <td>Global Technologies</td>
                <td>
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="77151605050e1402131637120f161a071b125914181a"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>
                  <span className="badge bg-inverse-info">Client</span>
                </td>
                <td>CEO</td>
                <td>
                  <div className="dropdown action-label">
                    <a href="#" className="btn btn-white btn-sm btn-rounded">
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Active{" "}
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
                        src="assets/img/profiles/avatar-21.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile">
                      Daniel Porter <span>Admin</span>
                    </a>
                  </h2>
                </td>
                <td>Focus Technologies</td>
                <td>
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="e084818e89858c908f92948592a08598818d908c85ce838f8d"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>
                  <span className="badge bg-inverse-danger">Admin</span>
                </td>
                <td>Admin Manager</td>
                <td>
                  <div className="dropdown action-label">
                    <a href="#" className="btn btn-white btn-sm btn-rounded">
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Active{" "}
                    </a>
                  </div>
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

export default UserReports
