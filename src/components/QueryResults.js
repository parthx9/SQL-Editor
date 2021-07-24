import { useState } from 'react'
import ColumnDetails from './ColumnDetails'
import Table from './Table'

const QueryResults = () => {

  const [tab, setTab] = useState(0)

  return (
    <div className='query-results'>

      <div className='tab-bar'>
        <span className={`tabs ${tab === 0 ? "active" : ""}`} onClick={() => setTab(0)}>Table</span>
        <span className={`tabs ${tab === 1 ? "active" : ""}`} onClick={() => setTab(1)}>Columns</span>
      </div>
      <div className='query-details'>
        <p className='text-2'>Showing <span>{tab === 0 ? 5 : 11}</span> results<span style={{ fontSize: '0.8rem' }} className='text-1'>(0.03s)</span></p>
        <div className='export-btn'>
          <button>Export</button>
        </div>
      </div>
      {tab === 0 ? (
        <Table></Table>
      ) : <ColumnDetails />}

    </div>
  )
}

export default QueryResults