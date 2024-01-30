import React from 'react'

function Badges() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Badges</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Default Badges</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>badge</code> class to set a default badge.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Primary</span>
                <span className="badge bg-secondary">Secondary</span>
                <span className="badge bg-success">Success</span>
                <span className="badge bg-info">Info</span>
                <span className="badge bg-warning">Warning</span>
                <span className="badge bg-danger">Danger</span>
                <span className="badge bg-dark">Dark</span>
                <span className="badge bg-light text-dark">Light</span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Soft Badges </h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>badge-soft-</code> class with below-mentioned
                variation to create softer badge.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge badge-soft-primary">Primary</span>
                <span className="badge badge-soft-secondary">Secondary</span>
                <span className="badge badge-soft-success">Success</span>
                <span className="badge badge-soft-info">Info</span>
                <span className="badge badge-soft-warning">Warning</span>
                <span className="badge badge-soft-danger">Danger</span>
                <span className="badge badge-soft-dark">Dark</span>
                <span className="badge badge-soft-light text-dark">Light</span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Outline Badges </h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>badge-outline-</code> class with the below-mentioned
                variation to create a badge with the outline.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a href="#" className="badge badge-outline-primary">
                  Primary
                </a>
                <span className="badge badge-outline-secondary">Secondary</span>
                <span className="badge badge-outline-success">Success</span>
                <span className="badge badge-outline-info">Info</span>
                <span className="badge badge-outline-warning">Warning</span>
                <span className="badge badge-outline-danger">Danger</span>
                <span className="badge badge-outline-dark">Dark</span>
                <span className="badge badge-outline-light text-dark">Light</span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Rounded Pill Badges </h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>rounded-pill</code> class to make badges more
                rounded with a larger border-radius.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill bg-primary">Primary</span>
                <span className="badge rounded-pill bg-secondary">Secondary</span>
                <span className="badge rounded-pill bg-success">Success</span>
                <span className="badge rounded-pill bg-info">Info</span>
                <span className="badge rounded-pill bg-warning">Warning</span>
                <span className="badge rounded-pill bg-danger">Danger</span>
                <span className="badge rounded-pill bg-dark">Dark</span>
                <span className="badge rounded-pill bg-light text-dark">
                  Light
                </span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">
                Rounded Pill Badges with soft effect{" "}
              </h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>rounded-pill badge-soft-</code> class with the
                below-mentioned variation to create a badge more rounded with a
                soft background.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill badge-soft-primary">
                  Primary
                </span>
                <span className="badge rounded-pill badge-soft-secondary">
                  Secondary
                </span>
                <span className="badge rounded-pill badge-soft-success">
                  Success
                </span>
                <span className="badge rounded-pill badge-soft-info">Info</span>
                <span className="badge rounded-pill badge-soft-warning">
                  Warning
                </span>
                <span className="badge rounded-pill badge-soft-danger">
                  Danger
                </span>
                <span className="badge rounded-pill badge-soft-dark">Dark</span>
                <span className="badge rounded-pill badge-soft-light text-dark">
                  Light
                </span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Soft Border Badges</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>badge-border</code> and <code>badge-soft-</code>{" "}
                with below mentioned modifier classes to make badges with border
                &amp; soft backgorund.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge badge-soft-primary badge-border">
                  Primary
                </span>
                <span className="badge badge-soft-secondary badge-border">
                  Secondary
                </span>
                <span className="badge badge-soft-success badge-border">
                  Success
                </span>
                <span className="badge badge-soft-danger badge-border">
                  Danger
                </span>
                <span className="badge badge-soft-warning badge-border">
                  Warning
                </span>
                <span className="badge badge-soft-info badge-border">Info</span>
                <span className="badge badge-soft-dark badge-border">Dark</span>
                <span className="badge badge-soft-light badge-border text-dark">
                  Light
                </span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Outline Pill Badges </h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>rounded-pill badge-outline-</code> class with the
                below-mentioned variation to create a outline Pill badge.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill badge-outline-primary">
                  Primary
                </span>
                <span className="badge rounded-pill badge-outline-secondary">
                  Secondary
                </span>
                <span className="badge rounded-pill badge-outline-success">
                  Success
                </span>
                <span className="badge rounded-pill badge-outline-info">
                  Info
                </span>
                <span className="badge rounded-pill badge-outline-warning">
                  Warning
                </span>
                <span className="badge rounded-pill badge-outline-danger">
                  Danger
                </span>
                <span className="badge rounded-pill badge-outline-dark">
                  Dark
                </span>
                <span className="badge rounded-pill badge-outline-light text-dark">
                  Light
                </span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Label Badges </h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>badge-label</code> class to create a badge with the
                label.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge badge-label bg-primary">
                  <i className="mdi mdi-circle-medium" /> Primary
                </span>
                <span className="badge badge-label bg-secondary">
                  <i className="mdi mdi-circle-medium" /> Secondary
                </span>
                <span className="badge badge-label bg-success">
                  <i className="mdi mdi-circle-medium" /> Success
                </span>
                <span className="badge badge-label bg-danger">
                  <i className="mdi mdi-circle-medium" /> Danger
                </span>
                <span className="badge badge-label bg-warning">
                  <i className="mdi mdi-circle-medium" /> Warning
                </span>
                <span className="badge badge-label bg-info">
                  <i className="mdi mdi-circle-medium" /> Info
                </span>
                <span className="badge badge-label bg-dark">
                  <i className="mdi mdi-circle-medium" /> Dark
                </span>
                <span className="badge badge-label bg-light text-dark">
                  <i className="mdi mdi-circle-medium" /> Light
                </span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-12">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Gradient Badges</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the <code>badge-gradient-*</code> class to create a gradient
                styled badge.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Primary</span>
                <span className="badge bg-secondary">Secondary</span>
                <span className="badge bg-success">Success</span>
                <span className="badge bg-danger">Danger</span>
                <span className="badge bg-warning">Warning</span>
                <span className="badge bg-info">Info</span>
                <span className="badge bg-dark">Dark</span>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        {/*end col*/}
      </div>
      <div className="row">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Button Position Badges</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Use the below utilities to modify a badge and position it in the
                corner of a link or button.
              </p>
              <div className="d-flex flex-wrap gap-4">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                >
                  Mails{" "}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    +99
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <button type="button" className="btn btn-light position-relative">
                  Alerts{" "}
                  <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary position-relative p-0 avatar-xs rounded"
                >
                  <span className="avatar-title bg-transparent">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-light position-relative p-0 avatar-xs rounded-circle"
                >
                  <span className="avatar-title bg-transparent text-reset">
                    <i className="fas fa-bell" />
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-light position-relative p-0 avatar-xs rounded-circle"
                >
                  <span className="avatar-title bg-transparent text-reset">
                    <i className="fas fa-bars" />
                  </span>
                  <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1">
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Badges With Button</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Badges can be used as part of buttons to provide a counter.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary">
                  Notifications <span className="badge bg-success ms-1">4</span>
                </button>
                <button type="button" className="btn btn-success">
                  Messages <span className="badge bg-danger ms-1">2</span>
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Draft <span className="badge bg-success ms-1">2</span>
                </button>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        <div className="col-xxl-6">
          <div className="card mb-0">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0">Badges with Heading</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <p className="text-muted">
                Example of the badge used in the HTML Heading.
              </p>
              <div>
                <h1>
                  Example heading <span className="badge bg-secondary">New</span>
                </h1>
                <h2>
                  Example heading <span className="badge bg-secondary">New</span>
                </h2>
                <h3>
                  Example heading <span className="badge bg-secondary">New</span>
                </h3>
                <h4>
                  Example heading <span className="badge bg-secondary">New</span>
                </h4>
                <h5>
                  Example heading <span className="badge bg-secondary">New</span>
                </h5>
                <h6 className="mb-0">
                  Example heading <span className="badge bg-secondary">New</span>
                </h6>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Badges
