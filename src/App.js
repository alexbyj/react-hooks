import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
        </header>
        <Example></Example>
      </div>
    );
  }
}


function Example() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>Current count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App;
