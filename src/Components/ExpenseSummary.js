import './ExpenseSummary.css';

function ExpenseSummary() {
    return (
        <>
            <div className="ExpenseSummary">

                <div>
                    <p className='ExpenseSummary-title'>Income</p>
                    <p className='ExpenseSummary-value'>384928</p>
                </div>
                <div>
                    <p className='ExpenseSummary-title'>Expenses</p>
                    <p className='ExpenseSummary-value'>35434</p>
                </div>
                <div>
                    <p className='ExpenseSummary-title'>Balance</p>
                    <p className='ExpenseSummary-value'>675867</p>
                </div>





            </div>


        </>
    );
}

export default ExpenseSummary;
