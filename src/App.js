import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div style={{ 'z-index': '10', 'position': 'sticky', 'top': '0' }}>
        <Header/>
      </div>
      <div>
        <Body/>
      </div>
    </div>
  );
}

export default App;
