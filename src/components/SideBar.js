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
        <Accordion square="true">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='align-items-center'
          >
            <span className='fa secondary fa-save me-2'></span> <span className='text-1'>Saved Queries</span>
          </AccordionSummary>
          <AccordionDetails>
            <SavedQuery />
            <SavedQuery />
          </AccordionDetails>
        </Accordion>
        <Accordion square="true">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <span className='fa secondary fa-save me-2'></span> <span className='text-1'>Previous Queries</span>
          </AccordionSummary>
          <AccordionDetails>
            <PreviousQuery />
            <PreviousQuery />
            <PreviousQuery />
            <PreviousQuery />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default SideBar