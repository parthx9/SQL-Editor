import { queryData } from '../data/data'
import { getTableHeadFromData, getTableRowsFromData } from '../utils/tableHelpers'

const QueryResults = () => {

  return (
    <div className='query-results'>
      <table>
        <thead>
          {getTableHeadFromData(queryData)}
        </thead>
        {getTableRowsFromData(queryData)}
      </table>
    </div>
  )
}

export default QueryResults