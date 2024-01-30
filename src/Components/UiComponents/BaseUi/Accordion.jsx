import React from 'react'

function Accordion() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Accordions</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-4">Default Tabs</h4>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href="#home"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#profile"
                    data-bs-toggle="tab"
                    aria-expanded="true"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#messages"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Messages
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane" id="home">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane show active" id="profile">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane" id="messages">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-4">Tabs Justified</h4>
              <ul className="nav nav-pills navtab-bg nav-justified">
                <li className="nav-item">
                  <a
                    href="#home1"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#profile1"
                    data-bs-toggle="tab"
                    aria-expanded="true"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#messages1"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Messages
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane" id="home1">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane show active" id="profile1">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane" id="messages1">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-4">Tabs Vertical Left</h4>
              <div className="row">
                <div className="col-sm-3">
                  <div
                    className="nav flex-column nav-pills nav-pills-tab"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active show mb-1"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Home
                    </a>
                    <a
                      className="nav-link mb-1"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Profile
                    </a>
                    <a
                      className="nav-link mb-1"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      Messages
                    </a>
                    <a
                      className="nav-link mb-1"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      Settings
                    </a>
                  </div>
                </div>{" "}
                {/* end col*/}
                <div className="col-sm-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups.Lorem ipsum is placeholder text
                        commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups. qui.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.Lorem
                        ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries for previewing layouts
                        and visual mockups.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.Lorem
                        ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries for previewing layouts
                        and visual mockups.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
              </div>{" "}
              {/* end row*/}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-4">Tabs Vertical Right</h4>
              <div className="row">
                <div className="col-sm-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade active show"
                      id="v-pills-home2"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab2"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile2"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab2"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups.Lorem ipsum is placeholder text
                        commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages2"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab2"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.Lorem
                        ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries for previewing layouts
                        and visual mockups.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-settings2"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab2"
                    >
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups. Lorem ipsum is placeholder
                        text commonly used in the graphic, print, and publishing
                        industries for previewing layouts and visual mockups.Lorem
                        ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries for previewing layouts
                        and visual mockups.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-sm-3">
                  <div
                    className="nav flex-column nav-pills nav-pills-tab"
                    id="v-pills-tab2"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active show mb-1"
                      id="v-pills-home-tab2"
                      data-bs-toggle="pill"
                      href="#v-pills-home2"
                      role="tab"
                      aria-controls="v-pills-home2"
                      aria-selected="true"
                    >
                      Home
                    </a>
                    <a
                      className="nav-link mb-1"
                      id="v-pills-profile-tab2"
                      data-bs-toggle="pill"
                      href="#v-pills-profile2"
                      role="tab"
                      aria-controls="v-pills-profile2"
                      aria-selected="false"
                    >
                      Profile
                    </a>
                    <a
                      className="nav-link mb-1"
                      id="v-pills-messages-tab2"
                      data-bs-toggle="pill"
                      href="#v-pills-messages2"
                      role="tab"
                      aria-controls="v-pills-messages2"
                      aria-selected="false"
                    >
                      Messages
                    </a>
                    <a
                      className="nav-link mb-1"
                      id="v-pills-settings-tab2"
                      data-bs-toggle="pill"
                      href="#v-pills-settings2"
                      role="tab"
                      aria-controls="v-pills-settings2"
                      aria-selected="false"
                    >
                      Settings
                    </a>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>{" "}
              {/* end row*/}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-4">Tabs Bordered</h4>
              <ul className="nav nav-tabs nav-bordered">
                <li className="nav-item">
                  <a
                    href="#home-b1"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#profile-b1"
                    data-bs-toggle="tab"
                    aria-expanded="true"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#messages-b1"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Messages
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane" id="home-b1">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane show active" id="profile-b1">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane" id="messages-b1">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-4">Tabs Bordered Justified</h4>
              <ul className="nav nav-tabs nav-bordered nav-justified">
                <li className="nav-item">
                  <a
                    href="#home-b2"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#profile-b2"
                    data-bs-toggle="tab"
                    aria-expanded="true"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#messages-b2"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    Messages
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane" id="home-b2">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane active" id="profile-b2">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
                <div className="tab-pane" id="messages-b2">
                  <p>
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.Lorem ipsum is placeholder text commonly used
                    in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-xl-6">
          <div id="accordion" className="custom-faq">
            <div className="card mb-1">
              <div className="card-header" id="headingOne">
                <h5 className="accordion-faq m-0">
                  <a
                    className="text-dark"
                    data-bs-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="true"
                  >
                    <i className="mdi mdi-help-circle me-1 text-primary" />
                    What is Vakal text here?
                  </a>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used in
                  the graphic, print, and publishing industries for previewing
                  layouts and visual mockups.Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual mockups.
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingTwo">
                <h5 className="accordion-faq m-0">
                  <a
                    className="text-dark"
                    data-bs-toggle="collapse"
                    href="#collapseTwo"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-help-circle me-1 text-primary" />
                    Why use Vakal text here?
                  </a>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used in
                  the graphic, print, and publishing industries for previewing
                  layouts and visual mockups.Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual mockups.
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingThree">
                <h5 className="accordion-faq m-0">
                  <a
                    className="text-dark"
                    data-bs-toggle="collapse"
                    href="#collapseThree"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-help-circle me-1 text-primary" />
                    How many variations exist?
                  </a>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used in
                  the graphic, print, and publishing industries for previewing
                  layouts and visual mockups.Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual mockups.
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingFour">
                <h5 className="accordion-faq m-0">
                  <a
                    className="text-dark"
                    data-bs-toggle="collapse"
                    href="#collapseFour"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-help-circle me-1 text-primary" />
                    What is Vakal text here?
                  </a>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="collapseFour"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used in
                  the graphic, print, and publishing industries for previewing
                  layouts and visual mockups.Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual mockups.
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end #accordions*/}
        </div>{" "}
        {/* end col */}
        <div className="col-xl-6">
          <div className="accordion custom-accordion" id="custom-accordion-one">
            <div className="card mb-1">
              <div className="card-header" id="headingNine">
                <h5 className="accordion-faq m-0 position-relative">
                  <a
                    className="custom-accordion-title text-reset d-block"
                    data-bs-toggle="collapse"
                    href="#collapseNine"
                    aria-expanded="true"
                    aria-controls="collapseNine"
                  >
                    Q. Can I use this template for my client?{" "}
                    <i className="mdi mdi-chevron-down accordion-arrow" />
                  </a>
                </h5>
              </div>
              <div
                id="collapseNine"
                className="collapse show"
                aria-labelledby="headingFour"
                data-bs-parent="#custom-accordion-one"
              >
                <div className="card-body">
                  Yup, the marketplace license allows you to use this theme in any
                  end products. For more information on licenses, please refere{" "}
                  <a href="#" target="_blank">
                    here
                  </a>
                  .
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingFive">
                <h5 className="accordion-faq m-0 position-relative">
                  <a
                    className="custom-accordion-title text-reset collapsed d-block"
                    data-bs-toggle="collapse"
                    href="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Q. Can this theme work with Wordpress?{" "}
                    <i className="mdi mdi-chevron-down accordion-arrow" />
                  </a>
                </h5>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#custom-accordion-one"
              >
                <div className="card-body">
                  No. This is a HTML template. It won't directly with wordpress,
                  though you can convert this into wordpress compatible theme
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingSix">
                <h5 className="accordion-faq m-0 position-relative">
                  <a
                    className="custom-accordion-title text-reset collapsed d-block"
                    data-bs-toggle="collapse"
                    href="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Q. How do I get help with the theme?{" "}
                    <i className="mdi mdi-chevron-down accordion-arrow" />
                  </a>
                </h5>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#custom-accordion-one"
              >
                <div className="card-body">
                  Use our dedicated support email (
                  <a
                    href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="86f5f3f6f6e9f4f2c6e5e9e2e3f4f2eee3ebe3f5a8e5e9eb"
                  >
                    [email&nbsp;protected]
                  </a>
                  ) to send your issues or feedback. We are here to help anytime
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingSeven">
                <h5 className="accordion-faq m-0 position-relative">
                  <a
                    className="custom-accordion-title text-reset collapsed d-block"
                    data-bs-toggle="collapse"
                    href="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Q. Will you regularly give updates of DGT ?{" "}
                    <i className="mdi mdi-chevron-down accordion-arrow" />
                  </a>
                </h5>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#custom-accordion-one"
              >
                <div className="card-body">
                  Yes, We will update the DGT regularly. All the future updates
                  would be available without any cost
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accord-btn">
            <a
              className="btn btn-primary mb-3"
              data-bs-toggle="collapse"
              href="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
            <button
              className="btn btn-primary mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Button with data-bs-target
            </button>
          </div>
          <div className="collapse show" id="collapseExample">
            <div className="card mb-0">
              <div className="card-body">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups.
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end col*/}
        <div className="col-lg-6">
          <div className="accord-btn">
            <button
              className="btn btn-primary mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Toggle width collapse
            </button>
          </div>
          <div>
            <div
              className="collapse collapse-horizontal"
              id="collapseWidthExample"
            >
              <div className="card card-body mb-0">
                This is some placeholder content for a horizontal collapse. It's
                hidden by default and shown when triggered.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  </div>
  
  )
}

export default Accordion
