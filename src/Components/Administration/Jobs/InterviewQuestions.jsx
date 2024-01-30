import React from 'react'

function InterviewQuestions() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Interview Questions</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item">Jobs</li>
              <li className="breadcrumb-item active">Interview Questions</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn mb-1"
              data-bs-toggle="modal"
              data-bs-target="#add_question"
            >
              <i className="fa-solid fa-plus" /> Add Question
            </a>
            <a
              href="#"
              className="btn add-btn me-1 mb-1"
              data-bs-toggle="modal"
              data-bs-target="#add_category"
            >
              <i className="fa-solid fa-plus" /> Add Category
            </a>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Questions</th>
                  <th>Option A</th>
                  <th>Option B</th>
                  <th>Option C</th>
                  <th>Option D</th>
                  <th className="text-center">Correct Answer</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    IS management has decided to rewrite a legacy <br />
                    customer relations system using fourth generation <br />
                    languages (4GLs). Which of the following risks is
                    <br /> MOST often associated with system development using
                    4GLs?
                  </td>
                  <td>design facilities </td>
                  <td> language subsets</td>
                  <td>Lack of portability</td>
                  <td>Inability to perform data</td>
                  <td className="text-center">A</td>
                  <td className="text-center">
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
                          data-bs-target="#edit_question"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-trash-can m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Which of the following would be the BEST
                    <br /> method for ensuring that critical fields in a<br />{" "}
                    master record have been updated properly?
                  </td>
                  <td>design facilities </td>
                  <td> language subsets</td>
                  <td>Lack of portability</td>
                  <td>Inability to perform data</td>
                  <td className="text-center">A</td>
                  <td className="text-center">
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
                          data-bs-target="#edit_question"
                        >
                          <i className="fa-solid fa-pencil m-r-5" /> Edit
                        </a>
                        <a className="dropdown-item" href="#">
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
    {/* Add Questions Modal */}
    <div id="add_question" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Questions</h5>
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
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Category</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Department</label>
                    <select className="select">
                      <option>-</option>
                      <option selected="">Web Development</option>
                      <option>Application Development</option>
                      <option>IT Management</option>
                      <option>Accounts Management</option>
                      <option>Support Management</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Questions</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option A</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option B</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option C</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option D</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Correct Answer</label>
                    <select className="select">
                      <option>-</option>
                      <option>Option A</option>
                      <option>Option B</option>
                      <option>Option C</option>
                      <option>Option D</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Code Snippets</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Answer Explanation</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Video Link</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Add Image To Question
                    </label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Cancel</button>
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Questions Modal */}
    {/* Add Category Modal */}
    <div id="add_category" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Category</h5>
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
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Category</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Cancel</button>
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Questions Modal */}
    {/* Edit Job Modal */}
    <div id="edit_question" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Questions</h5>
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
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Category</label>
                    <select className="select">
                      <option>-</option>
                      <option selected="">HTML</option>
                      <option>CSS</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Department</label>
                    <select className="select">
                      <option>-</option>
                      <option selected="">Web Development</option>
                      <option>Application Development</option>
                      <option>IT Management</option>
                      <option>Accounts Management</option>
                      <option>Support Management</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Questions</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\tIS management has decided to rewrite a legacy customer relations system using fourth generation languages (4GLs). Which of the following risks is MOST often associated with system development using 4GLs?\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option A</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Design facilities"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option B</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="language subsets"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option C</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Lack of portability"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Option D</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Inability to perform data"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Correct Answer</label>
                    <select className="select">
                      <option>-</option>
                      <option selected="">Option A</option>
                      <option>Option B</option>
                      <option>Option C</option>
                      <option>Option D</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Code Snippets</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Answer Explanation</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Video Link</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Add Image To Question
                    </label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Cancel</button>
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Job Modal */}
    {/* Delete Job Modal */}
    <div className="modal custom-modal fade" id="delete_job" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete</h3>
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
    {/* /Delete Job Modal */}
  </div>
  
  )
}

export default InterviewQuestions
