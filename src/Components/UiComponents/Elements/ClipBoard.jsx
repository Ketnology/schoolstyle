import React from 'react'

function ClipBoard() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Clipboard</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Drag Card */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy from input</h5>
            </div>
            <div className="card-body">
              <div className="clipboard">
                <form className="form-horizontal">
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="input-copy"
                    defaultValue="http://www.admin-dashboard.com/"
                  />
                  <a
                    className="mb-1 btn clip-btn btn-primary"
                    href="javascript:;"
                    data-clipboard-action="copy"
                    data-clipboard-target="#input-copy"
                  >
                    <i className="far fa-copy" /> Copy from Input
                  </a>
                  <a
                    className="mb-1 btn clip-btn btn-dark"
                    href="javascript:;"
                    data-clipboard-action="cut"
                    data-clipboard-target="#input-copy"
                  >
                    <i className="fas fa-cut" /> Cut from Input
                  </a>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy from Text Area</h5>
            </div>
            <div className="card-body">
              <div className="clipboard">
                <form className="form-horizontal">
                  <textarea
                    className="form-control mb-4"
                    rows={3}
                    id="textarea-copy"
                    defaultValue={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    }
                  />
                  <a
                    className="mb-1 btn clip-btn btn-primary"
                    href="javascript:;"
                    data-clipboard-action="copy"
                    data-clipboard-target="#textarea-copy"
                  >
                    <i className="far fa-copy" /> Copy from Input
                  </a>
                  <a
                    className="mb-1 btn clip-btn btn-dark"
                    href="javascript:;"
                    data-clipboard-action="cut"
                    data-clipboard-target="#textarea-copy"
                  >
                    <i className="fas fa-cut" /> Cut from Input
                  </a>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy Text from Paragraph</h5>
            </div>
            <div className="card-body">
              <div className="clipboard copy-txt">
                <p className="otp-pass">
                  Here is your OTP <span id="paragraph-copy1">22991</span>.
                </p>
                <p className="mb-4">Please do not share it to anyone</p>
                <a
                  className="mb-1 btn clip-btn btn-primary"
                  href="javascript:;"
                  data-clipboard-action="copy"
                  data-clipboard-target="#paragraph-copy1"
                >
                  <i className="far fa-copy" /> Copy from Input
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy Hidden Text (Advanced)</h5>
            </div>
            <div className="card-body">
              <div className="clipboard copy-txt">
                <p className="mb-4">
                  Link -&gt;{" "}
                  <span id="advanced-paragraph">
                    http://www.example.com/example
                  </span>
                </p>
                <a
                  className="mb-1 btn clip-btn btn-primary"
                  href="javascript:;"
                  data-clipboard-action="copy"
                  data-clipboard-target="#advanced-paragraph"
                >
                  <i className="far fa-copy" /> Copy Link
                </a>
                <a
                  className="mb-1 btn clip-btn btn-warning"
                  href="javascript:;"
                  data-clipboard-action="copy"
                  data-clipboard-text={2291}
                >
                  <i className="far fa-copy" /> Copy Hidden Code
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Drag Card */}
      </div>
    </div>
  </div>
  
  )
}

export default ClipBoard
