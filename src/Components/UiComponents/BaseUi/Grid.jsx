import React from 'react'

function Grid() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Grid</h5>
        </div>
      </div>
      {/* /Page Header */}
      {/* Start Content*/}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body card-buttons">
              <h4 className="header-title">Grid options</h4>
              <p className="text-muted">
                See how aspects of the Bootstrap grid system work across multiple
                devices with a handy table.
              </p>
              <div className="table-responsive">
                <table className="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th />
                      <th className="text-center">
                        Extra small
                        <br />
                        <small>&lt;576px</small>
                      </th>
                      <th className="text-center">
                        Small
                        <br />
                        <small>≥576px</small>
                      </th>
                      <th className="text-center">
                        Medium
                        <br />
                        <small>≥768px</small>
                      </th>
                      <th className="text-center">
                        Large
                        <br />
                        <small>≥992px</small>
                      </th>
                      <th className="text-center">
                        Extra large
                        <br />
                        <small>≥1200px</small>
                      </th>
                      <th className="text-center">
                        Extra Extra large
                        <br />
                        <small>≥1400px</small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Max container width
                      </th>
                      <td>None (auto)</td>
                      <td>540px</td>
                      <td>720px</td>
                      <td>960px</td>
                      <td>1140px</td>
                      <td>1320px</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Class prefix
                      </th>
                      <td>
                        <code>.col-</code>
                      </td>
                      <td>
                        <code>.col-sm-</code>
                      </td>
                      <td>
                        <code>.col-md-</code>
                      </td>
                      <td>
                        <code>.col-lg-</code>
                      </td>
                      <td>
                        <code>.col-xl-</code>
                      </td>
                      <td>
                        <code>.col-xxl-</code>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        # of columns
                      </th>
                      <td colSpan={6}>12</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Gutter width
                      </th>
                      <td colSpan={6}>24px (12px on each side of a column)</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Custom gutters
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Nestable
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Column ordering
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>{" "}
              {/* end table-responsive*/}
            </div>
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-12">
          <div className="card mb-0">
            <div className="card-body">
              <h4 className="header-title mb-3">Grid Example</h4>
              <div className="grid-structure">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="grid-container">col-lg-12</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-11">
                    <div className="grid-container">col-lg-11</div>
                  </div>
                  <div className="col-lg-1">
                    <div className="grid-container">col-lg-1</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10">
                    <div className="grid-container">col-lg-10</div>
                  </div>
                  <div className="col-lg-2">
                    <div className="grid-container">col-lg-2</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="grid-container">col-lg-9</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="grid-container">col-lg-3</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="grid-container">col-lg-8</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="grid-container">col-lg-4</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="grid-container">col-lg-7</div>
                  </div>
                  <div className="col-lg-5">
                    <div className="grid-container">col-lg-5</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="grid-container">col-lg-6</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="grid-container">col-lg-6</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="grid-container">col-lg-5</div>
                  </div>
                  <div className="col-lg-7">
                    <div className="grid-container">col-lg-7</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="grid-container">col-lg-4</div>
                  </div>
                  <div className="col-lg-8">
                    <div className="grid-container">col-lg-8</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="grid-container">col-lg-3</div>
                  </div>
                  <div className="col-lg-9">
                    <div className="grid-container">col-lg-9</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2">
                    <div className="grid-container">col-lg-2</div>
                  </div>
                  <div className="col-lg-10">
                    <div className="grid-container">col-lg-10</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    <div className="grid-container">col-lg-1</div>
                  </div>
                  <div className="col-lg-11">
                    <div className="grid-container">col-lg-11</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2">
                    <div className="grid-container">col-lg-2</div>
                  </div>
                  <div className="col-lg-3">
                    <div className="grid-container">col-lg-3</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="grid-container">col-lg-4</div>
                  </div>
                  <div className="col-lg-2">
                    <div className="grid-container">col-lg-2</div>
                  </div>
                  <div className="col-lg-1">
                    <div className="grid-container">col-lg-1</div>
                  </div>
                </div>{" "}
                {/* end row */}
              </div>{" "}
              {/* grid-structure */}
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
      </div>
      {/* end row*/}
      {/* /Page Wrapper */}
    </div>
  </div>
  
  )
}

export default Grid
