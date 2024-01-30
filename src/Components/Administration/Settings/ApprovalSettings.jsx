import React from 'react'

function ApprovalSettings() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-md-12">
        {/* Page Header */}
        <div className="page-header mb-2">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Approval Settings</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Nav tabs */}
        <ul className="nav nav-tabs nav-tabs-bottom" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Expenses Approval
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Leave Approval
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="messages-tab"
              data-bs-toggle="tab"
              href="#messages"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Offer Approval
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="settings-tab"
              data-bs-toggle="tab"
              href="#settings"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Resignation Notice
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h4>Expense Approval Settings</h4>
            <div className="input-block mb-3 row">
              <label className="control-label col-md-12 col-form-label">
                Default Expense Approval
              </label>
              <div className="col-md-12 approval-option">
                <label className="radio-inline">
                  <input
                    id="radio-single1"
                    className="me-2 default_expense_approval"
                    defaultValue="seq-approver"
                    defaultChecked=""
                    name="default_expense_approval"
                    type="radio"
                  />
                  Sequence Approval (Chain){" "}
                  <sup>
                    {" "}
                    <span className="badge info-badge">
                      <i className="fa fa-info" aria-hidden="true" />
                    </span>
                  </sup>
                </label>
                <label className="radio-inline ms-2">
                  <input
                    id="radio-multiple3"
                    className="me-2 default_expense_approval"
                    defaultValue="sim-approver"
                    name="default_expense_approval"
                    type="radio"
                  />
                  Simultaneous Approval{" "}
                  <sup>
                    <span className="badge info-badge">
                      <i className="fa fa-info" aria-hidden="true" />
                    </span>
                  </sup>
                </label>
              </div>
            </div>
            <div className="input-block mb-3 row approver seq-approver d-block">
              <label className="control-label col-form-label col-sm-3">
                Expense Approvers
              </label>
              <div className="col-sm-9 ">
                <label className="ex_exp_approvers_1 control-label mb-2 exp_appr ps-0">
                  Approver 1
                </label>
                <div className="row ex_exp_approvers_1 input-block mb-3">
                  <div className="col-md-6">
                    <select
                      className="select form-control expense_approvers"
                      name="expense_approvers[]"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="">Select Approvers</option>
                      <option value={1}>CEO</option>
                      <option value={9}>Direct Manager</option>
                      <option value={11}>Development Manager</option>
                      <option value={6}>Finance</option>
                    </select>
                  </div>
                </div>
                <label className="ex_exp_approvers_2 control-label mb-2 exp_appr ps-0">
                  Approver 2
                </label>
                <div className="row ex_exp_approvers_2 input-block mb-3">
                  <div className="col-md-6">
                    <select
                      className="select form-control expense_approvers "
                      name="expense_approvers[]"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="">Select Approvers</option>
                      <option value={1}>CEO</option>
                      <option value={9}>Direct Manager</option>
                      <option value={11}>Development Manager</option>
                      <option value={6}>Finance</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <a
                      className="remove_ex_exp_approver btn rounded border text-danger"
                      data-id={2}
                    >
                      <i className="fa-solid fa-xmark" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <label className="ex_exp_approvers_3 control-label mb-2 exp_appr ps-0">
                  Approver 3
                </label>
                <div className="row ex_exp_approvers_3 input-block mb-3">
                  <div className="col-md-6">
                    <select
                      className="select form-control expense_approvers"
                      name="expense_approvers[]"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="">Select Approvers</option>
                      <option value={1}>CEO</option>
                      <option value={9}>Direct Manager</option>
                      <option value={11}>Development Manager</option>
                      <option value={6}>Finance</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <a
                      className="remove_ex_exp_approver btn rounded border text-danger"
                      data-id={3}
                    >
                      <i className="fa-solid fa-xmark" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-9 col-md-offset-3 m-t-10">
                  <a
                    id="add_expense_approvers"
                    href="javascript:void(0)"
                    className="add-more"
                  >
                    + Add Approver
                  </a>
                </div>
              </div>
              <div className="m-t-30">
                <div className="col-md-12 submit-section">
                  <button
                    id="expense_approval_set_btn"
                    type="submit"
                    className="btn btn-primary submit-btn"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="input-block mb-3 row">
              <label className="control-label col-md-12 col-form-label">
                Default Leave Approval
              </label>
              <div className="col-md-12 approval-option">
                <label className="radio-inline">
                  <input
                    id="radio-single"
                    className="me-2 default_offer_approval"
                    defaultValue="seq-approver"
                    name="default_leave_approval"
                    type="radio"
                  />
                  Sequence Approval (Chain){" "}
                  <sup>
                    {" "}
                    <span className="badge info-badge">
                      <i className="fa fa-info" aria-hidden="true" />
                    </span>
                  </sup>
                </label>
                <label className="radio-inline ms-2">
                  <input
                    id="radio-multiple1"
                    className="me-2 default_offer_approval"
                    defaultValue="sim-approver"
                    defaultChecked=""
                    name="default_leave_approval"
                    type="radio"
                  />
                  Simultaneous Approval{" "}
                  <sup>
                    <span className="badge info-badge">
                      <i className="fa fa-info" aria-hidden="true" />
                    </span>
                  </sup>
                </label>
              </div>
            </div>
            <div className="input-block mb-3 row">
              <label className="control-label col-form-label col-sm-12">
                leave Approvers
              </label>
              <div className="col-sm-6">
                <label className="control-label mb-2 pl-0">
                  Simultaneous Approval{" "}
                </label>
                <select className="select form-control" multiple="">
                  <option>Select</option>
                  <option>Test Lead</option>
                  <option>UI/UX Designer</option>
                  <option>Sox Analyst</option>
                </select>
              </div>
            </div>
            <div className="m-t-30 row ">
              <div className="col-md-12 submit-section">
                <button
                  id="leave_approval_set_btn"
                  type="submit"
                  className="btn btn-primary submit-btn"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <form>
              <h4>Offer Approval Settings</h4>
              <div className="input-block mb-3">
                <label className="control-label col-form-label col-md-12">
                  Default Offer Approval
                </label>
                <div className="col-md-12 approval-option">
                  <label className="radio-inline">
                    <input
                      id="radio-single2"
                      className="me-2 default_offer_approval"
                      defaultValue="seq-approver"
                      name="default_offer_approval"
                      type="radio"
                    />
                    Sequence Approval (Chain){" "}
                    <sup>
                      {" "}
                      <span className="badge info-badge">
                        <i className="fa fa-info" aria-hidden="true" />
                      </span>
                    </sup>
                  </label>
                  <label className="radio-inline ms-2">
                    <input
                      id="radio-multiple2"
                      className="me-2 default_offer_approval"
                      defaultValue="sim-approver"
                      defaultChecked=""
                      name="default_offer_approval"
                      type="radio"
                    />
                    Simultaneous Approval{" "}
                    <sup>
                      <span className="badge info-badge">
                        <i className="fa fa-info" aria-hidden="true" />
                      </span>
                    </sup>
                  </label>
                </div>
              </div>
              <div className="m-t-30">
                <div className="col-md-12 submit-section">
                  <button
                    id="offer_approval_set_btn"
                    type="submit"
                    className="btn btn-primary submit-btn"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="tab-pane"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <form>
              <h3>Resignation Notice</h3>
              <div className="input-block mb-3 row">
                <label className="col-sm-12">
                  Email Notification <span className="text-danger">*</span>
                </label>
                <div className="col-sm-6">
                  <label className="control-label col-form-label">
                    Simultaneous Approval{" "}
                  </label>
                  <select className="select form-control" multiple="">
                    <option>Select</option>
                    <option>Test Lead</option>
                    <option>UI/UX Designer</option>
                    <option>Sox Analyst</option>
                  </select>
                </div>
              </div>
              <div className="input-block mb-3 row">
                <label className="col-form-label col-md-12">
                  Notice Days <span className="text-danger">*</span>
                </label>
                <div className="col-md-6 approval-option">
                  <input
                    type="number"
                    name="notice_days"
                    className="form-control notice_days"
                    defaultValue={15}
                  />
                </div>
              </div>
              <div className="m-t-30">
                <div className="col-md-12 submit-section">
                  <button
                    id="resignation_notice_set_btn"
                    type="submit"
                    className="btn btn-primary submit-btn"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ApprovalSettings
