import React from 'react'

function Placeholder() {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h5>Placeholders</h5>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body card-buttons pb-0">
              <h4 className="header-title">Placeholders</h4>
              <p className="text-muted">
                In the example below, we take a typical card component and
                recreate it with placeholders applied to create a “loading card”.
                Size and proportions are the same between the two.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="card border shadow-none">
                    <img
                      src="assets/img/img-1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card*/}
                </div>{" "}
                {/* end col*/}
                <div className="col-md-6">
                  <div
                    className="card border shadow-none mb-0"
                    aria-hidden="true"
                  >
                    <img
                      src="assets/img/img-2.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-title placeholder-glow">
                        <span className="placeholder col-6" />
                      </p>
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-7" />
                        <span className="placeholder col-4" />
                        <span className="placeholder col-4" />
                        <span className="placeholder col-6" />
                        <span className="placeholder col-8" />
                      </p>
                      <a
                        href="#"
                        tabIndex={-1}
                        className="btn btn-primary disabled placeholder col-6"
                      />
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card*/}
                </div>{" "}
                {/* end col*/}
              </div>{" "}
              {/* end row*/}
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
          <div className="card">
            <div className="card-body card-buttons">
              <h4 className="header-title">Width</h4>
              <p className="text-muted">
                You can change the <code>width</code> through grid column classes,
                width utilities, or inline styles.
              </p>
              <span className="placeholder col-6" />
              <span className="placeholder w-75" />
              <span className="placeholder" style={{ width: "25%" }} />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body card-buttons">
              <h4 className="header-title">Color</h4>
              <p className="text-muted">
                By default, the <code>placeholder</code> uses{" "}
                <code>currentColor</code>. This can be overriden with a custom
                color or utility class.
              </p>
              <span className="placeholder col-12" />
              <span className="placeholder col-12 bg-primary" />
              <span className="placeholder col-12 bg-secondary" />
              <span className="placeholder col-12 bg-success" />
              <span className="placeholder col-12 bg-danger" />
              <span className="placeholder col-12 bg-warning" />
              <span className="placeholder col-12 bg-info" />
              <span className="placeholder col-12 bg-light" />
              <span className="placeholder col-12 bg-dark" />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
          <div className="card">
            <div className="card-body card-buttons">
              <h4 className="header-title">How it works</h4>
              <p className="text-muted">
                Create placeholders with the <code>.placeholder</code> class and a
                grid column class (e.g., <code>.col-6</code>) to set the{" "}
                <code>width</code>. They can replace the text inside an element or
                as be added as a modifier class to an existing component.
              </p>
              <p aria-hidden="true">
                <span className="placeholder col-6" />
              </p>
              <a
                href="#"
                className="btn btn-primary disabled placeholder col-4"
                aria-hidden="true"
              />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
          <div className="card">
            <div className="card-body card-buttons">
              <h4 className="header-title">Animation</h4>
              <p className="text-muted">
                Animate placehodlers with <code>.placeholder-glow</code> or{" "}
                <code>.placeholder-wave</code> to better convey the perception of
                something being <em>actively</em> loaded.
              </p>
              <p className="placeholder-glow">
                <span className="placeholder col-12" />
              </p>
              <p className="placeholder-wave mb-0">
                <span className="placeholder col-12" />
              </p>
            </div>
            {/* end card-body*/}
          </div>
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body card-buttons">
              <h4 className="header-title">Sizing</h4>
              <p className="text-muted">
                The size of <code>.placeholder</code>s are based on the
                typographic style of the parent element. Customize them with
                sizing modifiers: <code>.placeholder-lg</code>,{" "}
                <code>.placeholder-sm</code>, or <code>.placeholder-xs</code>.
              </p>
              <span className="placeholder col-12 placeholder-lg" />
              <span className="placeholder col-12" />
              <span className="placeholder col-12 placeholder-sm" />
              <span className="placeholder col-12 placeholder-xs" />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>
        {/* end col*/}
      </div>
      {/* end row*/}
    </div>
  </div>
  
  )
}

export default Placeholder
