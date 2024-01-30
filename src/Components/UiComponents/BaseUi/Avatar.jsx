import React from 'react'

function Avatar() {
  return (
    <div className="page-wrapper">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Avatar</h5>
      </div>
    </div>
    {/* /Page Header */}
    {/* Avatar */}
    <div className="row">
      <div className="col-md-12">
        <div className="card bg-white">
          <div className="card-header">
            <h5 className="card-title">Sizing</h5>
          </div>
          <div className="card-body">
            <div className="avatar avatar-xxl">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar avatar-xl">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar avatar-lg">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar avatar-sm">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar avatar-xs">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card bg-white">
          <div className="card-header">
            <h5 className="card-title">Avatar With Status</h5>
          </div>
          <div className="card-body">
            <div className="avatar avatar-online">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar avatar-offline">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar avatar-away">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card bg-white">
          <div className="card-header">
            <h5 className="card-title">Shape</h5>
          </div>
          <div className="card-body">
            <div className="avatar">
              <img
                className="avatar-img rounded"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src="assets/img/profiles/avatar-02.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card bg-white mb-0">
          <div className="card-header">
            <h5 className="card-title">Group</h5>
          </div>
          <div className="card-body">
            <div className="avatar-group">
              <div className="avatar">
                <img
                  className="avatar-img rounded-circle border border-white"
                  alt="User Image"
                  src="assets/img/profiles/avatar-02.jpg"
                />
              </div>
              <div className="avatar">
                <img
                  className="avatar-img rounded-circle border border-white"
                  alt="User Image"
                  src="assets/img/profiles/avatar-03.jpg"
                />
              </div>
              <div className="avatar">
                <img
                  className="avatar-img rounded-circle border border-white"
                  alt="User Image"
                  src="assets/img/profiles/avatar-04.jpg"
                />
              </div>
              <div className="avatar">
                <span className="avatar-title rounded-circle border border-white">
                  CF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Avatar */}
  </div>
</div>

  )
}

export default Avatar
