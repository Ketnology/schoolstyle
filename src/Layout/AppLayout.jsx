import { Outlet } from "react-router-dom";
import { ExternalLink } from "../Styling/ExternalLink";

function AppLayout({ children }) {
  return (
    <>
      <ExternalLink />
      <div className="main-wrapper">
        {/* Header */}
        <div className="header">
          {/* Logo */}
          <div className="header-left">
            <a href="admin-dashboard" className="logo">
              <img
                src="assets/img/logo.png"
                width={40}
                height={40}
                alt="Logo"
              />
            </a>
            <a href="admin-dashboard" className="logo2">
              <img
                src="assets/img/logo2.png"
                width={40}
                height={40}
                alt="Logo"
              />
            </a>
          </div>
          {/* /Logo */}
          <a id="toggle_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          {/* Header Title */}
          <div className="page-title-box">
            <h3>Dreamguy's Technologies</h3>
          </div>
          {/* /Header Title */}
          <a id="mobile_btn" className="mobile_btn" href="#sidebar">
            <i className="fa-solid fa-bars" />
          </a>
          {/* Header Menu */}
          <ul className="nav user-menu">
            {/* Search */}
            <li className="nav-item">
              <div className="top-nav-search">
                <a href="javascript:void(0);" className="responsive-search">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <form action="https://smarthr.dreamstechnologies.com/html/template/search">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search here"
                  />
                  <button className="btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </form>
              </div>
            </li>
            {/* /Search */}
            {/* Flag */}
            <li className="nav-item dropdown has-arrow flag-nav">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
              >
                <img src="assets/img/flags/us.png" alt="Flag" height={20} />{" "}
                <span>English</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/us.png" alt="Flag" height={16} />{" "}
                  English
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/fr.png" alt="Flag" height={16} />{" "}
                  French
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/es.png" alt="Flag" height={16} />{" "}
                  Spanish
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/de.png" alt="Flag" height={16} />{" "}
                  German
                </a>
              </div>
            </li>
            {/* /Flag */}
            {/* Notifications */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="fa-regular fa-bell" />{" "}
                <span className="badge rounded-pill">3</span>
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">John Doe</span> added
                              new task{" "}
                              <span className="noti-title">
                                Patient appointment booking
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Tarah Shropshire
                              </span>{" "}
                              changed the task name{" "}
                              <span className="noti-title">
                                Appointment booking with payment gateway
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-06.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Misty Tison</span>{" "}
                              added{" "}
                              <span className="noti-title">
                                Domenic Houston
                              </span>{" "}
                              and{" "}
                              <span className="noti-title">Claire Mapes</span>{" "}
                              to project{" "}
                              <span className="noti-title">
                                Doctor available module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-17.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Rolland Webber</span>{" "}
                              completed task{" "}
                              <span className="noti-title">
                                Patient and Doctor video conferencing
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities">
                        <div className="chat-block d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="User Image"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Bernardo Galaviz
                              </span>{" "}
                              added new task{" "}
                              <span className="noti-title">
                                Private chat module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                2 days ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities">View all Notifications</a>
                </div>
              </div>
            </li>
            {/* /Notifications */}
            {/* Message Notifications */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="fa-regular fa-comment" />
                <span className="badge rounded-pill">8</span>
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Messages</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                src="assets/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              Richard Miles{" "}
                            </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">John Doe</span>
                            <span className="message-time">6 Mar</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="User Image"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              {" "}
                              Tarah Shropshire{" "}
                            </span>
                            <span className="message-time">5 Mar</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Mike Litorus</span>
                            <span className="message-time">3 Mar</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img
                                src="assets/img/profiles/avatar-08.jpg"
                                alt="User Image"
                              />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">
                              {" "}
                              Catherine Manseau{" "}
                            </span>
                            <span className="message-time">27 Feb</span>
                            <div className="clearfix" />
                            <span className="message-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="chat">View all Messages</a>
                </div>
              </div>
            </li>
            {/* /Message Notifications */}
            <li className="nav-item dropdown has-arrow main-drop">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="user-img">
                  <img
                    src="assets/img/profiles/avatar-21.jpg"
                    alt="User Image"
                  />
                  <span className="status online" />
                </span>
                <span>Admin</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="profile">
                  My Profile
                </a>
                <a className="dropdown-item" href="settings">
                  Settings
                </a>
                <a className="dropdown-item" href="index-2">
                  Logout
                </a>
              </div>
            </li>
          </ul>
          {/* /Header Menu */}
          {/* Mobile Menu */}
          <div className="dropdown mobile-user-menu">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-ellipsis-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="profile">
                My Profile
              </a>
              <a className="dropdown-item" href="settings">
                Settings
              </a>
              <a className="dropdown-item" href="index-2">
                Logout
              </a>
            </div>
          </div>
          {/* /Mobile Menu */}
        </div>
        {/* /Header */}
        {/* Sidebar */}
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <nav className="greedys sidebar-horizantal">
                <ul className="list-inline-item list-unstyled links">
                  <li className="menu-title">
                    <span>Main</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="admin-dashboard">Admin Dashboard</a>
                      </li>
                      <li>
                        <a href="employee-dashboard">Employee Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-cube" /> <span> Apps</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="chat">Chat</a>
                      </li>
                      <li className="submenu">
                        <a href="#">
                          <span> Calls</span> <span className="menu-arrow" />
                        </a>
                        <ul>
                          <li>
                            <a href="voice-call">Voice Call</a>
                          </li>
                          <li>
                            <a href="video-call">Video Call</a>
                          </li>
                          <li>
                            <a href="outgoing-call">Outgoing Call</a>
                          </li>
                          <li>
                            <a href="incoming-call">Incoming Call</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="events">Calendar</a>
                      </li>
                      <li>
                        <a href="contacts">Contacts</a>
                      </li>
                      <li>
                        <a href="inbox">Email</a>
                      </li>
                      <li>
                        <a href="file-manager">File Manager</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>Employees</span>
                  </li>
                  <li className="submenu">
                    <a href="#" className="noti-dot">
                      <i className="la la-user" /> <span> Employees</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="employees">All Employees</a>
                      </li>
                      <li>
                        <a href="holidays">Holidays</a>
                      </li>
                      <li>
                        <a href="leaves">
                          Leaves (Admin){" "}
                          <span className="badge rounded-pill bg-primary float-end">
                            1
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="leaves-employee">Leaves (Employee)</a>
                      </li>
                      <li>
                        <a href="leave-settings">Leave Settings</a>
                      </li>
                      <li>
                        <a href="attendance">Attendance (Admin)</a>
                      </li>
                      <li>
                        <a href="attendance-employee">
                          Attendance (Employee)
                        </a>
                      </li>
                      <li>
                        <a href="departments">Departments</a>
                      </li>
                      <li>
                        <a href="designations">Designations</a>
                      </li>
                      <li>
                        <a href="timesheet">Timesheet</a>
                      </li>
                      <li>
                        <a href="shift-scheduling">Shift &amp; Schedule</a>
                      </li>
                      <li>
                        <a href="overtime">Overtime</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="clients">
                      <i className="la la-users" /> <span>Clients</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-rocket" /> <span> Projects</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="projects">Projects</a>
                      </li>
                      <li>
                        <a href="tasks">Tasks</a>
                      </li>
                      <li>
                        <a href="task-board">Task Board</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="leads">
                      <i className="la la-user-secret" /> <span>Leads</span>
                    </a>
                  </li>
                  <li>
                    <a href="tickets">
                      <i className="la la-ticket" /> <span>Tickets</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>HR</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-files-o" /> <span> Sales </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="estimates">Estimates</a>
                      </li>
                      <li>
                        <a href="invoices">Invoices</a>
                      </li>
                      <li>
                        <a href="payments">Payments</a>
                      </li>
                      <li>
                        <a href="expenses">Expenses</a>
                      </li>
                      <li>
                        <a href="provident-fund">Provident Fund</a>
                      </li>
                      <li>
                        <a href="taxes">Taxes</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <button className="viewmoremenu">More Menu</button>
                <ul className="hidden-links hidden">
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-files-o" /> <span> Accounting </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="categories">Categories</a>
                      </li>
                      <li>
                        <a href="budgets">Budgets</a>
                      </li>
                      <li>
                        <a href="budget-expenses">Budget Expenses</a>
                      </li>
                      <li>
                        <a href="budget-revenues">Budget Revenues</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-money" /> <span> Payroll </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="salary"> Employee Salary </a>
                      </li>
                      <li>
                        <a href="salary-view"> Payslip </a>
                      </li>
                      <li>
                        <a href="payroll-items"> Payroll Items </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="policies">
                      <i className="la la-file-pdf-o" /> <span>Policies</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="expense-reports"> Expense Report </a>
                      </li>
                      <li>
                        <a href="invoice-reports"> Invoice Report </a>
                      </li>
                      <li>
                        <a href="payments-reports"> Payments Report </a>
                      </li>
                      <li>
                        <a href="project-reports"> Project Report </a>
                      </li>
                      <li>
                        <a href="task-reports"> Task Report </a>
                      </li>
                      <li>
                        <a href="user-reports"> User Report </a>
                      </li>
                      <li>
                        <a href="employee-reports"> Employee Report </a>
                      </li>
                      <li>
                        <a href="payslip-reports"> Payslip Report </a>
                      </li>
                      <li>
                        <a href="attendance-reports">
                          {" "}
                          Attendance Report{" "}
                        </a>
                      </li>
                      <li>
                        <a href="leave-reports"> Leave Report </a>
                      </li>
                      <li>
                        <a href="daily-reports"> Daily Report </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>Performance</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-graduation-cap" />{" "}
                      <span> Performance </span> <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="performance-indicator">
                          {" "}
                          Performance Indicator{" "}
                        </a>
                      </li>
                      <li>
                        <a href="performance"> Performance Review </a>
                      </li>
                      <li>
                        <a href="performance-appraisal">
                          {" "}
                          Performance Appraisal{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="goal-tracking"> Goal List </a>
                      </li>
                      <li>
                        <a href="goal-type"> Goal Type </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-edit" /> <span> Training </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="training"> Training List </a>
                      </li>
                      <li>
                        <a href="trainers"> Trainers</a>
                      </li>
                      <li>
                        <a href="training-type"> Training Type </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="promotion">
                      <i className="la la-bullhorn" /> <span>Promotion</span>
                    </a>
                  </li>
                  <li>
                    <a href="resignation">
                      <i className="la la-external-link-square" />{" "}
                      <span>Resignation</span>
                    </a>
                  </li>
                  <li>
                    <a href="termination">
                      <i className="la la-times-circle" />{" "}
                      <span>Termination</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Administration</span>
                  </li>
                  <li>
                    <a href="assets">
                      <i className="la la-object-ungroup" /> <span>Assets</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="user-dashboard"> User Dasboard </a>
                      </li>
                      <li>
                        <a href="jobs-dashboard"> Jobs Dasboard </a>
                      </li>
                      <li>
                        <a href="jobs"> Manage Jobs </a>
                      </li>
                      <li>
                        <a href="manage-resumes"> Manage Resumes </a>
                      </li>
                      <li>
                        <a href="shortlist-candidates">
                          {" "}
                          Shortlist Candidates{" "}
                        </a>
                      </li>
                      <li>
                        <a href="interview-questions">
                          {" "}
                          Interview Questions{" "}
                        </a>
                      </li>
                      <li>
                        <a href="offer_approvals"> Offer Approvals </a>
                      </li>
                      <li>
                        <a href="experiance-level"> Experience Level </a>
                      </li>
                      <li>
                        <a href="candidates"> Candidates List </a>
                      </li>
                      <li>
                        <a href="schedule-timing"> Schedule timing </a>
                      </li>
                      <li>
                        <a href="apptitude-result"> Aptitude Results </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="knowledgebase">
                      <i className="la la-question" />{" "}
                      <span>Knowledgebase</span>
                    </a>
                  </li>
                  <li>
                    <a href="activities">
                      <i className="la la-bell" /> <span>Activities</span>
                    </a>
                  </li>
                  <li>
                    <a href="users">
                      <i className="la la-user-plus" /> <span>Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="settings">
                      <i className="la la-cog" /> <span>Settings</span>
                    </a>
                  </li>
                  <li className="menu-title">
                    <span>Pages</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-user" /> <span> Profile </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="profile"> Employee Profile </a>
                      </li>
                      <li>
                        <a href="client-profile"> Client Profile </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-key" /> <span> Authentication </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="index-2"> Login </a>
                      </li>
                      <li>
                        <a href="register"> Register </a>
                      </li>
                      <li>
                        <a href="forgot-password"> Forgot Password </a>
                      </li>
                      <li>
                        <a href="otp"> OTP </a>
                      </li>
                      <li>
                        <a href="lock-screen"> Lock Screen </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-exclamation-triangle" />{" "}
                      <span> Error Pages </span> <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="error-404">404 Error </a>
                      </li>
                      <li>
                        <a href="error-500">500 Error </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-hand-o-up" />{" "}
                      <span> Subscriptions </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="subscriptions"> Subscriptions (Admin) </a>
                      </li>
                      <li>
                        <a href="subscriptions-company">
                          {" "}
                          Subscriptions (Company){" "}
                        </a>
                      </li>
                      <li>
                        <a href="subscribed-companies">
                          {" "}
                          Subscribed Companies
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-columns" /> <span> Pages </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="search"> Search </a>
                      </li>
                      <li>
                        <a href="faq"> FAQ </a>
                      </li>
                      <li>
                        <a href="terms"> Terms </a>
                      </li>
                      <li>
                        <a href="privacy-policy"> Privacy Policy </a>
                      </li>
                      <li>
                        <a href="blank-page"> Blank Page </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>UI Interface</span>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="fa-brands fa-get-pocket" />{" "}
                      <span> Base UI </span> <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="alerts">Alerts</a>
                      </li>
                      <li>
                        <a href="accordions">Accordions</a>
                      </li>
                      <li>
                        <a href="avatar">Avatar</a>
                      </li>
                      <li>
                        <a href="badges">Badges</a>
                      </li>
                      <li>
                        <a href="buttons">Buttons</a>
                      </li>
                      <li>
                        <a href="buttongroup">Button Group</a>
                      </li>
                      <li>
                        <a href="breadcrumbs">Breadcrumb</a>
                      </li>
                      <li>
                        <a href="cards">Cards</a>
                      </li>
                      <li>
                        <a href="carousel">Carousel</a>
                      </li>
                      <li>
                        <a href="dropdowns">Dropdowns</a>
                      </li>
                      <li>
                        <a href="grid">Grid</a>
                      </li>
                      <li>
                        <a href="images">Images</a>
                      </li>
                      <li>
                        <a href="lightbox">Lightbox</a>
                      </li>
                      <li>
                        <a href="media">Media</a>
                      </li>
                      <li>
                        <a href="modal">Modals</a>
                      </li>
                      <li>
                        <a href="offcanvas">Offcanvas</a>
                      </li>
                      <li>
                        <a href="pagination">Pagination</a>
                      </li>
                      <li>
                        <a href="popover">Popover</a>
                      </li>
                      <li>
                        <a href="progress">Progress Bars</a>
                      </li>
                      <li>
                        <a href="placeholders">Placeholders</a>
                      </li>
                      <li>
                        <a href="rangeslider">Range Slider</a>
                      </li>
                      <li>
                        <a href="spinners">Spinner</a>
                      </li>
                      <li>
                        <a href="sweetalerts">Sweet Alerts</a>
                      </li>
                      <li>
                        <a href="tab">Tabs</a>
                      </li>
                      <li>
                        <a href="toastr">Toasts</a>
                      </li>
                      <li>
                        <a href="tooltip">Tooltip</a>
                      </li>
                      <li>
                        <a href="typography">Typography</a>
                      </li>
                      <li>
                        <a href="video">Video</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-dropbox" /> <span> Elements </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="ribbon">Ribbon</a>
                      </li>
                      <li>
                        <a href="clipboard">Clipboard</a>
                      </li>
                      <li>
                        <a href="drag-drop">Drag &amp; Drop</a>
                      </li>
                      <li>
                        <a href="rating">Rating</a>
                      </li>
                      <li>
                        <a href="text-editor">Text Editor</a>
                      </li>
                      <li>
                        <a href="counter">Counter</a>
                      </li>
                      <li>
                        <a href="scrollbar">Scrollbar</a>
                      </li>
                      <li>
                        <a href="notification">Notification</a>
                      </li>
                      <li>
                        <a href="stickynote">Sticky Note</a>
                      </li>
                      <li>
                        <a href="timeline">Timeline</a>
                      </li>
                      <li>
                        <a href="horizontal-timeline">
                          Horizontal Timeline
                        </a>
                      </li>
                      <li>
                        <a href="form-wizard">Form Wizard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-chart-bar" /> <span> Charts </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="chart-apex">Apex Charts</a>
                      </li>
                      <li>
                        <a href="chart-js">Chart Js</a>
                      </li>
                      <li>
                        <a href="chart-morris">Morris Charts</a>
                      </li>
                      <li>
                        <a href="chart-flot">Flot Charts</a>
                      </li>
                      <li>
                        <a href="chart-peity">Peity Charts</a>
                      </li>
                      <li>
                        <a href="chart-c3">C3 Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-icons" /> <span> Icons </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="icon-fontawesome">Fontawesome Icons</a>
                      </li>
                      <li>
                        <a href="icon-feather">Feather Icons</a>
                      </li>
                      <li>
                        <a href="icon-ionic">Ionic Icons</a>
                      </li>
                      <li>
                        <a href="icon-material">Material Icons</a>
                      </li>
                      <li>
                        <a href="icon-pe7">Pe7 Icons</a>
                      </li>
                      <li>
                        <a href="icon-simpleline">Simpleline Icons</a>
                      </li>
                      <li>
                        <a href="icon-themify">Themify Icons</a>
                      </li>
                      <li>
                        <a href="icon-weather">Weather Icons</a>
                      </li>
                      <li>
                        <a href="icon-typicon">Typicon Icons</a>
                      </li>
                      <li>
                        <a href="icon-flag">Flag Icons</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-object-group" /> <span> Forms </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="form-basic-inputs">Basic Inputs </a>
                      </li>
                      <li>
                        <a href="form-input-groups">Input Groups </a>
                      </li>
                      <li>
                        <a href="form-horizontal">Horizontal Form </a>
                      </li>
                      <li>
                        <a href="form-vertical"> Vertical Form </a>
                      </li>
                      <li>
                        <a href="form-mask"> Form Mask </a>
                      </li>
                      <li>
                        <a href="form-validation"> Form Validation </a>
                      </li>
                      <li>
                        <a href="form-select2">Form Select2 </a>
                      </li>
                      <li>
                        <a href="form-fileupload">File Upload </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <i className="la la-table" /> <span> Tables </span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li>
                        <a href="tables-basic">Basic Tables </a>
                      </li>
                      <li>
                        <a href="data-tables">Data Table </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>Extras</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="la la-file-text" />{" "}
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <i className="la la-info" /> <span>Change Log</span>{" "}
                      <span className="badge badge-primary ms-auto">v3.4</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span>Level 1</span> <span className="menu-arrow" />
                        </a>
                        <ul>
                          <li>
                            <a href="javascript:void(0);">
                              <span>Level 2</span>
                            </a>
                          </li>
                          <li className="submenu">
                            <a href="javascript:void(0);">
                              {" "}
                              <span> Level 2</span>{" "}
                              <span className="menu-arrow" />
                            </a>
                            <ul>
                              <li>
                                <a href="javascript:void(0);">Level 3</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Level 3</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              {" "}
                              <span>Level 2</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          {" "}
                          <span>Level 1</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <ul className="sidebar-vertical">
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a className="active" href="admin-dashboard">
                        Admin Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="employee-dashboard">Employee Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-cube" /> <span> Apps</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="chat">Chat</a>
                    </li>
                    <li className="submenu">
                      <a href="#">
                        <span> Calls</span> <span className="menu-arrow" />
                      </a>
                      <ul>
                        <li>
                          <a href="voice-call">Voice Call</a>
                        </li>
                        <li>
                          <a href="video-call">Video Call</a>
                        </li>
                        <li>
                          <a href="outgoing-call">Outgoing Call</a>
                        </li>
                        <li>
                          <a href="incoming-call">Incoming Call</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="events">Calendar</a>
                    </li>
                    <li>
                      <a href="contacts">Contacts</a>
                    </li>
                    <li>
                      <a href="inbox">Email</a>
                    </li>
                    <li>
                      <a href="file-manager">File Manager</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Employees</span>
                </li>
                <li className="submenu">
                  <a href="#" className="noti-dot">
                    <i className="la la-user" /> <span> Employees</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="employees">All Employees</a>
                    </li>
                    <li>
                      <a href="holidays">Holidays</a>
                    </li>
                    <li>
                      <a href="leaves">
                        Leaves (Admin){" "}
                        <span className="badge rounded-pill bg-primary float-end">
                          1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="leaves-employee">Leaves (Employee)</a>
                    </li>
                    <li>
                      <a href="leave-settings">Leave Settings</a>
                    </li>
                    <li>
                      <a href="attendance">Attendance (Admin)</a>
                    </li>
                    <li>
                      <a href="attendance-employee">
                        Attendance (Employee)
                      </a>
                    </li>
                    <li>
                      <a href="departments">Departments</a>
                    </li>
                    <li>
                      <a href="designations">Designations</a>
                    </li>
                    <li>
                      <a href="timesheet">Timesheet</a>
                    </li>
                    <li>
                      <a href="shift-scheduling">Shift &amp; Schedule</a>
                    </li>
                    <li>
                      <a href="overtime">Overtime</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="clients">
                    <i className="la la-users" /> <span>Clients</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-rocket" /> <span> Projects</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="projects">Projects</a>
                    </li>
                    <li>
                      <a href="tasks">Tasks</a>
                    </li>
                    <li>
                      <a href="task-board">Task Board</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="leads">
                    <i className="la la-user-secret" /> <span>Leads</span>
                  </a>
                </li>
                <li>
                  <a href="tickets">
                    <i className="la la-ticket" /> <span>Tickets</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>HR</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-files-o" /> <span> Sales </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="estimates">Estimates</a>
                    </li>
                    <li>
                      <a href="invoices">Invoices</a>
                    </li>
                    <li>
                      <a href="payments">Payments</a>
                    </li>
                    <li>
                      <a href="expenses">Expenses</a>
                    </li>
                    <li>
                      <a href="provident-fund">Provident Fund</a>
                    </li>
                    <li>
                      <a href="taxes">Taxes</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-files-o" /> <span> Accounting </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="categories">Categories</a>
                    </li>
                    <li>
                      <a href="budgets">Budgets</a>
                    </li>
                    <li>
                      <a href="budget-expenses">Budget Expenses</a>
                    </li>
                    <li>
                      <a href="budget-revenues">Budget Revenues</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-money" /> <span> Payroll </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="salary"> Employee Salary </a>
                    </li>
                    <li>
                      <a href="salary-view"> Payslip </a>
                    </li>
                    <li>
                      <a href="payroll-items"> Payroll Items </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="policies">
                    <i className="la la-file-pdf-o" /> <span>Policies</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="expense-reports"> Expense Report </a>
                    </li>
                    <li>
                      <a href="invoice-reports"> Invoice Report </a>
                    </li>
                    <li>
                      <a href="payments-reports"> Payments Report </a>
                    </li>
                    <li>
                      <a href="project-reports"> Project Report </a>
                    </li>
                    <li>
                      <a href="task-reports"> Task Report </a>
                    </li>
                    <li>
                      <a href="user-reports"> User Report </a>
                    </li>
                    <li>
                      <a href="employee-reports"> Employee Report </a>
                    </li>
                    <li>
                      <a href="payslip-reports"> Payslip Report </a>
                    </li>
                    <li>
                      <a href="attendance-reports"> Attendance Report </a>
                    </li>
                    <li>
                      <a href="leave-reports"> Leave Report </a>
                    </li>
                    <li>
                      <a href="daily-reports"> Daily Report </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Performance</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-graduation-cap" />{" "}
                    <span> Performance </span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="performance-indicator">
                        {" "}
                        Performance Indicator{" "}
                      </a>
                    </li>
                    <li>
                      <a href="performance"> Performance Review </a>
                    </li>
                    <li>
                      <a href="performance-appraisal">
                        {" "}
                        Performance Appraisal{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="goal-tracking"> Goal List </a>
                    </li>
                    <li>
                      <a href="goal-type"> Goal Type </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-edit" /> <span> Training </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="training"> Training List </a>
                    </li>
                    <li>
                      <a href="trainers"> Trainers</a>
                    </li>
                    <li>
                      <a href="training-type"> Training Type </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="promotion">
                    <i className="la la-bullhorn" /> <span>Promotion</span>
                  </a>
                </li>
                <li>
                  <a href="resignation">
                    <i className="la la-external-link-square" />{" "}
                    <span>Resignation</span>
                  </a>
                </li>
                <li>
                  <a href="termination">
                    <i className="la la-times-circle" />{" "}
                    <span>Termination</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Administration</span>
                </li>
                <li>
                  <a href="assets">
                    <i className="la la-object-ungroup" /> <span>Assets</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="user-dashboard"> User Dasboard </a>
                    </li>
                    <li>
                      <a href="jobs-dashboard"> Jobs Dasboard </a>
                    </li>
                    <li>
                      <a href="jobs"> Manage Jobs </a>
                    </li>
                    <li>
                      <a href="manage-resumes"> Manage Resumes </a>
                    </li>
                    <li>
                      <a href="shortlist-candidates">
                        {" "}
                        Shortlist Candidates{" "}
                      </a>
                    </li>
                    <li>
                      <a href="interview-questions">
                        {" "}
                        Interview Questions{" "}
                      </a>
                    </li>
                    <li>
                      <a href="offer_approvals"> Offer Approvals </a>
                    </li>
                    <li>
                      <a href="experiance-level"> Experience Level </a>
                    </li>
                    <li>
                      <a href="candidates"> Candidates List </a>
                    </li>
                    <li>
                      <a href="schedule-timing"> Schedule timing </a>
                    </li>
                    <li>
                      <a href="apptitude-result"> Aptitude Results </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="knowledgebase">
                    <i className="la la-question" /> <span>Knowledgebase</span>
                  </a>
                </li>
                <li>
                  <a href="activities">
                    <i className="la la-bell" /> <span>Activities</span>
                  </a>
                </li>
                <li>
                  <a href="users">
                    <i className="la la-user-plus" /> <span>Users</span>
                  </a>
                </li>
                <li>
                  <a href="settings">
                    <i className="la la-cog" /> <span>Settings</span>
                  </a>
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-user" /> <span> Profile </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="profile"> Employee Profile </a>
                    </li>
                    <li>
                      <a href="client-profile"> Client Profile </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-key" /> <span> Authentication </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="index-2"> Login </a>
                    </li>
                    <li>
                      <a href="register"> Register </a>
                    </li>
                    <li>
                      <a href="forgot-password"> Forgot Password </a>
                    </li>
                    <li>
                      <a href="otp"> OTP </a>
                    </li>
                    <li>
                      <a href="lock-screen"> Lock Screen </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-exclamation-triangle" />{" "}
                    <span> Error Pages </span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="error-404">404 Error </a>
                    </li>
                    <li>
                      <a href="error-500">500 Error </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-hand-o-up" />{" "}
                    <span> Subscriptions </span> <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="subscriptions"> Subscriptions (Admin) </a>
                    </li>
                    <li>
                      <a href="subscriptions-company">
                        {" "}
                        Subscriptions (Company){" "}
                      </a>
                    </li>
                    <li>
                      <a href="subscribed-companies">
                        {" "}
                        Subscribed Companies
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-columns" /> <span> Pages </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="search"> Search </a>
                    </li>
                    <li>
                      <a href="faq"> FAQ </a>
                    </li>
                    <li>
                      <a href="terms"> Terms </a>
                    </li>
                    <li>
                      <a href="privacy-policy"> Privacy Policy </a>
                    </li>
                    <li>
                      <a href="blank-page"> Blank Page </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-get-pocket" /> <span> Base UI </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="alerts">Alerts</a>
                    </li>
                    <li>
                      <a href="accordions">Accordions</a>
                    </li>
                    <li>
                      <a href="avatar">Avatar</a>
                    </li>
                    <li>
                      <a href="badges">Badges</a>
                    </li>
                    <li>
                      <a href="buttons">Buttons</a>
                    </li>
                    <li>
                      <a href="buttongroup">Button Group</a>
                    </li>
                    <li>
                      <a href="breadcrumbs">Breadcrumb</a>
                    </li>
                    <li>
                      <a href="cards">Cards</a>
                    </li>
                    <li>
                      <a href="carousel">Carousel</a>
                    </li>
                    <li>
                      <a href="dropdowns">Dropdowns</a>
                    </li>
                    <li>
                      <a href="grid">Grid</a>
                    </li>
                    <li>
                      <a href="images">Images</a>
                    </li>
                    <li>
                      <a href="lightbox">Lightbox</a>
                    </li>
                    <li>
                      <a href="media">Media</a>
                    </li>
                    <li>
                      <a href="modal">Modals</a>
                    </li>
                    <li>
                      <a href="offcanvas">Offcanvas</a>
                    </li>
                    <li>
                      <a href="pagination">Pagination</a>
                    </li>
                    <li>
                      <a href="popover">Popover</a>
                    </li>
                    <li>
                      <a href="progress">Progress Bars</a>
                    </li>
                    <li>
                      <a href="placeholders">Placeholders</a>
                    </li>
                    <li>
                      <a href="rangeslider">Range Slider</a>
                    </li>
                    <li>
                      <a href="spinners">Spinner</a>
                    </li>
                    <li>
                      <a href="sweetalerts">Sweet Alerts</a>
                    </li>
                    <li>
                      <a href="tab">Tabs</a>
                    </li>
                    <li>
                      <a href="toastr">Toasts</a>
                    </li>
                    <li>
                      <a href="tooltip">Tooltip</a>
                    </li>
                    <li>
                      <a href="typography">Typography</a>
                    </li>
                    <li>
                      <a href="video">Video</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-dropbox" /> <span> Elements </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="ribbon">Ribbon</a>
                    </li>
                    <li>
                      <a href="clipboard">Clipboard</a>
                    </li>
                    <li>
                      <a href="drag-drop">Drag &amp; Drop</a>
                    </li>
                    <li>
                      <a href="rating">Rating</a>
                    </li>
                    <li>
                      <a href="text-editor">Text Editor</a>
                    </li>
                    <li>
                      <a href="counter">Counter</a>
                    </li>
                    <li>
                      <a href="scrollbar">Scrollbar</a>
                    </li>
                    <li>
                      <a href="notification">Notification</a>
                    </li>
                    <li>
                      <a href="stickynote">Sticky Note</a>
                    </li>
                    <li>
                      <a href="timeline">Timeline</a>
                    </li>
                    <li>
                      <a href="horizontal-timeline">Horizontal Timeline</a>
                    </li>
                    <li>
                      <a href="form-wizard">Form Wizard</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-chart-bar" /> <span> Charts </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="chart-apex">Apex Charts</a>
                    </li>
                    <li>
                      <a href="chart-js">Chart Js</a>
                    </li>
                    <li>
                      <a href="chart-morris">Morris Charts</a>
                    </li>
                    <li>
                      <a href="chart-flot">Flot Charts</a>
                    </li>
                    <li>
                      <a href="chart-peity">Peity Charts</a>
                    </li>
                    <li>
                      <a href="chart-c3">C3 Charts</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-icons" /> <span> Icons </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="icon-fontawesome">Fontawesome Icons</a>
                    </li>
                    <li>
                      <a href="icon-feather">Feather Icons</a>
                    </li>
                    <li>
                      <a href="icon-ionic">Ionic Icons</a>
                    </li>
                    <li>
                      <a href="icon-material">Material Icons</a>
                    </li>
                    <li>
                      <a href="icon-pe7">Pe7 Icons</a>
                    </li>
                    <li>
                      <a href="icon-simpleline">Simpleline Icons</a>
                    </li>
                    <li>
                      <a href="icon-themify">Themify Icons</a>
                    </li>
                    <li>
                      <a href="icon-weather">Weather Icons</a>
                    </li>
                    <li>
                      <a href="icon-typicon">Typicon Icons</a>
                    </li>
                    <li>
                      <a href="icon-flag">Flag Icons</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-object-group" /> <span> Forms </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="form-basic-inputs">Basic Inputs </a>
                    </li>
                    <li>
                      <a href="form-input-groups">Input Groups </a>
                    </li>
                    <li>
                      <a href="form-horizontal">Horizontal Form </a>
                    </li>
                    <li>
                      <a href="form-vertical"> Vertical Form </a>
                    </li>
                    <li>
                      <a href="form-mask"> Form Mask </a>
                    </li>
                    <li>
                      <a href="form-validation"> Form Validation </a>
                    </li>
                    <li>
                      <a href="form-select2">Form Select2 </a>
                    </li>
                    <li>
                      <a href="form-fileupload">File Upload </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="la la-table" /> <span> Tables </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="tables-basic">Basic Tables </a>
                    </li>
                    <li>
                      <a href="data-tables">Data Table </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Extras</span>
                </li>
                <li>
                  <a href="#">
                    <i className="la la-file-text" /> <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="la la-info" /> <span>Change Log</span>{" "}
                    <span className="badge badge-primary ms-auto">v3.4</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li className="submenu">
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow" />
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <span>Level 2</span>
                          </a>
                        </li>
                        <li className="submenu">
                          <a href="javascript:void(0);">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow" />
                          </a>
                          <ul>
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <span>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 1</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {children}
        <Outlet />
      </div>
      <>
  <div className="settings-icon">
    <span
      data-bs-toggle="offcanvas"
      data-bs-target="#theme-settings-offcanvas"
      aria-controls="theme-settings-offcanvas"
    >
      <i className="las la-cog" />
    </span>
  </div>
  <div
    className="offcanvas offcanvas-end border-0 "
    tabIndex={-1}
    id="theme-settings-offcanvas"
  >
    <div className="sidebar-headerset">
      <div className="sidebar-headersets">
        <h2>Customizer</h2>
        <h3>Customize your overview Page layout</h3>
      </div>
      <div className="sidebar-headerclose">
        <a data-bs-dismiss="offcanvas" aria-label="Close">
          <img src="assets/img/close.png" alt="Close Icon" />
        </a>
      </div>
    </div>
    <div className="offcanvas-body p-0">
      <div data-simplebar="" className="h-100">
        <div className="settings-mains">
          <div className="layout-head">
            <h5>Layout</h5>
            <h6>Choose your layout</h6>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-check card-radio p-0">
                <input
                  id="customizer-layout01"
                  name="data-layout"
                  type="radio"
                  defaultValue="vertical"
                  className="form-check-input"
                />
                <label
                  className="form-check-label avatar-md w-100"
                  htmlFor="customizer-layout01"
                >
                  <img src="assets/img/vertical.png" alt="Layout Image" />
                </label>
              </div>
              <h5 className="fs-13 text-center mt-2">Vertical</h5>
            </div>
            <div className="col-4">
              <div className="form-check card-radio p-0">
                <input
                  id="customizer-layout02"
                  name="data-layout"
                  type="radio"
                  defaultValue="horizontal"
                  className="form-check-input"
                />
                <label
                  className="form-check-label  avatar-md w-100"
                  htmlFor="customizer-layout02"
                >
                  <img src="assets/img/horizontal.png" alt="Layout Image" />
                </label>
              </div>
              <h5 className="fs-13 text-center mt-2">Horizontal</h5>
            </div>
            <div className="col-4">
              <div className="form-check card-radio p-0">
                <input
                  id="customizer-layout03"
                  name="data-layout"
                  type="radio"
                  defaultValue="twocolumn"
                  className="form-check-input"
                />
                <label
                  className="form-check-label  avatar-md w-100"
                  htmlFor="customizer-layout03"
                >
                  <img src="assets/img/two-col.png" alt="Layout Image" />
                </label>
              </div>
              <h5 className="fs-13 text-center mt-2">Two Column</h5>
            </div>
          </div>
          <div className="layout-head pt-3">
            <h5>Color Scheme</h5>
            <h6>Choose Light or Dark Scheme.</h6>
          </div>
          <div className="colorscheme-cardradio">
            <div className="row">
              <div className="col-4">
                <div className="form-check card-radio p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-orange"
                    defaultValue="orange"
                  />
                  <label
                    className="form-check-label  avatar-md w-100 "
                    htmlFor="layout-mode-orange"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Orange</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-light"
                    defaultValue="light"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="layout-mode-light"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Light</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio dark  p-0 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-dark"
                    defaultValue="dark"
                  />
                  <label
                    className="form-check-label avatar-md w-100 "
                    htmlFor="layout-mode-dark"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Dark</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio blue  p-0 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-blue"
                    defaultValue="blue"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="layout-mode-blue"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Blue</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio maroon p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-maroon"
                    defaultValue="maroon"
                  />
                  <label
                    className="form-check-label  avatar-md w-100 "
                    htmlFor="layout-mode-maroon"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Maroon</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio purple p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-purple"
                    defaultValue="purple"
                  />
                  <label
                    className="form-check-label  avatar-md w-100 "
                    htmlFor="layout-mode-purple"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Purple</h5>
              </div>
            </div>
          </div>
          <div id="layout-width">
            <div className="layout-head pt-3">
              <h5>Layout Width</h5>
              <h6>Choose Fluid or Boxed layout.</h6>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-check card-radio p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-width"
                    id="layout-width-fluid"
                    defaultValue="fluid"
                  />
                  <label
                    className="form-check-label avatar-md w-100"
                    htmlFor="layout-width-fluid"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Fluid</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio p-0 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-width"
                    id="layout-width-boxed"
                    defaultValue="boxed"
                  />
                  <label
                    className="form-check-label avatar-md w-100 px-2"
                    htmlFor="layout-width-boxed"
                  >
                    <img src="assets/img/boxed.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Boxed</h5>
              </div>
            </div>
          </div>
          <div id="layout-position">
            <div className="layout-head pt-3">
              <h5>Layout Position</h5>
              <h6>Choose Fixed or Scrollable Layout Position.</h6>
            </div>
            <div
              className="btn-group bor-rad-50 overflow-hidden radio"
              role="group"
            >
              <input
                type="radio"
                className="btn-check"
                name="data-layout-position"
                id="layout-position-fixed"
                defaultValue="fixed"
              />
              <label
                className="btn btn-light w-sm"
                htmlFor="layout-position-fixed"
              >
                Fixed
              </label>
              <input
                type="radio"
                className="btn-check"
                name="data-layout-position"
                id="layout-position-scrollable"
                defaultValue="scrollable"
              />
              <label
                className="btn btn-light w-sm ms-0"
                htmlFor="layout-position-scrollable"
              >
                Scrollable
              </label>
            </div>
          </div>
          <div className="layout-head pt-3">
            <h5>Topbar Color</h5>
            <h6>Choose Light or Dark Topbar Color.</h6>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-check card-radio  p-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-topbar"
                  id="topbar-color-light"
                  defaultValue="light"
                />
                <label
                  className="form-check-label avatar-md w-100"
                  htmlFor="topbar-color-light"
                >
                  <img src="assets/img/vertical.png" alt="Layout Image" />
                </label>
              </div>
              <h5 className="fs-13 text-center mt-2">Light</h5>
            </div>
            <div className="col-4">
              <div className="form-check card-radio p-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-topbar"
                  id="topbar-color-dark"
                  defaultValue="dark"
                />
                <label
                  className="form-check-label  avatar-md w-100"
                  htmlFor="topbar-color-dark"
                >
                  <img src="assets/img/dark.png" alt="Layout Image" />
                </label>
              </div>
              <h5 className="fs-13 text-center mt-2">Dark</h5>
            </div>
          </div>
          <div id="sidebar-size">
            <div className="layout-head pt-3">
              <h5>Sidebar Size</h5>
              <h6>Choose a size of Sidebar.</h6>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio  p-0 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidebar-size"
                    id="sidebar-size-default"
                    defaultValue="lg"
                  />
                  <label
                    className="form-check-label avatar-md w-100"
                    htmlFor="sidebar-size-default"
                  >
                    <img src="assets/img/vertical.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Default</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidebar-size"
                    id="sidebar-size-compact"
                    defaultValue="md"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="sidebar-size-compact"
                  >
                    <img src="assets/img/compact.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Compact</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio p-0 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidebar-size"
                    id="sidebar-size-small-hover"
                    defaultValue="sm-hover"
                  />
                  <label
                    className="form-check-label avatar-md w-100"
                    htmlFor="sidebar-size-small-hover"
                  >
                    <img src="assets/img/small-hover.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Small Hover View</h5>
              </div>
            </div>
          </div>
          <div id="sidebar-view">
            <div className="layout-head pt-3">
              <h5>Sidebar View</h5>
              <h6>Choose Default or Detached Sidebar view.</h6>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio  p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-style"
                    id="sidebar-view-default"
                    defaultValue="default"
                  />
                  <label
                    className="form-check-label avatar-md w-100"
                    htmlFor="sidebar-view-default"
                  >
                    <img src="assets/img/compact.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Default</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-style"
                    id="sidebar-view-detached"
                    defaultValue="detached"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="sidebar-view-detached"
                  >
                    <img src="assets/img/detached.png" alt="Layout Image" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Detached</h5>
              </div>
            </div>
          </div>
          <div id="sidebar-color">
            <div className="layout-head pt-3">
              <h5>Sidebar Color</h5>
              <h6>Choose a color of Sidebar.</h6>
            </div>
            <div className="row">
              <div className="col-4">
                <div
                  className="form-check sidebar-setting card-radio p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseBgGradient.show"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidebar"
                    id="sidebar-color-light"
                    defaultValue="light"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="sidebar-color-light"
                  >
                    <span className="bg-light bg-sidebarcolor" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Light</h5>
              </div>
              <div className="col-4">
                <div
                  className="form-check sidebar-setting card-radio p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseBgGradient.show"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidebar"
                    id="sidebar-color-dark"
                    defaultValue="dark"
                  />
                  <label
                    className="form-check-label  avatar-md w-100"
                    htmlFor="sidebar-color-dark"
                  >
                    <span className="bg-darks bg-sidebarcolor" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Dark</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio p-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidebar"
                    id="sidebar-color-gradient"
                    defaultValue="gradient"
                  />
                  <label
                    className="form-check-label avatar-md w-100"
                    htmlFor="sidebar-color-gradient"
                  >
                    <span className="bg-gradients bg-sidebarcolor" />
                  </label>
                </div>
                <h5 className="fs-13 text-center mt-2">Gradient</h5>
              </div>
              <div className="col-4 d-none">
                <button
                  className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseBgGradient"
                  aria-expanded="false"
                >
                  <span className="d-flex gap-1 h-100">
                    <span className="flex-shrink-0">
                      <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                        <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                        <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                        <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                        <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                      </span>
                    </span>
                    <span className="flex-grow-1">
                      <span className="d-flex h-100 flex-column">
                        <span className="bg-light d-block p-1" />
                        <span className="bg-light d-block p-1 mt-auto" />
                      </span>
                    </span>
                  </span>
                </button>
                <h5 className="fs-13 text-center mt-2">Gradient</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="offcanvas-footer border-top p-3 text-center">
      <div className="row">
        <div className="col-6">
          <button
            type="button"
            className="btn btn-light w-100 bor-rad-50"
            id="reset-layout"
          >
            Reset
          </button>
        </div>
        <div className="col-6">
          <a
            href=""
            target="_blank"
            className="btn btn-primary w-100 bor-rad-50"
          >
           
          </a>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  );
}

export default AppLayout;
