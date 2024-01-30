import React from 'react'

function HorizontalTimeLine() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Horizontal Timeline</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Timeline */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="cd-horizontal-timeline">
                <div className="timeline">
                  <div className="events-wrapper">
                    <div className="events">
                      <ol>
                        <li>
                          <a
                            href="#0"
                            data-date="16/01/2014"
                            className="selected"
                          >
                            16 Jan
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="28/02/2014">
                            28 Feb
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="20/04/2014">
                            20 Mar
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="20/05/2014">
                            20 May
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="09/07/2014">
                            09 Jul
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="30/08/2014">
                            30 Aug
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="15/09/2014">
                            15 Sep
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="01/11/2014">
                            01 Nov
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="10/12/2014">
                            10 Dec
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="19/01/2015">
                            29 Jan
                          </a>
                        </li>
                        <li>
                          <a href="#0" data-date="03/03/2015">
                            3 Mar
                          </a>
                        </li>
                      </ol>
                      <span className="filling-line" aria-hidden="true" />
                    </div>
                    {/* events */}
                  </div>
                  <ul className="cd-timeline-navigation">
                    <li>
                      <a href="#0" className="prev inactive">
                        Prev
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="next">
                        Next
                      </a>
                    </li>
                  </ul>
                  {/* cd-timeline-navigation */}
                </div>
                {/* timeline */}
                <div className="events-content">
                  <ol>
                    <li className="selected" data-date="16/01/2014">
                      <h3>
                        <small>Title 01</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="28/02/2014">
                      <h3>
                        {" "}
                        <small>Title 02</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="20/04/2014">
                      <h3>
                        <small>Title 03</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="20/05/2014">
                      <h3>
                        <small>Title 04</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="09/07/2014">
                      <h3>
                        <small>Title 05</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="30/08/2014">
                      <h3>
                        {" "}
                        <small>Title 06</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="15/09/2014">
                      <h3>
                        <small>Title 07</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="01/11/2014">
                      <h3>
                        {" "}
                        <small>Event List</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="10/12/2014">
                      <h3>
                        <small>Event Item</small>
                      </h3>
                      <p className="m-t-40">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="19/01/2015">
                      <h3>
                        <small>Event title</small>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                    <li data-date="03/03/2015">
                      <h3>
                        <small>Event title</small>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum praesentium officia, fugit recusandae ipsa, quia
                        velit nulla adipisci? Consequuntur aspernatur at, eaque
                        hic repellendus sit dicta consequatur quae, ut harum ipsam
                        molestias maxime non nisi reiciendis eligendi! Doloremque
                        quia pariatur harum ea amet quibusdam quisquam, quae,
                        temporibus dolores porro doloribus.
                      </p>
                    </li>
                  </ol>
                </div>
                {/* .events-content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Ribbon */}
      </div>
    </div>
  </div>
  
  )
}

export default HorizontalTimeLine
