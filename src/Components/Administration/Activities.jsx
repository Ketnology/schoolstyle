import React from 'react'

function Activities() {
  return (
    <div className="page-wrapper">
    {/* Page Content */}
    <div className="content">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Activities</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Activities</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="activity">
            <div className="activity-box">
              <ul className="activity-list">
                <li>
                  <div className="activity-user">
                    <a
                      href="profile"
                      title="Lesley Grauer"
                      data-bs-toggle="tooltip"
                      className="avatar"
                    >
                      <img
                        src="assets/img/profiles/avatar-01.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div className="activity-content">
                    <div className="timeline-content">
                      <a href="profile" className="name">
                        Lesley Grauer
                      </a>{" "}
                      added new task <a href="#">Hospital Administration</a>
                      <span className="time">4 mins ago</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="activity-user">
                    <a
                      href="profile"
                      className="avatar"
                      title="Jeffery Lalor"
                      data-bs-toggle="tooltip"
                    >
                      <img
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div className="activity-content">
                    <div className="timeline-content">
                      <a href="profile" className="name">
                        Jeffery Lalor
                      </a>{" "}
                      added{" "}
                      <a href="profile" className="name">
                        Loren Gatlin
                      </a>{" "}
                      and{" "}
                      <a href="profile" className="name">
                        Tarah Shropshire
                      </a>{" "}
                      to project <a href="#">Patient appointment booking</a>
                      <span className="time">6 mins ago</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="activity-user">
                    <a
                      href="profile"
                      title="Catherine Manseau"
                      data-bs-toggle="tooltip"
                      className="avatar"
                    >
                      <img
                        src="assets/img/profiles/avatar-08.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div className="activity-content">
                    <div className="timeline-content">
                      <a href="profile" className="name">
                        Catherine Manseau
                      </a>{" "}
                      completed task{" "}
                      <a href="#">Appointment booking with payment gateway</a>
                      <span className="time">12 mins ago</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="activity-user">
                    <a
                      href="#"
                      title="Bernardo Galaviz"
                      data-bs-toggle="tooltip"
                      className="avatar"
                    >
                      <img
                        src="assets/img/profiles/avatar-13.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div className="activity-content">
                    <div className="timeline-content">
                      <a href="profile" className="name">
                        Bernardo Galaviz
                      </a>{" "}
                      changed the task name{" "}
                      <a href="#">Doctor available module</a>
                      <span className="time">1 day ago</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="activity-user">
                    <a
                      href="profile"
                      title="Mike Litorus"
                      data-bs-toggle="tooltip"
                      className="avatar"
                    >
                      <img
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div className="activity-content">
                    <div className="timeline-content">
                      <a href="profile" className="name">
                        Mike Litorus
                      </a>{" "}
                      added new task{" "}
                      <a href="#">Patient and Doctor video conferencing</a>
                      <span className="time">2 days ago</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="activity-user">
                    <a
                      href="profile"
                      title="Jeffery Lalor"
                      data-bs-toggle="tooltip"
                      className="avatar"
                    >
                      <img
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div className="activity-content">
                    <div className="timeline-content">
                      <a href="profile" className="name">
                        Jeffery Lalor
                      </a>{" "}
                      added{" "}
                      <a href="profile" className="name">
                        Jeffrey Warden
                      </a>{" "}
                      and{" "}
                      <a href="profile" className="name">
                        Bernardo Galaviz
                      </a>{" "}
                      to the task of <a href="#">Private chat module</a>
                      <span className="time">7 days ago</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </div>
  
  )
}

export default Activities
