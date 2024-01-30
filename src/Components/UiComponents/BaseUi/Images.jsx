import React from 'react'

function Images() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Images</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body card-buttons">
              <div className="row">
                <div className="col-xl-6">
                  <h4 className="header-title">Images shapes</h4>
                  <p>
                    Add classes to an <code>&lt;img&gt;</code> element to easily
                    style images in any project.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        src="assets/img/img-4.jpg"
                        alt="image"
                        className="img-fluid rounded"
                        width={200}
                      />
                      <p className="mb-0">
                        <code>.rounded</code>
                      </p>
                    </div>
                    <div className="col-sm-4 text-center">
                      <img
                        src="assets/img/user-6.jpg"
                        alt="image"
                        className="img-fluid rounded-circle"
                        width={120}
                      />
                      <p className="mb-0">
                        <code>.rounded-circle</code>
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <img
                        src="assets/img/img-1.jpg"
                        alt="image"
                        className="img-fluid img-thumbnail"
                        width={200}
                      />
                      <p className="mb-0">
                        <code>.img-thumbnail</code>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-0">
            <div className="card-body card-buttons">
              <div className="row">
                <div className="col-xl-6 mt-3 mt-xl-0">
                  <h4 className="header-title">Image sizes</h4>
                  <p>
                    Add classes to an <code>&lt;img&gt;</code> element to easily
                    style images in any project.
                  </p>
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        src="assets/img/user-5.jpg"
                        alt="image"
                        className="img-fluid avatar-xs rounded"
                      />
                      <p className="mb-0">
                        <code>.avatar-xs</code>
                      </p>
                      <img
                        src="assets/img/user-5.jpg"
                        alt="image"
                        className="img-fluid avatar-sm rounded mt-2"
                      />
                      <p className="mb-0">
                        <code>.avatar-sm</code>
                      </p>
                    </div>
                    <div className="col-sm-3">
                      <img
                        src="assets/img/user-5.jpg"
                        alt="image"
                        className="img-fluid avatar-md rounded"
                      />
                      <p className="mb-0">
                        <code>.avatar-md</code>
                      </p>
                    </div>
                    <div className="col-sm-3">
                      <img
                        src="assets/img/user-5.jpg"
                        alt="image"
                        className="img-fluid avatar-lg rounded"
                      />
                      <p className="mb-0">
                        <code>.avatar-lg</code>
                      </p>
                    </div>
                    <div className="col-sm-3">
                      <img
                        src="assets/img/user-5.jpg"
                        alt="image"
                        className="img-fluid avatar-xl rounded"
                      />
                      <p className="mb-0">
                        <code>.avatar-xl</code>
                      </p>
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>
      {/* end row*/}
    </div>
  </div>
  
  )
}

export default Images
