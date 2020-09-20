import React from 'react'

function PanelResult({ srcDoc }) {
  return (
    <div>
      <div className="panelResult editorInput__panel">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default PanelResult
