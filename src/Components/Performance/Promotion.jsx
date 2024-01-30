import React from 'react'

function Promotion() {
  return (
    <div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Promotion</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Promotion</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <a
            href="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#add_promotion"
          >
            <i className="fa-solid fa-plus" /> Add Promotion
          </a>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          {/* Promotion Table */}
          <table className="table table-striped custom-table mb-0 datatable">
            <thead>
              <tr>
                <th>#</th>
                <th>Promoted Employee </th>
                <th>Department</th>
                <th>Promotion Designation From </th>
                <th>Promotion Designation To </th>
                <th>Promotion Date </th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <h2 className="table-avatar blue-link">
                    <a href="profile" className="avatar">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile">John Doe</a>
                  </h2>
                </td>
                <td>Web Development</td>
                <td>Web Developer</td>
                <td>Sr Web Developer</td>
                <td>28 Feb 2019</td>
                <td className="text-end">
                  <div className="dropdown dropdown-action">
                    <a
                      href="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_promotion"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_promotion"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* /Promotion Table */}
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
  {/* Add Promotion Modal */}
  <div id="add_promotion" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Promotion</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion For <span className="text-danger">*</span>
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion From <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="Web Developer"
                readOnly=""
              />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion To <span className="text-danger">*</span>
              </label>
              <select className="select">
                <option>Web Developer</option>
                <option>Web Designer</option>
                <option>SEO Analyst</option>
              </select>
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input type="text" className="form-control datetimepicker" />
              </div>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Promotion Modal */}
  {/* Edit Promotion Modal */}
  <div id="edit_promotion" className="modal custom-modal fade" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Promotion</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion For <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="John Doe"
              />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion From <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="Web Developer"
                readOnly=""
              />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion To <span className="text-danger">*</span>
              </label>
              <select className="select">
                <option>Web Developer</option>
                <option>Web Designer</option>
                <option>SEO Analyst</option>
              </select>
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Promotion Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input type="text" className="form-control datetimepicker" />
              </div>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Promotion Modal */}
  {/* Delete Promotion Modal */}
  <div className="modal custom-modal fade" id="delete_promotion" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="form-header">
            <h3>Delete Promotion</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div className="modal-btn delete-action">
            <div className="row">
              <div className="col-6">
                <a
                  href="javascript:void(0);"
                  className="btn btn-primary continue-btn"
                >
                  Delete
                </a>
              </div>
              <div className="col-6">
                <a
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  className="btn btn-primary cancel-btn"
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Promotion Modal */}
</div>

  )
}

export default Promotion
