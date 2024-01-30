import React from 'react'

function Budget() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Budgets</h3>
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
              <i className="fa-solid fa-plus" /> Add Budgets
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
                  <th>Budget No</th>
                  <th>Budget Title</th>
                  <th>Budget Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Total Revenue</th>
                  <th>Total Expenses</th>
                  <th>Tax Amount</th>
                  <th>Budget Amount</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tender</td>
                  <td>Project</td>
                  <td>01 Jan 2021</td>
                  <td>31 Dec 2021</td>
                  <td>2500000</td>
                  <td>1500000</td>
                  <td>10</td>
                  <td>999990</td>
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
                  <td>Project</td>
                  <td>Project</td>
                  <td>01 Feb 2021</td>
                  <td>30 Apr 2021</td>
                  <td>100000</td>
                  <td>50000</td>
                  <td>1000</td>
                  <td>49000</td>
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
            <h5 className="modal-title">Add Budget</h5>
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
              <div className="input-block mb-3">
                <label className="col-form-label">Budget Title</label>
                <input
                  className="form-control"
                  type="text"
                  name="budget_title"
                  placeholder="Budgets Title"
                />
              </div>
              <label className="col-form-label">Choose Budget Respect Type</label>
              <div className="input-block mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input BudgetType"
                    type="radio"
                    name="budget_type"
                    id="project2"
                    defaultValue="project"
                  />
                  <label className="form-check-label" htmlFor="project2">
                    Project
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input BudgetType"
                    type="radio"
                    name="budget_type"
                    id="category1"
                    defaultValue="category"
                  />
                  <label className="form-check-label" htmlFor="category1">
                    Category
                  </label>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Start Date</label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    type="text"
                    name="budget_start_date"
                    placeholder="Start Date"
                    data-date-format="dd-mm-yyyy"
                  />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">End Date</label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    type="text"
                    name="budget_end_date"
                    placeholder="End Date"
                    data-date-format="dd-mm-yyyy"
                  />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Expected Revenues</label>
              </div>
              <div className="AllRevenuesClass">
                <div className="row AlLRevenues">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Revenue Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control RevenuETitle"
                        defaultValue=""
                        placeholder="Revenue Title"
                        name="revenue_title[]"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Revenue Amount <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="revenue_amount[]"
                        placeholder="Amount"
                        defaultValue=""
                        className="form-control RevenuEAmount"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-1">
                    <div className="add-more">
                      <a className="add_more_revenue" title="Add Revenue">
                        <i className="fa-solid fa-plus-circle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overall Revenues <span className="text-danger">(A)</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="overall_revenues"
                  id="overall_revenues1"
                  placeholder="Overall Revenues"
                  readOnly=""
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Expected Expenses</label>
              </div>
              <div className="AllExpensesClass">
                <div className="row AlLExpenses">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Expenses Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control EXpensesTItle"
                        defaultValue=""
                        placeholder="Expenses Title"
                        name="expenses_title[]"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Expenses Amount <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="expenses_amount[]"
                        placeholder="Amount"
                        defaultValue=""
                        className="form-control EXpensesAmount"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-1">
                    <div className="add-more">
                      <a className="add_more_expenses" title="Add Expenses">
                        <i className="fa-solid fa-plus-circle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overall Expense <span className="text-danger">(B)</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="overall_expenses"
                  id="overall_expenses1"
                  placeholder="Overall Expenses"
                  readOnly=""
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Expected Profit{" "}
                  <span className="text-danger">( C = A - B )</span>{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="expected_profit"
                  id="expected_profit1"
                  placeholder="Expected Profit"
                  readOnly=""
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Tax <span className="text-danger">(D)</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="tax_amount"
                  id="tax_amount1"
                  placeholder="Tax Amount"
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Budget Amount <span className="text-danger">( E = C - D )</span>{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="budget_amount"
                  id="budget_amount1"
                  placeholder="Budget Amount"
                  readOnly=""
                />
              </div>
              <div className=" submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Modal */}
    {/* Edit Modal */}
    <div className="modal custom-modal fade" id="edit_categories" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Budget</h5>
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
              <div className="input-block mb-3">
                <label className="col-form-label">Budget Title</label>
                <input
                  className="form-control"
                  type="text"
                  name="budget_title"
                  placeholder="Budgets Title"
                />
              </div>
              <label className="col-form-label">Choose Budget Respect Type</label>
              <div className="input-block mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input BudgetType"
                    type="radio"
                    name="budget_type"
                    id="project1"
                    defaultValue="project"
                  />
                  <label className="form-check-label" htmlFor="project1">
                    Project
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input BudgetType"
                    type="radio"
                    name="budget_type"
                    id="category"
                    defaultValue="category"
                  />
                  <label className="form-check-label" htmlFor="category">
                    Category
                  </label>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Start Date</label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    type="text"
                    name="budget_start_date"
                    placeholder="Start Date"
                    data-date-format="dd-mm-yyyy"
                  />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">End Date</label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    type="text"
                    name="budget_end_date"
                    placeholder="End Date"
                    data-date-format="dd-mm-yyyy"
                  />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Expected Revenues</label>
              </div>
              <div className="AllRevenuesClass">
                <div className="row AlLRevenues">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Revenue Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control RevenuETitle"
                        defaultValue=""
                        placeholder="Revenue Title"
                        name="revenue_title[]"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Revenue Amount <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="revenue_amount[]"
                        placeholder="Amount"
                        defaultValue=""
                        className="form-control RevenuEAmount"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-1">
                    <div className="add-more">
                      <a className="add_more_revenue" title="Add Revenue">
                        <i className="fa-solid fa-plus-circle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overall Revenues <span className="text-danger">(A)</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="overall_revenues"
                  id="overall_revenues"
                  placeholder="Overall Revenues"
                  readOnly=""
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Expected Expenses</label>
              </div>
              <div className="AllExpensesClass">
                <div className="row AlLExpenses">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Expenses Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control EXpensesTItle"
                        defaultValue=""
                        placeholder="Expenses Title"
                        name="expenses_title[]"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Expenses Amount <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="expenses_amount[]"
                        placeholder="Amount"
                        defaultValue=""
                        className="form-control EXpensesAmount"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-1">
                    <div className="add-more">
                      <a className="add_more_expenses" title="Add Expenses">
                        <i className="fa-solid fa-plus-circle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Overall Expense <span className="text-danger">(B)</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="overall_expenses"
                  id="overall_expenses"
                  placeholder="Overall Expenses"
                  readOnly=""
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Expected Profit{" "}
                  <span className="text-danger">( C = A - B )</span>{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="expected_profit"
                  id="expected_profit"
                  placeholder="Expected Profit"
                  readOnly=""
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Tax <span className="text-danger">(D)</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="tax_amount"
                  id="tax_amount"
                  placeholder="Tax Amount"
                />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Budget Amount <span className="text-danger">( E = C - D )</span>{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="budget_amount"
                  id="budget_amount"
                  placeholder="Budget Amount"
                  readOnly=""
                />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Modal */}
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

export default Budget
