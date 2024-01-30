import React from 'react'

function BlankPage() {
  return (
    <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Blank Page</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Blank Page</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    {/* Content Starts */}
    Content Starts Here
    {/* /Content End */}
  </div>
  
  )
}

export default BlankPage
