import './App.css';
// import { useState } from 'react';
// import PageContext from './Context/PageContext';
// import ExpenseDetails from './Components/ExpenseDetails';
// import Home from './Components/Home';
import useFetch from './useFetch';


function App() {

  // const [showExpenseDetails, setShowExpenseDetails] = useState(false);

  const BASE_URL = 'https://reqres.in/api/users'
  const { data :news, loading, error } = useFetch(BASE_URL);


  return (
    <div className="App">

      <h1> Custom Hooks </h1>
      {loading && <h3>Loading</h3>}
      {error && <h3> Error </h3>}
      <div>
        <pre>{JSON.stringify(news, undefined, 2)}</pre>
      </div>



      {/* <PageContext.Provider value={{ setShowExpenseDetails }}>

        {
          !showExpenseDetails
            ? <Home/>
            : <ExpenseDetails />
        }
      </PageContext.Provider> */}
    </div>
  );
}

export default App;
