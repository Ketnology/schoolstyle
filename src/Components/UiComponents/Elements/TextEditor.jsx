import React from 'react'

function TextEditor() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid pb-0">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Text Editor</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Editor */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Editor</h5>
          </div>
          <div className="card-body">
            <div id="summernote" />
          </div>
        </div>
      </div>
      {/* /Editor */}
    </div>
  </div>
</div>

  )
}

export default TextEditor
