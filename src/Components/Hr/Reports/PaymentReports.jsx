import React from 'react'

function PaymentReports() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Payments Report</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Payments Report</li>
          </ul>
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
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Client Name</th>
                <th>Payment Method</th>
                <th>Invoice</th>
                <th className="text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <a href="#">834521</a>
                </td>
                <td>2nd Dec 2020</td>
                <td>Dreams</td>
                <td>Online</td>
                <td>
                  <a href="#">INV0001</a>
                </td>
                <td className="text-center">$4,329,970.7</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <a href="#">834521</a>
                </td>
                <td>2nd Dec 2020</td>
                <td>Dreams</td>
                <td>Online</td>
                <td>
                  <a href="#">INV0001</a>
                </td>
                <td className="text-center">$4,329,970.7</td>
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

export default PaymentReports
