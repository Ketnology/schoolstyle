import React from 'react'

function DragDrop() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid pb-0">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Drag &amp; Drop</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row" id="card-drag-area">
      {/* Drag Card */}
      <div className="col-md-4 draggable">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Draggable Card 1</h5>
          </div>
          <div className="card-body">
            <p>
              Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie
              roll bonbon liquorice tiramisu pie powder.Donut sweet roll
              marzipan pastry cookie cake tootsie roll oat cake cookie.
            </p>
          </div>
        </div>
      </div>
      {/* /Drag Card */}
      {/* Drag Card */}
      <div className="col-md-4 draggable">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Draggable Card 2</h5>
          </div>
          <div className="card-body">
            <p>
              Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie
              roll bonbon liquorice tiramisu pie powder.Donut sweet roll
              marzipan pastry cookie cake tootsie roll oat cake cookie.
            </p>
          </div>
        </div>
      </div>
      {/* /Drag Card */}
      {/* Drag Card */}
      <div className="col-md-4 draggable">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Draggable Card 3</h5>
          </div>
          <div className="card-body">
            <p>
              Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie
              roll bonbon liquorice tiramisu pie powder.Donut sweet roll
              marzipan pastry cookie cake tootsie roll oat cake cookie.
            </p>
          </div>
        </div>
      </div>
      {/* /Drag Card */}
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Basic List Group Sortable</h5>
          </div>
          <div className="card-body">
            {/* Drag Card */}
            <ul className="list-group" id="basic-list-group">
              <li className="list-group-item draggable">
                <div className="chat-block">
                  <div className="media-body">
                    <h5 className="mt-0">Darren Elder</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item draggable">
                <div className="chat-block">
                  <div className="media-body">
                    <h5 className="mt-0">Linda Ellis</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item draggable">
                <div className="chat-block">
                  <div className="media-body">
                    <h5 className="mt-0">Toney Ritch</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item draggable">
                <div className="chat-block">
                  <div className="media-body">
                    <h5 className="mt-0">Flora Jag</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item draggable">
                <div className="chat-block">
                  <div className="media-body">
                    <h5 className="mt-0">Linda Marris</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            {/* /Drag Card */}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      {/* Drag Card */}
      <div className="col-md-12">
        <div className="card" id="dd-handle">
          <div className="card-header">
            <h5 className="card-title">Drag Handler</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h4 className="my-1">List One</h4>
                <ul className="list-group" id="handle-list-1">
                  <li className="list-group-item">
                    <span className="handle">+</span> Cras justo odio
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Morbi leo risus
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Porta ac consectetur ac
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Vestibulum at eros
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <h4 className="my-1">List Two</h4>
                <ul className="list-group" id="handle-list-2">
                  <li className="list-group-item">
                    <span className="handle">+</span> Cras justo odio
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Morbi leo risus
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Porta ac consectetur ac
                  </li>
                  <li className="list-group-item">
                    <span className="handle">+</span> Vestibulum at eros
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Drag Card */}
    </div>
  </div>
</div>

  )
}

export default DragDrop
