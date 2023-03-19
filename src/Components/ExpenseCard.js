import './ExpenseCard.css';
import { useContext } from 'react';
import PageContext from '../Context/PageContext';
import DirectionsTransitFilledOutlinedIcon from '@mui/icons-material/DirectionsTransitFilledOutlined';


function ExpenseCard() {

  const { setShowExpenseDetails } = useContext(PageContext);

  return (
    <>
      <div className="ExpenseCard" onClick={()=>setShowExpenseDetails(true)}>

        <div className='ExpenseCard-header'>
          <div className='ExpenseCard-header-left'>
            <p style={{ 'color': 'gray' }}>03/10 Fri</p>
          </div>
          <div className='ExpenseCard-header-right' style={{'display':'flex'}}>
            <p style={{ 'margin-right': '1rem', 'color': 'gray' }}>Income: 100000</p>
            <p style={{ 'margin-left': '1rem', 'color': 'gray' }}>Expenses: 300</p>
          </div>
        </div>



        <div className='ExpenseCard-body'>
          <div className='ExpenseCard-body-left'>
            <div className='ExpenseCard-body-left-icons'>
              <DirectionsTransitFilledOutlinedIcon style={{'fontSize': '2rem', 'color':'white'}}/>
            </div>
            <p>Food</p>
          </div>
          <div className='ExpenseCard-body-right'>
            <p>-900</p>
          </div>
        </div>
        <div className='ExpenseCard-body'>
          <div className='ExpenseCard-body-left'>
            <div className='ExpenseCard-body-left-icons'>
              <DirectionsTransitFilledOutlinedIcon style={{'fontSize': '2rem', 'color':'white'}}/>
            </div>
            <p>Food</p>
          </div>
          <div className='ExpenseCard-body-right'>
            <p>-900</p>
          </div>
        </div>
        <div className='ExpenseCard-body'>
          <div className='ExpenseCard-body-left'>
            <div className='ExpenseCard-body-left-icons'>
              <DirectionsTransitFilledOutlinedIcon style={{'fontSize': '2rem', 'color':'white'}}/>
            </div>
            <p>Food</p>
          </div>
          <div className='ExpenseCard-body-right'>
            <p>-900</p>
          </div>
        </div>


        
      </div>
    </>
  );
}

export default ExpenseCard;
