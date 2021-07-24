const EditorPanel = () => {
  return (
    <div className='editor-panel'>
      <div className='btn primary-btn'>
        <button><span className='fa fa-play me-1'></span>Run</button>
      </div>
      <div className='btn secondary-btn'>
        <button><span className='fa fa-save me-1'></span>Save</button>
      </div>
      <div className='btn alert-btn'>
        <button><span className='fa fa-times me-1'></span>Clear</button>
      </div>
    </div>
  )
}

export default EditorPanel