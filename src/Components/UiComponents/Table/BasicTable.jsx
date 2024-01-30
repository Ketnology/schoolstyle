import React from 'react'

function BasicTable() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col">
            <h3 className="page-title">Basic Tables</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Basic Tables</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Basic Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="88e2e7e0e6c8edf0e9e5f8e4eda6ebe7e5"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="4924283b30092c31282439252c672a2624"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="81ebf4edf8c1e4f9e0ecf1ede4afe2eeec"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Striped Rows</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="13797c7b7d53766b727e637f763d707c7e"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="bbd6dac9c2fbdec3dad6cbd7de95d8d4d6"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="cea4bba2b78eabb6afa3bea2abe0ada1a3"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Bordered Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="0c666364624c69746d617c6069226f6361"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="640905161d24011c05091408014a070b09"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="f298879e8bb2978a939f829e97dc919d9f"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Hover Rows</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="6d070205032d08150c001d0108430e0200"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="d1bcb0a3a891b4a9b0bca1bdb4ffb2bebc"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="650f10091c25001d04081509004b060a08"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Contextual Classes</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Default</td>
                      <td>Defaultson</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="d9bdbcbf99aab6b4bcb4b8b0b5f7bab6b4"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-primary">
                      <td>Primary</td>
                      <td>Doe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="b9d3d6d1d7f9dcc1d8d4c9d5dc97dad6d4"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-secondary">
                      <td>Secondary</td>
                      <td>Moe</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="86ebe7f4ffc6e3fee7ebf6eae3a8e5e9eb"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-success">
                      <td>Success</td>
                      <td>Dooley</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="87edf2ebfec7e2ffe6eaf7ebe2a9e4e8ea"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-danger">
                      <td>Danger</td>
                      <td>Refs</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="b9dbd6f9dcc1d8d4c9d5dc97dad6d4"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-warning">
                      <td>Warning</td>
                      <td>Activeson</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="f1909285b19489909c819d94df929e9c"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-info">
                      <td>Info</td>
                      <td>Activeson</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="c0a1a3b480a5b8a1adb0aca5eea3afad"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-light">
                      <td>Light</td>
                      <td>Activeson</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="9dfcfee9ddf8e5fcf0edf1f8b3fef2f0"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                    <tr className="table-dark">
                      <td>Dark</td>
                      <td>Activeson</td>
                      <td>
                        <a
                          href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="bddcdec9fdd8c5dcd0cdd1d893ded2d0"
                        >
                          [email&nbsp;protected]
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Responsive Tables</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default BasicTable
