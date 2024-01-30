import React from 'react'

function PayslipReport() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Payslip Reports</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Payslip Reports</li>
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
          <input type="text" className="form-control floating" />
          <label className="focus-label">Employee Name</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus">
          <select className="form-control floating select">
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
          </select>
          <label className="focus-label">Month</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus">
          <select className="form-control floating select">
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
          <label className="focus-label">Year</label>
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
                <th>Employee Name</th>
                <th>Paid Amount</th>
                <th>Payment Month</th>
                <th>Payment Year</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-13.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile">
                      Bernardo Galaviz <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>$200</td>
                <td>Apr</td>
                <td>2019</td>
                <td className="text-center">
                  {" "}
                  <a href="#" className="btn btn-sm btn-primary">
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-12.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile">
                      Jeffrey Warden <span>Web Developer</span>
                    </a>
                  </h2>
                </td>
                <td>$300</td>
                <td>Dec</td>
                <td>2020</td>
                <td className="text-center">
                  {" "}
                  <a href="#" className="btn btn-sm btn-primary">
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile">
                      John Doe <span>Web Designer</span>
                    </a>
                  </h2>
                </td>
                <td>$400</td>
                <td>Jun</td>
                <td>2020</td>
                <td className="text-center">
                  {" "}
                  <a href="#" className="btn btn-sm btn-primary">
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile">
                      John Smith <span>Android Developer</span>
                    </a>
                  </h2>
                </td>
                <td>$500</td>
                <td>Feb</td>
                <td>2020</td>
                <td className="text-center">
                  {" "}
                  <a href="#" className="btn btn-sm btn-primary">
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile">
                      Mike Litorus <span>IOS Developer</span>
                    </a>
                  </h2>
                </td>
                <td>$600</td>
                <td>Jan</td>
                <td>2020</td>
                <td className="text-center">
                  {" "}
                  <a href="#" className="btn btn-sm btn-primary">
                    PDF
                  </a>
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

export default PayslipReport
