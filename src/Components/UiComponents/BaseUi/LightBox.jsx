import React from 'react'

function LightBox() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Lightbox</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Lightbox */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Single Image Lightbox</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-2 mb-md-0">
                  <a href="assets/img/img-01.jpg" className="image-popup">
                    <img
                      src="assets/img/img-01.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="col-md-4 mb-2 mb-md-0">
                  <a href="assets/img/img-02.jpg" className="image-popup">
                    <img
                      src="assets/img/img-02.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Lightbox */}
        {/* Lightbox */}
        <div className="col-md-12">
          <div className="card mb-0">
            <div className="card-header">
              <h5 className="card-title">Image with Description</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-2 mb-md-0">
                  <a
                    href="assets/img/img-03.jpg"
                    className="image-popup-desc"
                    data-title="Title 01"
                    data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                  >
                    <img
                      src="assets/img/img-03.jpg"
                      className="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
                <div className="col-md-4 mb-2 mb-md-0">
                  <a
                    href="assets/img/img-04.jpg"
                    className="image-popup-desc"
                    data-title="Title 02"
                    data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                  >
                    <img
                      src="assets/img/img-04.jpg"
                      className="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
                <div className="col-md-4 mb-2 mb-md-0">
                  <a
                    href="assets/img/img-05.jpg"
                    className="image-popup-desc"
                    data-title="Title 03"
                    data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                  >
                    <img
                      src="assets/img/img-05.jpg"
                      className="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Lightbox */}
      </div>
    </div>
  </div>
  
  )
}

export default LightBox
