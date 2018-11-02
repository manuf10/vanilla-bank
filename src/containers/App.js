import React, { Component } from 'react';
import './App.css';
import Bank from '../components/Bank.js';


class App extends Component {
  render() {
    return (
      <div id="page-container">
          <header>Vanilla Bank</header>
          <Bank/>
      </div>
    );
  }
}

export default App;
