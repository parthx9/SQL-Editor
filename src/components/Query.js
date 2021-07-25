import { useContext, useEffect, useState } from "react"
import MainContext from "../utils/MainContext"

const Query = (props) => {

  const { setQuery, project } = useContext(MainContext)
  const [searchQuery, setSearchQuery] = useState('')
  const [list, setList] = useState(project[props.type])

  const renderQueryList = (arr) => {
    return arr.map(i => {
      return (
        <div className=' cursor-pointer query'>
          <code onClick={() => setQuery(i)}>{i}</code>
        </div>)
    })
  }

  useEffect(() => {
    setList(project[props.type])
  }, [props, project])

  useEffect(() => {
    setList(project[props.type].filter(i => i.toLowerCase().includes(searchQuery.toLowerCase())))
  }, [searchQuery])

  return (
    <div className='query-wrapper'>
      <div className='search-bar'>
        <input placeholder="Search.." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      {list.length > 0 ? renderQueryList(list) : <div className='placeholder-text'><span className='fa fa-exclamation-circle'></span><p>No queries found.</p></div>}
    </div>
  )
}

export default Query