import React from 'react'

function Subscribed() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col">
          <h3 className="page-title">Subscribed Companies</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Subscriptions</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-md-3">
        <div className="stats-info">
          <h6>Joining</h6>
          <h4>
            12 <span>This Month</span>
          </h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stats-info">
          <h6>Renewal</h6>
          <h4>
            3 <span>This Month</span>
          </h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stats-info">
          <h6>Renewal</h6>
          <h4>
            0 <span>Next Month</span>
          </h4>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stats-info">
          <h6>Total Companies</h6>
          <h4>312</h4>
        </div>
      </div>
    </div>
    {/* Company List */}
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-hover custom-table datatable mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>Plan</th>
                <th>Users</th>
                <th>Plan Duration</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Amount</th>
                <th>Plan Status</th>
                <th>Update Plan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="client-profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-19.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="client-profile">Global Technologies</a>
                  </h2>
                </td>
                <td>Free Trial</td>
                <td>30</td>
                <td>6 Months</td>
                <td>15 Feb 2019</td>
                <td>14 Jul 2019</td>
                <td>$200</td>
                <td>
                  <span className="badge bg-inverse-success">Active</span>
                </td>
                <td>
                  <a
                    className="btn btn-primary btn-sm"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#upgrade_plan"
                  >
                    Change Plan
                  </a>
                </td>
                <td>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="company_status_1"
                      className="check"
                    />
                    <label htmlFor="company_status_1" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="client-profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-29.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="client-profile">Delta Infotech</a>
                  </h2>
                </td>
                <td>Premium</td>
                <td>50</td>
                <td>1 Year</td>
                <td>15 Feb 2019</td>
                <td>14 Feb 2020</td>
                <td>$200</td>
                <td>
                  <span className="badge bg-inverse-danger">Expired</span>
                </td>
                <td>
                  <a
                    className="btn btn-primary btn-sm"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#upgrade_plan"
                  >
                    Change Plan
                  </a>
                </td>
                <td>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="company_status_2"
                      className="check"
                      defaultChecked=""
                    />
                    <label htmlFor="company_status_2" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="client-profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-07.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="client-profile">Cream Inc</a>
                  </h2>
                </td>
                <td>Professional</td>
                <td>10</td>
                <td>1 Month</td>
                <td>15 Feb 2019</td>
                <td>14 Feb 2020</td>
                <td>Free</td>
                <td>
                  <span className="badge bg-inverse-success">Active</span>
                </td>
                <td>
                  <a
                    className="btn btn-primary btn-sm"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#upgrade_plan"
                  >
                    Change Plan
                  </a>
                </td>
                <td>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="company_status_3"
                      className="check"
                      defaultChecked=""
                    />
                    <label htmlFor="company_status_3" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="client-profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-06.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="client-profile">Wellware Company</a>
                  </h2>
                </td>
                <td>Enterprise</td>
                <td>10</td>
                <td>1 Month</td>
                <td>15 Feb 2019</td>
                <td>14 Feb 2020</td>
                <td>Free</td>
                <td>
                  <span className="badge bg-inverse-success">Active</span>
                </td>
                <td>
                  <a
                    className="btn btn-primary btn-sm"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#upgrade_plan"
                  >
                    Change Plan
                  </a>
                </td>
                <td>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="company_status_4"
                      className="check"
                      defaultChecked=""
                    />
                    <label htmlFor="company_status_4" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="client-profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-14.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="client-profile">Mustang Technologies</a>
                  </h2>
                </td>
                <td>Free Trial</td>
                <td>10</td>
                <td>1 Year</td>
                <td>15 Feb 2019</td>
                <td>14 Feb 2020</td>
                <td>Free</td>
                <td>
                  <span className="badge bg-inverse-success">Active</span>
                </td>
                <td>
                  <a
                    className="btn btn-primary btn-sm"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#upgrade_plan"
                  >
                    Change Plan
                  </a>
                </td>
                <td>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="company_status_5"
                      className="check"
                      defaultChecked=""
                    />
                    <label htmlFor="company_status_5" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="client-profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-18.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="client-profile">International Software Inc</a>
                  </h2>
                </td>
                <td>Enterprise</td>
                <td>10</td>
                <td>1 Month</td>
                <td>15 Feb 2019</td>
                <td>14 Feb 2020</td>
                <td>Free</td>
                <td>
                  <span className="badge bg-inverse-success">Active</span>
                </td>
                <td>
                  <a
                    className="btn btn-primary btn-sm"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#upgrade_plan"
                  >
                    Change Plan
                  </a>
                </td>
                <td>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="company_status_6"
                      className="check"
                      defaultChecked=""
                    />
                    <label htmlFor="company_status_6" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="client-profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-28.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="client-profile">Mercury Software Inc</a>
                  </h2>
                </td>
                <td>Professional</td>
                <td>10</td>
                <td>1 Year</td>
                <td>15 Feb 2019</td>
                <td>14 Feb 2020</td>
                <td>Free</td>
                <td>
                  <span className="badge bg-inverse-success">Active</span>
                </td>
                <td>
                  <a
                    className="btn btn-primary btn-sm"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#upgrade_plan"
                  >
                    Change Plan
                  </a>
                </td>
                <td>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="company_status_7"
                      className="check"
                      defaultChecked=""
                    />
                    <label htmlFor="company_status_7" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* /Company List */}
    {/* Upgrade Plan Modal */}
    <div className="modal custom-modal fade" id="upgrade_plan" role="dialog">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal">
            <i className="fa fa-close" />
          </button>
          <div className="modal-body">
            <h5 className="modal-title text-center mb-3">Upgrade Plan</h5>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Plan Name</label>
                    <input
                      type="text"
                      placeholder="Free Trial"
                      className="form-control"
                      defaultValue="Free Trial"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="$500"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Plan Type</label>
                    <select className="select">
                      <option> Monthly </option>
                      <option> Yearly </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">No of Users</label>
                    <select className="select">
                      <option> 5 Users </option>
                      <option> 50 Users </option>
                      <option> Unlimited </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">No of Projects</label>
                    <select className="select">
                      <option> 5 Projects </option>
                      <option> 50 Projects </option>
                      <option> Unlimited </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      No of Storage Space
                    </label>
                    <select className="select">
                      <option> 5 GB </option>
                      <option> 100 GB </option>
                      <option> 500 GB </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">Plan Description</label>
                <textarea
                  className="form-control"
                  rows={4}
                  cols={30}
                  defaultValue={""}
                />
              </div>
              <div className="input-block mb-3">
                <label className="d-block col-form-label">Status</label>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="upgrade_plan_status"
                    className="check"
                  />
                  <label htmlFor="upgrade_plan_status" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
              <div className="m-t-20 text-center">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Upgrade Plan Modal */}
  </div>
  {/* /Page Content */}
</div>

  )
}

export default Subscribed
