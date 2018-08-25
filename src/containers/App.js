import React, { Component } from 'react';
import './App.css';
import Bank from '../components/Bank.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { guildName: 'Nombasdadadrecito' };
  }

  changeName() {
    this.setState({
      guildName: 'Nuevo nombre :)'
    });
  }

  render() {
    return (
      <div className="">
        <Bank guildName={this.state.guildName}/>
      </div>
    );
  }
}

export default App;
