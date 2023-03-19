import './App.css';
import { useState } from 'react';
import PageContext from './Context/PageContext';
import ExpenseDetails from './Components/ExpenseDetails';
import Home  from './Components/Home';

function App() {

  const [showExpenseDetails, setShowExpenseDetails] = useState(false);

  return (
    <div className="App">
      <PageContext.Provider value={{ setShowExpenseDetails }}>

        {
          !showExpenseDetails
            ? <Home/>
            : <ExpenseDetails />
        }
      </PageContext.Provider>
    </div>
  );
}

export default App;
