import './Body.css';
import { useContext } from 'react';
import ExpenseCard from './ExpenseCard';
import ExpenseSummary from './ExpenseSummary';
import AddIcon from '@mui/icons-material/Add';
import PageContext from '../Context/PageContext';

function Body() {

    const { setShowExpenseDetails } = useContext(PageContext);

    return (
        <>
            <div className="Body">

                <ExpenseSummary/>

                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />

                <div className='body-addButton'>
                    <AddIcon 
                        style={{ fontSize: '3.3rem', color: 'white' }} 
                        onClick={ () => setShowExpenseDetails(true)}
                    />
                </div>
            </div>


        </>
    );
}

export default Body;
