import { useContext } from "react"
import MainContext from '../utils/MainContext'
import { queryData } from '../data/data'

const EditorPanel = () => {

  const { query, setProject } = useContext(MainContext)

  const runQuery = () => {
    if (query === 'SELECT * FROM orderTable') {
      setProject(prev => ({
        ...prev,
        data: queryData
      }))
    }
    else {
      alert('Please try the test query.')
    }
    setProject(prev => ({
      ...prev,
      history: [prev.history, query]
    }))
  }

  return (
    <div className='editor-panel'>
      <div className='btn primary-btn'>
        <button onClick={() => runQuery()} ><span className='fa fa-play me-1'></span>Run</button>
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