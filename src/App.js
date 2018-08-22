import React, { Component } from 'react';
import './App.css';
import Bank from './Bank.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { guildName: 'Nombrecito' };
  }

  changeName() {
    this.setState({
      guildName: 'Nuevo nombre :)'
    });
  }

  render() {
    return (
      <div className="">
        <button onClick={ () => this.changeName() }>Button</button>
        <Bank guildName={this.state.guildName}/>
      </div>
    );
  }
}

export default App;
