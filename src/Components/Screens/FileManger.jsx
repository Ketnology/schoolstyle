import React from 'react'

function FileManger() {
  return (
    <>
  <div className="page-wrapper">
    {/* Page Content */}
    <div className="content container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="file-wrap">
            <div className="file-sidebar">
              <div className="file-header justify-content-center">
                <span>Projects</span>
                <a href="javascript:void(0);" className="file-side-close">
                  <i className="fa-solid fa-xmark" />
                </a>
              </div>
              <form className="file-search">
                <div className="input-group">
                  <div className="input-group-text">
                    <i className="fa-solid fa-magnifying-glass" />
                  </div>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Search"
                  />
                </div>
              </form>
              <div className="file-pro-list">
                <div className="file-scroll">
                  <ul className="file-menu">
                    <li className="active">
                      <a href="#">All Projects</a>
                    </li>
                    <li>
                      <a href="#">Office Management</a>
                    </li>
                    <li>
                      <a href="#">Video Calling App</a>
                    </li>
                    <li>
                      <a href="#">Hospital Administration</a>
                    </li>
                    <li>
                      <a href="#">Virtual Host</a>
                    </li>
                  </ul>
                  <div className="show-more">
                    <a href="#">Show More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="file-cont-wrap">
              <div className="file-cont-inner">
                <div className="file-cont-header">
                  <div className="file-options">
                    <a
                      href="javascript:void(0)"
                      id="file_sidebar_toggle"
                      className="file-sidebar-toggle"
                    >
                      <i className="fa-solid fa-bars" />
                    </a>
                  </div>
                  <span>File Manager</span>
                  <div className="file-options">
                    <span className="btn-file">
                      <input type="file" className="upload" />
                      <i className="fa-solid fa-upload" />
                    </span>
                  </div>
                </div>
                <div className="file-content">
                  <form className="file-search">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fa-solid fa-magnifying-glass" />
                      </div>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  <div className="file-body">
                    <div className="file-scroll">
                      <div className="file-content-inner">
                        <h4>Recent Files</h4>
                        <div className="row row-sm justify-content-center">
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-pdf" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Sample.pdf</a>
                                </h6>
                                <span>10.45kb</span>
                              </div>
                              <div className="card-footer">
                                <span className="d-none d-sm-inline">
                                  Last Modified:{" "}
                                </span>
                                1 min ago
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-word" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Document.docx</a>
                                </h6>
                                <span>22.67kb</span>
                              </div>
                              <div className="card-footer">
                                <span className="d-none d-sm-inline">
                                  Last Modified:{" "}
                                </span>
                                30 mins ago
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-image" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">icon.png</a>
                                </h6>
                                <span>12.47kb</span>
                              </div>
                              <div className="card-footer">
                                <span className="d-none d-sm-inline">
                                  Last Modified:{" "}
                                </span>
                                1 hour ago
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-excel" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Users.xls</a>
                                </h6>
                                <span>35.11kb</span>
                              </div>
                              <div className="card-footer">23 Jul 6:30 PM</div>
                            </div>
                          </div>
                        </div>
                        <h4>Files</h4>
                        <div className="row row-sm">
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-word" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Updates.docx</a>
                                </h6>
                                <span>12mb</span>
                              </div>
                              <div className="card-footer">9 Aug 1:17 PM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-powerpoint" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Vision.ppt</a>
                                </h6>
                                <span>72.50kb</span>
                              </div>
                              <div className="card-footer">6 Aug 11:42 AM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-audio" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Voice.mp3</a>
                                </h6>
                                <span>2.17mb</span>
                              </div>
                              <div className="card-footer">
                                <span className="d-none d-sm-inline">
                                  Last Modified:{" "}
                                </span>
                                30 Jul 9:00 PM
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-pdf" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Tutorials.pdf</a>
                                </h6>
                                <span>8.2mb</span>
                              </div>
                              <div className="card-footer">21 Jul 10:45 PM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-excel" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Tasks.xls</a>
                                </h6>
                                <span>92.82kb</span>
                              </div>
                              <div className="card-footer">16 Jun 4:59 PM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-image" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Page.psd</a>
                                </h6>
                                <span>118.71mb</span>
                              </div>
                              <div className="card-footer">14 Jun 9:00 AM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-lines" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">License.txt</a>
                                </h6>
                                <span>18.7kb</span>
                              </div>
                              <div className="card-footer">5 May 8:21 PM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-word" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Expenses.docx</a>
                                </h6>
                                <span>66.2kb</span>
                              </div>
                              <div className="card-footer">24 Apr 7:50 PM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-audio" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Music.mp3</a>
                                </h6>
                                <span>3.6mb</span>
                              </div>
                              <div className="card-footer">13 Mar 2:00 PM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-lines" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Installation.txt</a>
                                </h6>
                                <span>43.9kb</span>
                              </div>
                              <div className="card-footer">26 Feb 5:01 PM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-video" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">Workflow.mp4</a>
                                </h6>
                                <span>47.65mb</span>
                              </div>
                              <div className="card-footer">3 Jan 11:35 AM</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                            <div className="card card-file">
                              <div className="dropdown-file">
                                <a
                                  href="#"
                                  className="dropdown-link"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    View Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                              <div className="card-file-thumb">
                                <i className="fa-regular fa-file-code" />
                              </div>
                              <div className="card-body">
                                <h6>
                                  <a href="#">index</a>
                                </h6>
                                <span>23.7kb</span>
                              </div>
                              <div className="card-footer">1 Jan 8:55 AM</div>
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
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default FileManger
