import React from 'react'

function ExpenseReports() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Expense Report</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Expense Report</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    {/* Search Filter */}
    <div className="row filter-row">
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus select-focus">
          <select className="select floating">
            <option>Select buyer</option>
            <option>Loren Gatlin</option>
            <option>Tarah Shropshire</option>
          </select>
          <label className="focus-label">Purchased By</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
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
      <div className="col-sm-6 col-md-3">
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
                <th>Item</th>
                <th>Purchase From</th>
                <th>Purchase Date</th>
                <th>Purchased By</th>
                <th>Amount</th>
                <th>Paid By</th>
                <th className="text-center">Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Dell Laptop</strong>
                </td>
                <td>Amazon</td>
                <td>5 Jan 2019</td>
                <td>
                  <a href="profile" className="avatar avatar-xs">
                    <img
                      src="assets/img/profiles/avatar-04.jpg"
                      alt="User Image"
                    />
                  </a>
                  <h2>
                    <a href="profile">Loren Gatlin</a>
                  </h2>
                </td>
                <td>$ 1215</td>
                <td>Cash</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-danger" />{" "}
                      Pending
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Pending
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
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
                <td>
                  <strong>Mac System</strong>
                </td>
                <td>Amazon</td>
                <td>5 Jan 2019</td>
                <td>
                  <a href="profile" className="avatar avatar-xs">
                    <img
                      src="assets/img/profiles/avatar-03.jpg"
                      alt="User Image"
                    />
                  </a>
                  <h2>
                    <a href="profile">Tarah Shropshire</a>
                  </h2>
                </td>
                <td>$ 1215</td>
                <td>Cheque</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-success" />{" "}
                      Approved
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-danger" />{" "}
                        Pending
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-success" />{" "}
                        Approved
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

export default ExpenseReports
