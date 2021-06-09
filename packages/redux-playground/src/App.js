import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'

import {DECREMENT, INCREMENT, selectCount} from './store'

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Counter: {count}</p>
        <button onClick={() => dispatch(DECREMENT)}>Runter</button>
        <button onClick={() => dispatch(INCREMENT)}>Hoch</button>
      </header>
    </div>
  );
}

export default App;
