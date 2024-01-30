import React from 'react'

function TaskReport() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Task Reports</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Task Reports</li>
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
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
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
                <th>Task Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Assigned To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Hospital Administration</td>
                <td>26 Mar 2019</td>
                <td>26 Apr 2021</td>
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
                        data-bs-toggle="tooltip"
                        title=""
                        data-original-title="Jeffery Lalor"
                      >
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Hospital Administration</td>
                <td>26 Mar 2019</td>
                <td>26 Apr 2021</td>
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
                        data-bs-toggle="tooltip"
                        title=""
                        data-original-title="Jeffery Lalor"
                      >
                        <img
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="User Image"
                        />
                      </a>
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

export default TaskReport
