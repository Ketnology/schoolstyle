import React from 'react'

function StickyNote() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Sticky Note</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Sticky */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">
                Sticky Note{" "}
                <a
                  className="btn btn-primary float-sm-end m-l-10"
                  id="add_new"
                  href="javascript:;"
                >
                  Add New Note
                </a>
              </h5>
            </div>
            <div className="card-body">
              <div className="sticky-note" id="board" />
            </div>
          </div>
        </div>
        {/* /Sticky */}
      </div>
    </div>
  </div>
  
  )
}

export default StickyNote
