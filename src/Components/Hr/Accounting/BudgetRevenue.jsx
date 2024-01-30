import React from 'react'

function BudgetRevenue() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Budgets Revenues</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Accounts</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_categories"
            >
              <i className="fa-solid fa-plus" /> Add Revenues
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table mb-0">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Notes</th>
                  <th>Category Name</th>
                  <th>SubCategory Name</th>
                  <th>Amount</th>
                  <th>Revenue Date</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>test</td>
                  <td>Project</td>
                  <td>Project Expenses</td>
                  <td>1000.00</td>
                  <td>06 Jan 2020</td>
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
                          data-bs-target="#edit_categories"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete"
                        >
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>test</td>
                  <td>Hardware</td>
                  <td>Hardware Expenses</td>
                  <td>1000.00</td>
                  <td>06 Jan 2020</td>
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
                          data-bs-target="#edit_categories"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete"
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
    {/* Add Modal */}
    <div className="modal custom-modal fade" id="add_categories" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Revenues</h5>
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
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Amount
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={800.0}
                    name="amount"
                  />
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Notes
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <textarea
                    className="form-control ta"
                    name="notes"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Revenue Date
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <input
                    className="datepicker-input form-control"
                    type="text"
                    defaultValue="06-05-2021"
                    name="revenue_date"
                    data-date-format="dd-mm-yyyy"
                  />
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Category
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <select
                    name="category"
                    className="form-control m-b form-select"
                    id="main_category"
                  >
                    <option value="" disabled="" selected="">
                      Choose Category
                    </option>
                    <option value={1}>project1</option>
                    <option value={3}>test category</option>
                    <option value={4}>Hardware</option>
                    <option value={5}>Material</option>
                    <option value={6}>Vehicle</option>
                    <option value={8}>TestctrE</option>
                    <option value={9}>Twocatr</option>
                    <option value={10}>fesferwf</option>
                  </select>
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Sub Category
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <select
                    name="sub_category"
                    className="form-control m-b form-select"
                    id="sub_category"
                  >
                    <option value="">Choose Sub-Category</option>
                    <option value={1}>project1</option>
                    <option value={3}>test category</option>
                    <option value={4}>Hardware</option>
                  </select>
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Attach File
                </label>
                <div className="col-lg-12">
                  <input
                    type="file"
                    className="form-control"
                    data-buttontext="Choose File"
                    data-icon="false"
                    data-classbutton="btn btn-default"
                    data-classinput="form-control inline input-s"
                    name="receipt"
                  />
                </div>
              </div>
              <div className="m-t-20 text-center">
                <button className="btn btn-primary btn-lg BudgetAddBtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Modal */}
    {/* Add Modal */}
    <div className="modal custom-modal fade" id="edit_categories" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Revenues</h5>
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
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Amount
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={800.0}
                    name="amount"
                  />
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Notes
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <textarea
                    className="form-control ta"
                    name="notes"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Revenue Date
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <input
                    className="datepicker-input form-control"
                    type="text"
                    defaultValue="06-05-2021"
                    name="revenue_date"
                    data-date-format="dd-mm-yyyy"
                  />
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Category
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <select
                    name="category"
                    className="form-control m-b form-select"
                    id="main_category_2"
                  >
                    <option value="" disabled="" selected="">
                      Choose Category
                    </option>
                    <option value={1}>project1</option>
                    <option value={3}>test category</option>
                    <option value={4}>Hardware</option>
                    <option value={5}>Material</option>
                    <option value={6}>Vehicle</option>
                    <option value={8}>TestctrE</option>
                    <option value={9}>Twocatr</option>
                    <option value={10}>fesferwf</option>
                  </select>
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Sub Category
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <select
                    name="sub_category"
                    className="form-control m-b form-select"
                    id="sub_category_2"
                  >
                    <option value="">Choose Sub-Category</option>
                    <option value={1}>project1</option>
                    <option value={3}>test category</option>
                    <option value={4}>Hardware</option>
                  </select>
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-lg-12 control-label col-form-label">
                  Attach File
                </label>
                <div className="col-lg-12">
                  <input
                    type="file"
                    className="form-control"
                    data-buttontext="Choose File"
                    data-icon="false"
                    data-classbutton="btn btn-default"
                    data-classinput="form-control inline input-s"
                    name="receipt"
                  />
                </div>
              </div>
              <div className="m-t-20 text-center">
                <button className="btn btn-primary btn-lg BudgetAddBtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Modal */}
    {/* Delete Holiday Modal */}
    <div className="modal custom-modal fade" id="delete" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete </h3>
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
    {/* /Delete Holiday Modal */}
  </div>
  
  )
}

export default BudgetRevenue
