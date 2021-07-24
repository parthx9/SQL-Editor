import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SavedQuery from './SavedQuery';
import PreviousQuery from './PreviousQuery';

const SideBar = () => {

  return (
    <div className='sidebar'>
      <div className='content'>
        <h5><span className='fa secondary fa-save me-2'></span> <span className='text-1'>Saved Queries</span></h5>
        <SavedQuery />
        <SavedQuery />
        <h5>
          <span className='fa secondary fa-undo me-2'></span> <span className='text-1'>Previous Queries</span>
        </h5>
        <PreviousQuery />
        <PreviousQuery />
        <PreviousQuery />
        <PreviousQuery />
      </div>
    </div>
  )
}

export default SideBar