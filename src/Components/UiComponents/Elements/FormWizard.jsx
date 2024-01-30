import React from 'react'

function FormWizard() {
  return (
  <>
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Form Wizard</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Lightbox */}
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Basic Wizard</h4>
            </div>
            <div className="card-body">
              <div className="wizard">
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li
                    className="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Seller Details"
                  >
                    <a
                      className="nav-link active rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      href="#step1"
                      id="step1-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-controls="step1"
                      aria-selected="true"
                    >
                      <i className="far fa-user" />
                    </a>
                  </li>
                  <li
                    className="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Company Document"
                  >
                    <a
                      className="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      href="#step2"
                      id="step2-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-controls="step2"
                      aria-selected="false"
                    >
                      <i className="fas fa-map-pin" />
                    </a>
                  </li>
                  <li
                    className="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Bank Details"
                  >
                    <a
                      className="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      href="#step3"
                      id="step3-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-controls="step3"
                      aria-selected="false"
                    >
                      <i className="fas fa-credit-card" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    role="tabpanel"
                    id="step1"
                    aria-labelledby="step1-tab"
                  >
                    <div className="mb-4">
                      <h5>Enter Your Personal Details</h5>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-firstname-input"
                              className="form-label"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-firstname-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-lastname-input"
                              className="form-label"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-lastname-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-phoneno-input"
                              className="form-label"
                            >
                              Phone
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-phoneno-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-email-input"
                              className="form-label"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="basicpill-email-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex">
                      <a className="btn btn btn-primary next">Next</a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    role="tabpanel"
                    id="step2"
                    aria-labelledby="step2-tab"
                  >
                    <div className="mb-4">
                      <h5>Enter Your Address</h5>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-pancard-input"
                              className="form-label"
                            >
                              Address 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-pancard-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-vatno-input"
                              className="form-label"
                            >
                              Address 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-vatno-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-cstno-input"
                              className="form-label"
                            >
                              Landmark
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-cstno-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-servicetax-input"
                              className="form-label"
                            >
                              Town
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-servicetax-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex">
                      <a className="btn btn btn-primary previous me-2"> Back</a>
                      <a className="btn btn btn-primary next">Continue</a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    role="tabpanel"
                    id="step3"
                    aria-labelledby="step3-tab"
                  >
                    <div className="mb-4">
                      <h5>Payment Details</h5>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-namecard-input"
                              className="form-label"
                            >
                              Name on Card
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-namecard-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label className="form-label">Credit Card Type</label>
                            <select className="form-select">
                              <option selected="">Select Card Type</option>
                              <option value="AE">American Express</option>
                              <option value="VI">Visa</option>
                              <option value="MC">MasterCard</option>
                              <option value="DI">Discover</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-cardno-input"
                              className="form-label"
                            >
                              Credit Card Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-cardno-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-card-verification-input"
                              className="form-label"
                            >
                              Card Verification Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-card-verification-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-block mb-3">
                            <label
                              htmlFor="basicpill-expiration-input"
                              className="form-label"
                            >
                              Expiration Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-expiration-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex">
                      <a className="btn btn-primary previous me-2">Previous</a>
                      <a
                        className="btn btn-primary next"
                        data-bs-toggle="modal"
                        data-bs-target="#save_modal"
                      >
                        Save Changes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal custom-modal fade" id="save_modal" role="dialog">
  <div className="modal-dialog modal-dialog-centered modal-md">
    <div className="modal-content">
      <div className="modal-body">
        <div className="form-header">
          <h3>Confirm Save Changes</h3>
          <p>Are you sure want to Confirm Save Changes?</p>
        </div>
        <div className="modal-btn delete-action">
          <div className="row">
            <div className="col-6">
              <button
                type="reset"
                data-bs-dismiss="modal"
                className="w-100 btn btn-primary paid-continue-btn"
              >
                Save Changes
              </button>
            </div>
            <div className="col-6">
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="w-100 btn btn-primary paid-cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  
  )
}

export default FormWizard
