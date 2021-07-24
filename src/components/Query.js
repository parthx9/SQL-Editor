import { useContext } from "react"
import MainContext from "../utils/MainContext"

const Query = (props) => {

  const { setQuery } = useContext(MainContext)

  const renderQueryList = (arr) => {
    return arr.map(i => {
      return (
        <div className='query'>
          <code onClick={() => setQuery(i)}>{i}</code>
        </div>)
    })
  }

  return (
    <div className='query-wrapper'>
      {renderQueryList(props.queryList)}
    </div>
  )
}

export default Query