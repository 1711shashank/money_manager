import './ExpenseDetails.css'
import MyIcon from './MyIcon'
import { useContext } from 'react';
import PageContext from '../Context/PageContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DirectionsTransitFilledOutlinedIcon from '@mui/icons-material/DirectionsTransitFilledOutlined';


function ExpenseDetail() {

  const { setShowExpenseDetails } = useContext(PageContext);


  return (
    <>
      <div className="ExpenseDetail">

        <div className="ExpenseDetail-header" >
          <div className="ExpenseDetail-headerLeft" >
            <ArrowBackIcon style={{ fontSize: '2rem', color: 'gray' }} onClick={()=> setShowExpenseDetails(false)}/>
            <p style={{ 'font-size': '1.5rem', 'margin-left': '2rem' }}>Details</p>
          </div>
          <div className="ExpenseDetail-headerRight">
            <DeleteOutlineIcon style={{ fontSize: '2rem', color: 'gray' }} />
          </div>
        </div>

        <div className="ExpenseDetail-body">

          <div className='ExpenseDetail-bodyBox'>
            <div className="ExpenseDetail-bodyBox-header">
              <MyIcon Icon={DirectionsTransitFilledOutlinedIcon} />
              {/* <DirectionsTransitFilledOutlinedIcon style={{fontSize: '4rem'}}/> */}
              <p>Food</p>
            </div>
            <div className="ExpenseDetail-body-boxBody">
              <tr>
                <td>Catagery</td>
                <td>Expenses</td>
              </tr>
              <tr>
                <td>Money</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>03 Jan 2023 Fri</td>
              </tr>
              <tr>
                <td>Memo</td>
                <td>Custom Message</td>
              </tr>
            </div>
          </div>


          <div className='ExpenseDetail-EditIcon'>
            <MyIcon Icon={EditOutlinedIcon}/>
          </div>

        </div>

      </div>
    </>
  );
}

export default ExpenseDetail;
