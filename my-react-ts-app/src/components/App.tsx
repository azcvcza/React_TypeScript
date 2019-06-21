import React from 'react';
import logo from '../logo.svg';
import "../css/App.css"
import Confirm from './Confirm'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and TypeScript
        </a>
      </header>
      <Confirm title="React And TypeScript" content="helo world" ></Confirm>
    </div>
  );
}

export default App;
