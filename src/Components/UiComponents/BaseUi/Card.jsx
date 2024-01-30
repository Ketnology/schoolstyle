import React from 'react'

function Card() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Cards</h5>
        </div>
      </div>
      {/* /Page Header */}
      {/* Cards */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <img
              alt="Card Image"
              src="assets/img/img-01.jpg"
              className="card-img-top"
            />
            <div className="card-header">
              <h5 className="card-title mb-0">Card with image and links</h5>
            </div>
            <div className="card-body card-buttons">
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a className="card-link" href="#">
                Card link
              </a>
              <a className="card-link" href="#">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <img
              alt="Card Image"
              src="assets/img/img-01.jpg"
              className="card-img-top"
            />
            <div className="card-header">
              <h5 className="card-title mb-0">Card with image and button</h5>
            </div>
            <div className="card-body card-buttons">
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a className="btn btn-primary" href="#">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <img
              alt="Card Image"
              src="assets/img/img-01.jpg"
              className="card-img-top"
            />
            <div className="card-header">
              <h5 className="card-title mb-0">Card with image and list</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <div className="card-header">
              <h5 className="card-title mb-0">Card with links</h5>
            </div>
            <div className="card-body card-buttons">
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a className="card-link" href="#">
                Card link
              </a>
              <a className="card-link" href="#">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <div className="card-header">
              <h5 className="card-title mb-0">Card with button</h5>
            </div>
            <div className="card-body card-buttons">
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a className="btn btn-primary" href="#">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <div className="card-header">
              <h5 className="card-title mb-0">Card with list</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <div className="card-header">This is my header</div>
            <div className="card-body card-buttons">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
            <div className="card-footer text-muted">This is my footer</div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <div className="card-header">
              <ul
                role="tablist"
                className="nav nav-tabs card-header-tabs float-end"
              >
                <li className="nav-item">
                  <a
                    href="#tab-1"
                    data-bs-toggle="tab"
                    className="nav-link active"
                  >
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-2" data-bs-toggle="tab" className="nav-link">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#tab-3"
                    data-bs-toggle="tab"
                    className="nav-link disabled"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body card-buttons">
              <div className="tab-content pt-0">
                <div
                  role="tabpanel"
                  id="tab-1"
                  className="tab-pane fade show active"
                >
                  <h5 className="card-title">Card with tabs</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Go somewhere
                  </a>
                </div>
                <div
                  role="tabpanel"
                  id="tab-2"
                  className="tab-pane fade text-center"
                >
                  <h5 className="card-title">Card with tabs</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Go somewhere
                  </a>
                </div>
                <div role="tabpanel" id="tab-3" className="tab-pane fade">
                  <h5 className="card-title">Card with tabs</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <div className="card flex-fill bg-white">
            <div className="card-header">
              <ul role="tablist" className="nav nav-pills card-header-pills">
                <li className="nav-item">
                  <a
                    href="#tab-4"
                    data-bs-toggle="tab"
                    className="nav-link active"
                  >
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-5" data-bs-toggle="tab" className="nav-link">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#tab-6"
                    data-bs-toggle="tab"
                    className="nav-link disabled"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body card-buttons">
              <div className="tab-content pt-0">
                <div
                  role="tabpanel"
                  id="tab-4"
                  className="tab-pane fade show active"
                >
                  <h5 className="card-title">Card with pills</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Go somewhere
                  </a>
                </div>
                <div
                  role="tabpanel"
                  id="tab-5"
                  className="tab-pane fade text-center"
                >
                  <h5 className="card-title">Card with pills</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Go somewhere
                  </a>
                </div>
                <div role="tabpanel" id="tab-6" className="tab-pane fade">
                  <h5 className="card-title">Card with pills</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Cards */}
    </div>
  </div>
  
  )
}

export default Card
