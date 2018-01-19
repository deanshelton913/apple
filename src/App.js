import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Damn it, Gary</h1>
          <img src="https://y.yarn.co/ec154314-c072-4941-83ef-8f55d895be8e_screenshot.jpg" alt="Damnit, Gary" />
        </p>
      </div>
    );
  }
}

export default App;
