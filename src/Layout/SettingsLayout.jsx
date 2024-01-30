import React from "react";
import { Outlet } from "react-router-dom";
import { SettingsLink } from "../Styling/ExternalLink";

function SettingsLayout({ children }) {
  return (
    
    <>
    <SettingsLink />
    <div className="main-wrapper">
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="admin-dashboard" className="logo">
            <img src="assets/img/logo.png" width={40} height={40} alt="Logo" />
          </a>
          <a href="admin-dashboard" className="logo2">
            <img src="assets/img/logo2.png" width={40} height={40} alt="Logo" />
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
                            <span className="noti-title">Tarah Shropshire</span>{" "}
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
                            <span className="noti-title">Domenic Houston</span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
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
                            <span className="noti-title">Bernardo Galaviz</span>{" "}
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
              <i className="fa-regular fa-comment" />{" "}
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
                          <span className="message-author">Richard Miles </span>
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
                <img src="assets/img/profiles/avatar-21.jpg" alt="User Image" />
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

      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <a href="admin-dashboard">
                  <i className="la la-home" /> <span>Back to Home</span>
                </a>
              </li>
              <li className="menu-title">Settings</li>
              <li className="active">
                <a href="settings">
                  <i className="la la-building" /> <span>Company Settings</span>
                </a>
              </li>
              <li>
                <a href="localization">
                  <i className="la la-clock-o" /> <span>Localization</span>
                </a>
              </li>
              <li>
                <a href="theme-settings">
                  <i className="la la-photo" /> <span>Theme Settings</span>
                </a>
              </li>
              <li>
                <a href="roles-permissions">
                  <i className="la la-key" />{" "}
                  <span>Roles &amp; Permissions</span>
                </a>
              </li>
              <li>
                <a href="email-settings">
                  <i className="la la-at" /> <span>Email Settings</span>
                </a>
              </li>
              <li>
                <a href="performance-setting">
                  <i className="la la-chart-bar" />{" "}
                  <span>Performance Settings</span>
                </a>
              </li>
              <li>
                <a href="approval-setting">
                  <i className="la la-thumbs-up" />{" "}
                  <span>Approval Settings</span>
                </a>
              </li>
              <li>
                <a href="invoice-settings">
                  <i className="la la-pencil-square" />{" "}
                  <span>Invoice Settings</span>
                </a>
              </li>
              <li>
                <a href="salary-settings">
                  <i className="la la-money" /> <span>Salary Settings</span>
                </a>
              </li>
              <li>
                <a href="notifications-settings">
                  <i className="la la-globe" /> <span>Notifications</span>
                </a>
              </li>
              <li>
                <a href="change-password">
                  <i className="la la-lock" /> <span>Change Password</span>
                </a>
              </li>
              <li>
                <a href="leave-type">
                  <i className="la la-cogs" /> <span>Leave Type</span>
                </a>
              </li>
              <li>
                <a href="toxbox-setting">
                  <i className="la la-comment" /> <span>ToxBox Settings</span>
                </a>
              </li>
              <li>
                <a href="cron-setting">
                  <i className="la la-rocket" /> <span>Cron Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="two-col-bar" id="two-col-bar">
        <div className="sidebar sidebar-twocol">
          <div className="sidebar-left slimscroll">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link"
                id="v-pills-dashboard-tab"
                title="Dashboard"
                data-bs-toggle="pill"
                href="#v-pills-dashboard"
                role="tab"
                aria-controls="v-pills-dashboard"
                aria-selected="true"
              >
                <span className="material-icons-outlined">home</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-apps-tab"
                title="Apps"
                data-bs-toggle="pill"
                href="#v-pills-apps"
                role="tab"
                aria-controls="v-pills-apps"
                aria-selected="false"
              >
                <span className="material-icons-outlined">dashboard</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-employees-tab"
                title="Employees"
                data-bs-toggle="pill"
                href="#v-pills-employees"
                role="tab"
                aria-controls="v-pills-employees"
                aria-selected="false"
              >
                <span className="material-icons-outlined">people</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-clients-tab"
                title="Clients"
                data-bs-toggle="pill"
                href="#v-pills-clients"
                role="tab"
                aria-controls="v-pills-clients"
                aria-selected="false"
              >
                <span className="material-icons-outlined">person</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-projects-tab"
                title="Projects"
                data-bs-toggle="pill"
                href="#v-pills-projects"
                role="tab"
                aria-controls="v-pills-projects"
                aria-selected="false"
              >
                <span className="material-icons-outlined">topic</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-leads-tab"
                title="Leads"
                data-bs-toggle="pill"
                href="#v-pills-leads"
                role="tab"
                aria-controls="v-pills-leads"
                aria-selected="false"
              >
                <span className="material-icons-outlined">leaderboard</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-tickets-tab"
                title="Tickets"
                data-bs-toggle="pill"
                href="#v-pills-tickets"
                role="tab"
                aria-controls="v-pills-tickets"
                aria-selected="false"
              >
                <span className="material-icons-outlined">
                  confirmation_number
                </span>
              </a>
              <a
                className="nav-link"
                id="v-pills-sales-tab"
                title="Sales"
                data-bs-toggle="pill"
                href="#v-pills-sales"
                role="tab"
                aria-controls="v-pills-sales"
                aria-selected="false"
              >
                <span className="material-icons-outlined">shopping_bag</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-accounting-tab"
                title="Accounting"
                data-bs-toggle="pill"
                href="#v-pills-accounting"
                role="tab"
                aria-controls="v-pills-accounting"
                aria-selected="false"
              >
                <span className="material-icons-outlined">
                  account_balance_wallet
                </span>
              </a>
              <a
                className="nav-link"
                id="v-pills-payroll-tab"
                title="Payroll"
                data-bs-toggle="pill"
                href="#v-pills-payroll"
                role="tab"
                aria-controls="v-pills-payroll"
                aria-selected="false"
              >
                <span className="material-icons-outlined">request_quote</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-policies-tab"
                title="Policies"
                data-bs-toggle="pill"
                href="#v-pills-policies"
                role="tab"
                aria-controls="v-pills-policies"
                aria-selected="false"
              >
                <span className="material-icons-outlined">verified_user</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-reports-tab"
                title="Reports"
                data-bs-toggle="pill"
                href="#v-pills-reports"
                role="tab"
                aria-controls="v-pills-reports"
                aria-selected="false"
              >
                <span className="material-icons-outlined">
                  report_gmailerrorred
                </span>
              </a>
              <a
                className="nav-link"
                id="v-pills-performance-tab"
                title="Performance"
                data-bs-toggle="pill"
                href="#v-pills-performance"
                role="tab"
                aria-controls="v-pills-performance"
                aria-selected="false"
              >
                <span className="material-icons-outlined">shutter_speed</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-goals-tab"
                title="Goals"
                data-bs-toggle="pill"
                href="#v-pills-goals"
                role="tab"
                aria-controls="v-pills-goals"
                aria-selected="false"
              >
                <span className="material-icons-outlined">track_changes</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-training-tab"
                title="Training"
                data-bs-toggle="pill"
                href="#v-pills-training"
                role="tab"
                aria-controls="v-pills-training"
                aria-selected="false"
              >
                <span className="material-icons-outlined">checklist_rtl</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-promotion-tab"
                title="Promotions"
                data-bs-toggle="pill"
                href="#v-pills-promotion"
                role="tab"
                aria-controls="v-pills-promotion"
                aria-selected="false"
              >
                <span className="material-icons-outlined">auto_graph</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-resignation-tab"
                title="Resignation"
                data-bs-toggle="pill"
                href="#v-pills-resignation"
                role="tab"
                aria-controls="v-pills-resignation"
                aria-selected="false"
              >
                <span className="material-icons-outlined">
                  do_not_disturb_alt
                </span>
              </a>
              <a
                className="nav-link"
                id="v-pills-termination-tab"
                title="Termination"
                data-bs-toggle="pill"
                href="#v-pills-termination"
                role="tab"
                aria-controls="v-pills-termination"
                aria-selected="false"
              >
                <span className="material-icons-outlined">
                  indeterminate_check_box
                </span>
              </a>
              <a
                className="nav-link"
                id="v-pills-assets-tab"
                title="Assets"
                data-bs-toggle="pill"
                href="#v-pills-assets"
                role="tab"
                aria-controls="v-pills-assets"
                aria-selected="false"
              >
                <span className="material-icons-outlined">web_asset</span>
              </a>
              <a
                className="nav-link "
                id="v-pills-jobs-tab"
                title="Jobs"
                data-bs-toggle="pill"
                href="#v-pills-jobs"
                role="tab"
                aria-controls="v-pills-jobs"
                aria-selected="false"
              >
                <span className="material-icons-outlined">work_outline</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-knowledgebase-tab"
                title="Knowledgebase"
                data-bs-toggle="pill"
                href="#v-pills-knowledgebase"
                role="tab"
                aria-controls="v-pills-knowledgebase"
                aria-selected="false"
              >
                <span className="material-icons-outlined">school</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-activities-tab"
                title="Activities"
                data-bs-toggle="pill"
                href="#v-pills-activities"
                role="tab"
                aria-controls="v-pills-activities"
                aria-selected="false"
              >
                <span className="material-icons-outlined">toggle_off</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-users-tab"
                title="Users"
                data-bs-toggle="pill"
                href="#v-pills-users"
                role="tab"
                aria-controls="v-pills-users"
                aria-selected="false"
              >
                <span className="material-icons-outlined">group_add</span>
              </a>
              <a
                className="nav-link active"
                id="v-pills-settings-tab"
                title="Settings"
                data-bs-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <span className="material-icons-outlined">settings</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                title="Profile"
                data-bs-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <span className="material-icons-outlined">manage_accounts</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-authentication-tab"
                title="Authentication"
                data-bs-toggle="pill"
                href="#v-pills-authentication"
                role="tab"
                aria-controls="v-pills-authentication"
                aria-selected="false"
              >
                <span className="material-icons-outlined">
                  perm_contact_calendar
                </span>
              </a>
              <a
                className="nav-link"
                id="v-pills-errorpages-tab"
                title="Error Pages"
                data-bs-toggle="pill"
                href="#v-pills-errorpages"
                role="tab"
                aria-controls="v-pills-errorpages"
                aria-selected="false"
              >
                <span className="material-icons-outlined">announcement</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-subscriptions-tab"
                title="Subscriptions"
                data-bs-toggle="pill"
                href="#v-pills-subscriptions"
                role="tab"
                aria-controls="v-pills-subscriptions"
                aria-selected="false"
              >
                <span className="material-icons-outlined">loyalty</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-pages-tab"
                title="Pages"
                data-bs-toggle="pill"
                href="#v-pills-pages"
                role="tab"
                aria-controls="v-pills-pages"
                aria-selected="false"
              >
                <span className="material-icons-outlined">layers</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-baseui-tab"
                title="Base-UI"
                data-bs-toggle="pill"
                href="#v-pills-baseui"
                role="tab"
                aria-controls="v-pills-baseui"
                aria-selected="false"
              >
                <span className="material-icons-outlined">foundation</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-elements-tab"
                title="Elements"
                data-bs-toggle="pill"
                href="#v-pills-elements"
                role="tab"
                aria-controls="v-pills-elements"
                aria-selected="false"
              >
                <span className="material-icons-outlined">bento</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-charts-tab"
                title="Charts"
                data-bs-toggle="pill"
                href="#v-pills-charts"
                role="tab"
                aria-controls="v-pills-charts"
                aria-selected="false"
              >
                <span className="material-icons-outlined">bar_chart</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-icons-tab"
                title="Icons"
                data-bs-toggle="pill"
                href="#v-pills-icons"
                role="tab"
                aria-controls="v-pills-icons"
                aria-selected="false"
              >
                <span className="material-icons-outlined">grading</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-forms-tab"
                title="Forms"
                data-bs-toggle="pill"
                href="#v-pills-forms"
                role="tab"
                aria-controls="v-pills-forms"
                aria-selected="false"
              >
                <span className="material-icons-outlined">view_day</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-tables-tab"
                title="Tables"
                data-bs-toggle="pill"
                href="#v-pills-tables"
                role="tab"
                aria-controls="v-pills-tables"
                aria-selected="false"
              >
                <span className="material-icons-outlined">table_rows</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-documentation-tab"
                title="Documentation"
                data-bs-toggle="pill"
                href="#v-pills-documentation"
                role="tab"
                aria-controls="v-pills-documentation"
                aria-selected="false"
              >
                <span className="material-icons-outlined">description</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-changelog-tab"
                title="Changelog"
                data-bs-toggle="pill"
                href="#v-pills-changelog"
                role="tab"
                aria-controls="v-pills-changelog"
                aria-selected="false"
              >
                <span className="material-icons-outlined">sync_alt</span>
              </a>
              <a
                className="nav-link"
                id="v-pills-multilevel-tab"
                title="Multilevel"
                data-bs-toggle="pill"
                href="#v-pills-multilevel"
                role="tab"
                aria-controls="v-pills-multilevel"
                aria-selected="false"
              >
                <span className="material-icons-outlined">
                  library_add_check
                </span>
              </a>
            </div>
          </div>
          <div className="sidebar-right">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade"
                id="v-pills-dashboard"
                role="tabpanel"
                aria-labelledby="v-pills-dashboard-tab"
              >
                <p>Dashboard</p>
                <ul>
                  <li>
                    <a href="admin-dashboard">Admin Dashboard</a>
                  </li>
                  <li>
                    <a href="employee-dashboard">Employee Dashboard</a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-apps"
                role="tabpanel"
                aria-labelledby="v-pills-apps-tab"
              >
                <p>App</p>
                <ul>
                  <li>
                    <a href="chat">Chat</a>
                  </li>
                  <li className="sub-menu">
                    <a href="#">
                      Calls <span className="menu-arrow" />
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
                    <a href="calender">Calendar</a>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-employees"
                role="tabpanel"
                aria-labelledby="v-pills-employees-tab"
              >
                <p>Employees</p>
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
                    <a href="attendance-employee">Attendance (Employee)</a>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-clients"
                role="tabpanel"
                aria-labelledby="v-pills-clients-tab"
              >
                <p>Clients</p>
                <ul>
                  <li>
                    <a href="clients">Clients</a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-projects"
                role="tabpanel"
                aria-labelledby="v-pills-projects-tab"
              >
                <p>Projects</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-leads"
                role="tabpanel"
                aria-labelledby="v-pills-leads-tab"
              >
                <p>Leads</p>
                <ul>
                  <li>
                    <a href="leads">Leads</a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-tickets"
                role="tabpanel"
                aria-labelledby="v-pills-tickets-tab"
              >
                <p>Tickets</p>
                <ul>
                  <li>
                    <a href="tickets">Tickets</a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-sales"
                role="tabpanel"
                aria-labelledby="v-pills-sales-tab"
              >
                <p>Sales</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-accounting"
                role="tabpanel"
                aria-labelledby="v-pills-accounting-tab"
              >
                <p>Accounting</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-payroll"
                role="tabpanel"
                aria-labelledby="v-pills-payroll-tab"
              >
                <p>Payroll</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-policies"
                role="tabpanel"
                aria-labelledby="v-pills-policies-tab"
              >
                <p>Policies</p>
                <ul>
                  <li>
                    <a href="policies"> Policies </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-reports"
                role="tabpanel"
                aria-labelledby="v-pills-reports-tab"
              >
                <p>Reports</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-performance"
                role="tabpanel"
                aria-labelledby="v-pills-performance-tab"
              >
                <p>Performance</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-goals"
                role="tabpanel"
                aria-labelledby="v-pills-goals-tab"
              >
                <p>Goals</p>
                <ul>
                  <li>
                    <a href="goal-tracking"> Goal List </a>
                  </li>
                  <li>
                    <a href="goal-type"> Goal Type </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-training"
                role="tabpanel"
                aria-labelledby="v-pills-training-tab"
              >
                <p>Training</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-promotion"
                role="tabpanel"
                aria-labelledby="v-pills-promotion-tab"
              >
                <p>Promotion</p>
                <ul>
                  <li>
                    <a href="promotion"> Promotion </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-resignation"
                role="tabpanel"
                aria-labelledby="v-pills-resignation-tab"
              >
                <p>Resignation</p>
                <ul>
                  <li>
                    <a href="resignation"> Resignation </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-termination"
                role="tabpanel"
                aria-labelledby="v-pills-termination-tab"
              >
                <p>Termination</p>
                <ul>
                  <li>
                    <a href="termination"> Termination </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-assets"
                role="tabpanel"
                aria-labelledby="v-pills-assets-tab"
              >
                <p>Assets</p>
                <ul>
                  <li>
                    <a href="assets"> Assets </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-jobs"
                role="tabpanel"
                aria-labelledby="v-pills-jobs-tab"
              >
                <p>Jobs</p>
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
                    <a href="job-applicants"> Applied Jobs </a>
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
                    <a href="interview-questions"> Interview Questions </a>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-knowledgebase"
                role="tabpanel"
                aria-labelledby="v-pills-knowledgebase-tab"
              >
                <p>Knowledgebase</p>
                <ul>
                  <li>
                    <a href="knowledgebase"> Knowledgebase </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-activities"
                role="tabpanel"
                aria-labelledby="v-pills-activities-tab"
              >
                <p>Activities</p>
                <ul>
                  <li>
                    <a href="activities"> Activities </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-users"
                role="tabpanel"
                aria-labelledby="v-pills-activities-tab"
              >
                <p>Users</p>
                <ul>
                  <li>
                    <a href="users"> Users </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade  show active"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <p>Settings</p>
                <ul>
                  <li>
                    <a href="settings" className="active">
                      {" "}
                      Settings{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <p>Profile</p>
                <ul>
                  <li>
                    <a href="profile"> Employee Profile </a>
                  </li>
                  <li>
                    <a href="client-profile"> Client Profile </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-authentication"
                role="tabpanel"
                aria-labelledby="v-pills-authentication-tab"
              >
                <p>Authentication</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-errorpages"
                role="tabpanel"
                aria-labelledby="v-pills-errorpages-tab"
              >
                <p>Error Pages</p>
                <ul>
                  <li>
                    <a href="error-404">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500">500 Error </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-subscriptions"
                role="tabpanel"
                aria-labelledby="v-pills-subscriptions-tab"
              >
                <p>Subscriptions</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-pages"
                role="tabpanel"
                aria-labelledby="v-pills-pages-tab"
              >
                <p>Pages</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-baseui"
                role="tabpanel"
                aria-labelledby="v-pills-baseui-tab"
              >
                <p>Base-UI</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-elements"
                role="tabpanel"
                aria-labelledby="v-pills-elements-tab"
              >
                <p>Elements</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-charts"
                role="tabpanel"
                aria-labelledby="v-pills-charts-tab"
              >
                <p>Charts</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-icons"
                role="tabpanel"
                aria-labelledby="v-pills-icons-tab"
              >
                <p>Icons</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-forms"
                role="tabpanel"
                aria-labelledby="v-pills-forms-tab"
              >
                <p>Forms</p>
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
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-tables"
                role="tabpanel"
                aria-labelledby="v-pills-tables-tab"
              >
                <p>Tables</p>
                <ul>
                  <li>
                    <a href="tables-basic">Basic Tables </a>
                  </li>
                  <li>
                    <a href="data-tables">Data Table </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-documentation"
                role="tabpanel"
                aria-labelledby="v-pills-documentation-tab"
              >
                <p>Documentation</p>
                <ul>
                  <li>
                    <a href="#">Documentation </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-changelog"
                role="tabpanel"
                aria-labelledby="v-pills-changelog-tab"
              >
                <p>Change Log</p>
                <ul>
                  <li>
                    <a href="#">
                      <span>Change Log</span>{" "}
                      <span className="badge badge-primary ms-auto">v3.4</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-multilevel"
                role="tabpanel"
                aria-labelledby="v-pills-multilevel-tab"
              >
                <p>Multi Level</p>
                <ul>
                  <li className="sub-menu">
                    <a href="javascript:void(0);">
                      Level 1 <span className="menu-arrow" />
                    </a>
                    <ul className="ms-3">
                      <li className="sub-menu">
                        <a href="javascript:void(0);">
                          Level 1 <span className="menu-arrow" />
                        </a>
                        <ul>
                          <li>
                            <a href="javascript:void(0);">Level 2</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Level 2</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Level 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <Outlet />
    </div>
   </>
  );
}

export default SettingsLayout;
