import React from 'react'

function Assets() {
  return (
    <div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Assets</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Assets</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <a
            href="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#add_asset"
          >
            <i className="fa-solid fa-plus" /> Add Asset
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
          <label className="focus-label">Employee Name</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus select-focus">
          <select className="select floating">
            <option value=""> -- Select -- </option>
            <option value={0}> Pending </option>
            <option value={1}> Approved </option>
            <option value={2}> Returned </option>
          </select>
          <label className="focus-label">Status</label>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="row">
          <div className="col-md-6 col-sm-6">
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
          <div className="col-md-6 col-sm-6">
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
        </div>
      </div>
      <div className="col-sm-6 col-md-2">
        <div className="d-grid">
          <a href="#" className="btn btn-success">
            {" "}
            Search{" "}
          </a>
        </div>
      </div>
    </div>
    {/* /Search Filter */}
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped custom-table mb-0 datatable">
            <thead>
              <tr>
                <th>Asset User</th>
                <th>Asset Name</th>
                <th>Asset Id</th>
                <th>Purchase Date</th>
                <th>Warrenty</th>
                <th>Warrenty End</th>
                <th>Amount</th>
                <th className="text-center">Status</th>
                <th className="text-end" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Richard Miles</td>
                <td>
                  <strong>Dell Laptop</strong>
                </td>
                <td>#AST-0001</td>
                <td>5 Jan 2019</td>
                <td>12 Months</td>
                <td>5 Jan 2019</td>
                <td>$1215</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>
                  <strong>Seagate Harddisk</strong>
                </td>
                <td>#AST-0002</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$300</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>
                  <strong>Canon Portable Printer</strong>
                </td>
                <td>#AST-0003</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$2500</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-info" />{" "}
                      Returned
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Mike Litorus</td>
                <td>
                  <strong>Dell Laptop</strong>
                </td>
                <td>#AST-0004</td>
                <td>5 Jan 2019</td>
                <td>12 Months</td>
                <td>5 Jan 2019</td>
                <td>$1215</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Wilmer Deluna</td>
                <td>
                  <strong>Seagate Harddisk</strong>
                </td>
                <td>#AST-0005</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$300</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jeffrey Warden</td>
                <td>
                  <strong>Canon Portable Printer</strong>
                </td>
                <td>#AST-0006</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$2500</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-info" />{" "}
                      Returned
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Bernardo Galaviz</td>
                <td>
                  <strong>Dell Laptop</strong>
                </td>
                <td>#AST-0007</td>
                <td>5 Jan 2019</td>
                <td>12 Months</td>
                <td>5 Jan 2019</td>
                <td>$1215</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lesley Grauer</td>
                <td>
                  <strong>Seagate Harddisk</strong>
                </td>
                <td>#AST-0008</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$300</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jeffery Lalor</td>
                <td>
                  <strong>Canon Portable Printer</strong>
                </td>
                <td>#AST-0009</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$2500</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-info" />{" "}
                      Returned
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Loren Gatlin</td>
                <td>
                  <strong>Dell Laptop</strong>
                </td>
                <td>#AST-0010</td>
                <td>5 Jan 2019</td>
                <td>12 Months</td>
                <td>5 Jan 2019</td>
                <td>$1215</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Tarah Shropshire</td>
                <td>
                  <strong>Seagate Harddisk</strong>
                </td>
                <td>#AST-0011</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$300</td>
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Catherine Manseau</td>
                <td>
                  <strong>Canon Portable Printer</strong>
                </td>
                <td>#AST-0012</td>
                <td>14 Jan 2019</td>
                <td>12 Months</td>
                <td>14 Jan 2019</td>
                <td>$2500</td>
                <td className="text-center">
                  <div className="dropdown action-label">
                    <a
                      className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-dot text-info" />{" "}
                      Returned
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
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-circle-dot text-info" />{" "}
                        Returned
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
                        data-bs-target="#edit_asset"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_asset"
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
  {/* Add Asset Modal */}
  <div id="add_asset" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-md" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Asset</h5>
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
                  <label className="col-form-label">Asset Name</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Asset Id</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Purchase Date</label>
                  <input className="form-control datetimepicker" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Purchase From</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Manufacturer</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Model</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Serial Number</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Supplier</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Condition</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Warranty</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="In Months"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Value</label>
                  <input
                    placeholder="$1800"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Asset User</label>
                  <select className="select">
                    <option>John Doe</option>
                    <option>Richard Miles</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Status</label>
                  <select className="select">
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Deployed</option>
                    <option>Damaged</option>
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
  {/* /Add Asset Modal */}
  {/* Edit Asset Modal */}
  <div id="edit_asset" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-md" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Asset</h5>
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
                  <label className="col-form-label">Asset Name</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Dell Laptop"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Asset Id</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="#AST-0001"
                    readOnly=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Purchase Date</label>
                  <input className="form-control datetimepicker" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Purchase From</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Manufacturer</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Model</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Serial Number</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Supplier</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Condition</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Warranty</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="In Months"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Value</label>
                  <input
                    placeholder="$1800"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Asset User</label>
                  <select className="select">
                    <option>John Doe</option>
                    <option>Richard Miles</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">Status</label>
                  <select className="select">
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Deployed</option>
                    <option>Damaged</option>
                  </select>
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
  {/* Edit Asset Modal */}
  {/* Delete Asset Modal */}
  <div className="modal custom-modal fade" id="delete_asset" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="form-header">
            <h3>Delete Asset</h3>
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
  {/* /Delete Asset Modal */}
</div>

  )
}

export default Assets
