import { queryData } from "../data/data"
import { getTableHeadFromData, getTableRowsFromData } from "../utils/tableHelpers"

const Table = () => {
  return (
    <div className='query-table'>
      <table>
        <thead>
          {getTableHeadFromData(queryData)}
        </thead>
        {getTableRowsFromData(queryData)}
      </table>
    </div>
  )
}

export default Table