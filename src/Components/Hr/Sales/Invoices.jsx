import React from 'react'

function Invoices() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Invoices</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Invoices</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a href="create-invoice" className="btn add-btn">
              <i className="fa-solid fa-plus" /> Create Invoice
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Search Filter */}
      <div className="row filter-row">
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
          <div className="input-block mb-3 form-focus select-focus">
            <select className="select floating">
              <option>Select Status</option>
              <option>Pending</option>
              <option>Paid</option>
              <option>Partially Paid</option>
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
            <table className="table table-striped custom-table mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Invoice Number</th>
                  <th>Client</th>
                  <th>Created Date</th>
                  <th>Due Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a href="invoice-view">#INV-0001</a>
                  </td>
                  <td>Global Technologies</td>
                  <td>11 Mar 2019</td>
                  <td>17 Mar 2019</td>
                  <td>$2099</td>
                  <td>
                    <span className="badge bg-inverse-success">Paid</span>
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
                        <a className="dropdown-item" href="edit-invoice">
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a className="dropdown-item" href="invoice-view">
                          <i className="fa-solid fa-eye m-r-5" /> View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-file-pdf m-r-5" /> Download
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
                    <a href="invoice-view">#INV-0002</a>
                  </td>
                  <td>Delta Infotech</td>
                  <td>11 Mar 2019</td>
                  <td>17 Mar 2019</td>
                  <td>$2099</td>
                  <td>
                    <span className="badge bg-inverse-info">Sent</span>
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
                        <a className="dropdown-item" href="edit-invoice">
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a className="dropdown-item" href="invoice-view">
                          <i className="fa-solid fa-eye m-r-5" /> View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-file-pdf m-r-5" /> Download
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
                    <a href="invoice-view">#INV-0003</a>
                  </td>
                  <td>Cream Inc</td>
                  <td>11 Mar 2019</td>
                  <td>17 Mar 2019</td>
                  <td>$2099</td>
                  <td>
                    <span className="badge bg-inverse-warning">
                      Partially Paid
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
                        <a className="dropdown-item" href="edit-invoice">
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a className="dropdown-item" href="invoice-view">
                          <i className="fa-solid fa-eye m-r-5" /> View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-file-pdf m-r-5" /> Download
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

export default Invoices
