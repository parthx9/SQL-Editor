
import { useContext } from 'react';
import MainContext from '../utils/MainContext';
import Query from './Query';

const SideBar = () => {

  const { project } = useContext(MainContext)

  return (
    <div className='sidebar'>
      <div className='content'>
        <h5><span className='fa secondary fa-save me-2'></span> <span className='text-1'>Saved Queries</span></h5>
        <Query queryList={project.saved} type="saved" />
        <h5>
          <span className='fa secondary fa-undo me-2'></span> <span className='text-1'>Previous Queries</span>
        </h5>
        <Query queryList={project.saved} type="history" />
      </div>
    </div>
  )
}

export default SideBar