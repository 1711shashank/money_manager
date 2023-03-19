import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import ExpenseDetails from './Components/ExpenseDetails';

function App() {
  return (
    <div className="App">
      {/* <div style={{ 'z-index': '10', 'position': 'sticky', 'top': '0' }}>
        <Header/>
      </div>
      <div>
        <Body/>
      </div> */}
        <ExpenseDetails/>

    </div>
  );
}

export default App;
