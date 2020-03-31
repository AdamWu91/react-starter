import React from "react";
import logo from "./logo.svg";
import "@components/App/App.scss";

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="#reactjs.org" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
);
export default App;
