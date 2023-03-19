import './Body.css';
import ExpenseCard from './ExpenseCard';
import ExpenseSummary from './ExpenseSummary';
import AddIcon from '@mui/icons-material/Add';
function Body() {
    return (
        <>
            <div className="Body">

                <ExpenseSummary/>

                

                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />
                <ExpenseCard />

                <div className='body-addButton'>
                    <AddIcon style={{ fontSize: '3.3rem', color: 'white' }} />
                </div>
            </div>


        </>
    );
}

export default Body;
