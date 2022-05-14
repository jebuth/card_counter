import './App.css';
import { useState } from "react";
import high from './img/high.png';
import mid from './img/mid.png';
import low from './img/low.png';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>{count}</h2>
        <div className="container">
          <button className="button_row" onClick={() => setCount(count - 1)}>
            <img src={high}></img>
          </button>
          <button className="button_row" >
            <img src={mid}></img>
          </button>
          <button className="button_row" onClick={() => setCount(count + 1)}>
            <img src={low}></img>
          </button>

          <button className="" onClick={() => setCount(0)}>
            reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
