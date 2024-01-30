import React from 'react'

function TimeLine() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Timeline</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Ribbon */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge success">
                    <i className="fas fa-user" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Title</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Libero laboriosam dolor perspiciatis omnis exercitationem.
                        Beatae, officia pariatur? Est cum veniam excepturi.
                        Maiores praesentium, porro voluptas suscipit facere rem
                        dicta, debitis.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge warning">
                    <i className="fas fa-users" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Title </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Laudantium maiores odit qui est tempora eos, nostrum
                        provident explicabo dignissimos debitis vel! Adipisci eius
                        voluptates, ad aut recusandae minus eaque facere.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge danger">
                    <i className="fas fa-gift" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Repellendus numquam facilis enim eaque, tenetur nam id qui
                        vel velit similique nihil iure molestias aliquam,
                        voluptatem totam quaerat, magni commodi quisquam.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptates est quaerat asperiores sapiente, eligendi,
                        nihil. Itaque quos, alias sapiente rerum quas odit!
                        Aperiam officiis quidem delectus libero, omnis ut debitis!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge info">
                    <i className="fa fa-save" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nobis minus modi quam ipsum alias at est molestiae
                        excepturi delectus nesciunt, quibusdam
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge success">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Deserunt obcaecati, quaerat tempore officia voluptas
                        debitis consectetur culpa amet, accusamus dolorum fugiat,
                        animi dicta aperiam, enim incidunt quisquam maxime neque
                        eaque.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Ribbon */}
      </div>
    </div>
  </div>
  
  )
}

export default TimeLine
