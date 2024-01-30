import React from 'react'

function EmployeeReports() {
  return (
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col">
          <h3 className="page-title">Employee Report</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Employee Report</li>
          </ul>
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-primary">
            PDF
          </a>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    {/* Content Starts */}
    {/* Search Filter */}
    <div className="row filter-row mb-4">
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus">
          <input className="form-control floating" type="text" />
          <label className="focus-label">Employee</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus select-focus">
          <select className="select floating">
            <option>Select Department</option>
            <option>Designing</option>
            <option>Development</option>
            <option>Finance</option>
            <option>Hr &amp; Finance</option>
          </select>
          <label className="focus-label">Department</label>
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
                <th>Employee Name</th>
                <th>Employee Type</th>
                <th>Email</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Joining Date</th>
                <th>DOB</th>
                <th>Martial Status</th>
                <th>Gender</th>
                <th>Terminated Date</th>
                <th>Relieving Date</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Emercency Contact Details</th>
                <th>Experience</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile" className="text-primary">
                      John Doe <span>#0001</span>
                    </a>
                  </h2>
                </td>
                <td>Employee</td>
                <td className="text-info">
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="d4bebbbcbab0bbb194b1acb5b9a4b8b1fab7bbb9"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>Design</td>
                <td>UI Design</td>
                <td>20 Aug 2020</td>
                <td>03 Mar 1992</td>
                <td>Married</td>
                <td>Male</td>
                <td>-</td>
                <td>-</td>
                <td>$20000</td>
                <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                <td>9876543210</td>
                <td>7894561235</td>
                <td>0 years 4 months and 9 days</td>
                <td>
                  <button className="btn btn-outline-success btn-sm">
                    Active
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile" className="text-primary">
                      Richard Miles <span>#0002</span>
                    </a>
                  </h2>
                </td>
                <td>Employee</td>
                <td className="text-info">
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="35475c565d544751585c59504675504d54584559501b565a58"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>Android Developer</td>
                <td>IT Support</td>
                <td>01 Jul 2020</td>
                <td>05 Dec 1979</td>
                <td>Married</td>
                <td>Male</td>
                <td>-</td>
                <td>-</td>
                <td>$15000</td>
                <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                <td>9876543210</td>
                <td>7894561235</td>
                <td>0 years 5 months and 24 days</td>
                <td>
                  <button className="btn btn-outline-success btn-sm">
                    Active
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile" className="text-primary">
                      John Smith <span>#003</span>
                    </a>
                  </h2>
                </td>
                <td>Employee</td>
                <td className="text-info">
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="eb818483859886829f83ab8e938a869b878ec5888486"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>IOS Developer</td>
                <td>Development Manager</td>
                <td>03 Sep 2020</td>
                <td>16 Apr 1984</td>
                <td>Married</td>
                <td>Male</td>
                <td>-</td>
                <td>-</td>
                <td>$27000</td>
                <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                <td>9876543210</td>
                <td>7894561235</td>
                <td>0 years 3 months and 21 days</td>
                <td>
                  <button className="btn btn-outline-success btn-sm">
                    Active
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile" className="text-primary">
                      Mike Litorus <span>#004</span>
                    </a>
                  </h2>
                </td>
                <td>Employee</td>
                <td className="text-info">
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="f09d999b959c99849f828583b09588919d809c95de939f9d"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>Web Developer</td>
                <td>IT Support</td>
                <td>15 Nov 2020</td>
                <td>15 Jul 2005</td>
                <td>Single</td>
                <td>Male</td>
                <td>-</td>
                <td>-</td>
                <td>$15000</td>
                <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                <td>9876543210</td>
                <td>7894561235</td>
                <td>0 years 1 months and 9 days</td>
                <td>
                  <button className="btn btn-outline-success btn-sm">
                    Active
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-11.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile" className="text-primary">
                      Wilmer Deluna <span>#005</span>
                    </a>
                  </h2>
                </td>
                <td>Employee</td>
                <td className="text-info">
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="32455b5e5f574056575e475c5372574a535f425e571c515d5f"
                  >
                    [email&nbsp;protected]
                  </a>
                </td>
                <td>Team Leader</td>
                <td>Development Manager</td>
                <td>01 Dec 2020</td>
                <td>21 Jun 1984</td>
                <td>Married</td>
                <td>Male</td>
                <td>-</td>
                <td>-</td>
                <td>$25000</td>
                <td>1861 Bayonne Ave, Manchester Township, NJ, 08759</td>
                <td>9876543210</td>
                <td>7894561235</td>
                <td>0 years 0 months and 24 days</td>
                <td>
                  <button className="btn btn-outline-success btn-sm">
                    Active
                  </button>
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

export default EmployeeReports
