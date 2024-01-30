import React from 'react'

function Holiday() {
  return (
   <div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Holidays 2019</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="admin-dashboard">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Holidays</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <a
            href="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#add_holiday"
          >
            <i className="fa-solid fa-plus" /> Add Holiday
          </a>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped custom-table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Title </th>
                <th>Holiday Date</th>
                <th>Day</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="holiday-completed">
                <td>1</td>
                <td>New Year</td>
                <td>1 Jan 2019</td>
                <td>Sunday</td>
                <td />
              </tr>
              <tr className="holiday-completed">
                <td>2</td>
                <td>Good Friday</td>
                <td>14 Apr 2019</td>
                <td>Friday</td>
                <td />
              </tr>
              <tr className="holiday-completed">
                <td>3</td>
                <td>May Day</td>
                <td>1 May 2019</td>
                <td>Monday</td>
                <td className="text-center"></td>
              </tr>
              <tr className="holiday-completed">
                <td>4</td>
                <td>Memorial Day</td>
                <td>28 May 2019</td>
                <td>Monday</td>
                <td className="text-center"></td>
              </tr>
              <tr className="holiday-completed">
                <td>5</td>
                <td>Ramzon</td>
                <td>26 Jun 2019</td>
                <td>Monday</td>
                <td />
              </tr>
              <tr className="holiday-upcoming">
                <td>6</td>
                <td>Bakrid</td>
                <td>2 Sep 2019</td>
                <td>Saturday</td>
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
                        data-bs-target="#edit_holiday"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_holiday"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="holiday-upcoming">
                <td>7</td>
                <td>Deepavali</td>
                <td>18 Oct 2019</td>
                <td>Wednesday</td>
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
                        data-bs-target="#edit_holiday"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_holiday"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="holiday-upcoming">
                <td>8</td>
                <td>Christmas</td>
                <td>25 Dec 2019</td>
                <td>Monday</td>
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
                        data-bs-target="#edit_holiday"
                      >
                        <i className="fa-solid fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_holiday"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
  {/* Add Holiday Modal */}
  <div className="modal custom-modal fade" id="add_holiday" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Holiday</h5>
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
                Holiday Name <span className="text-danger">*</span>
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Holiday Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input className="form-control datetimepicker" type="text" />
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
  {/* /Add Holiday Modal */}
  {/* Edit Holiday Modal */}
  <div className="modal custom-modal fade" id="edit_holiday" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Holiday</h5>
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
                Holiday Name <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                defaultValue="New Year"
                type="text"
              />
            </div>
            <div className="input-block mb-3">
              <label className="col-form-label">
                Holiday Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <input
                  className="form-control datetimepicker"
                  defaultValue="01-01-2019"
                  type="text"
                />
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
  {/* /Edit Holiday Modal */}
  {/* Delete Holiday Modal */}
  <div className="modal custom-modal fade" id="delete_holiday" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="form-header">
            <h3>Delete Holiday</h3>
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
  {/* /Delete Holiday Modal */}
</div>

  )
}

export default Holiday
