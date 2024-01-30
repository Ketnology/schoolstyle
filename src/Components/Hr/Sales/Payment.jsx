import React from 'react'

function Payment() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Payments</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Payments</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped custom-table datatable mb-0">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client</th>
                <th>Payment Type</th>
                <th>Paid Date</th>
                <th>Paid Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="invoice-view">#INV-0001</a>
                </td>
                <td>
                  <h2>
                    <a href="#">Global Technologies</a>
                  </h2>
                </td>
                <td>Paypal</td>
                <td>8 Feb 2019</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>
                  <a href="invoice-view">#INV-0002</a>
                </td>
                <td>
                  <h2>
                    <a href="#">Delta Infotech</a>
                  </h2>
                </td>
                <td>Paypal</td>
                <td>8 Feb 2019</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>
                  <a href="invoice-view">#INV-0003</a>
                </td>
                <td>
                  <h2>
                    <a href="#">Cream Inc</a>
                  </h2>
                </td>
                <td>Paypal</td>
                <td>8 Feb 2019</td>
                <td>$500</td>
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

export default Payment
