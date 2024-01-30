import React from 'react'

function BreadCrumb() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Breadcrumbs</h5>
        </div>
      </div>
      {/* /Page Header */}
      {/* Breadcrumbs */}
      <div className="col-md-12">
        <div className="card card-buttons">
          <div className="card-body">
            <h5 className="card-title">Basic</h5>
            <p>
              Use an ordered or unordered list with linked list items to create a
              minimally styled breadcrumb. Use our utilities to add additional
              styles as desired.
            </p>
            <div className="rounded border p-4">
              <ol className="breadcrumb text-muted mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item text-muted">Active</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card card-buttons">
          <div className="card-body">
            <h5 className="card-title">Line Separator</h5>
            <p>
              Add <code>.breadcrumb-lineto</code> enable line separator style for
              a breadcrumb.
            </p>
            <div className="rounded border p-4">
              <ol className="breadcrumb breadcrumb-line text-muted mb-0">
                <li className="breadcrumb-item ">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item ">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item text-muted">Active</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card card-buttons">
          <div className="card-body">
            <h5 className="card-title">Dot Separator</h5>
            <p>
              Add <code>.breadcrumb-dot</code> enable line separator style for a
              breadcrumb.
            </p>
            <div className="rounded border p-4">
              <ol className="breadcrumb breadcrumb-dot text-muted mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item text-muted">Active</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card card-buttons">
          <div className="card-body">
            <h5 className="card-title">Without Separator</h5>
            <p>
              Add <code>.breadcrumb-separatorless</code> to remove the separator.
            </p>
            <div className="rounded border p-4">
              <ol className="breadcrumb breadcrumb-separatorless text-muted mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item text-muted">Active</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card card-buttons mb-0">
          <div className="card-body">
            <h5 className="card-title">Colored Breadcrumb</h5>
            <p>
              use class <code> .breadcrumb-colored .bg-primary</code>
            </p>
            <ol className="breadcrumb breadcrumb-colored bg-primary">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" data-bs-original-title="" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
            <ol className="breadcrumb breadcrumb-colored bg-secondary">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" data-bs-original-title="" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
            <ol className="breadcrumb breadcrumb-colored bg-success">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" data-bs-original-title="" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
            <ol className="breadcrumb breadcrumb-colored bg-info">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" data-bs-original-title="" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
            <ol className="breadcrumb breadcrumb-colored bg-warning">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" data-bs-original-title="" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
            <ol className="breadcrumb breadcrumb-colored bg-danger">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" data-bs-original-title="" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
            <ol className="breadcrumb breadcrumb-colored bg-dark mb-0">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)" data-bs-original-title="" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Library</li>
            </ol>
          </div>
        </div>
      </div>
      {/* /Breadcrumbs */}
    </div>
  </div>
  
  )
}

export default BreadCrumb
