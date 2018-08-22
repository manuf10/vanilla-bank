import React, { Component } from 'react';
import './Bank.css'
// import bank from './imgs/bank.png'

class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Nombrecito' };
    }
    
    render() {
        return (
            <React.Fragment>
                <span>{this.state.name}</span>
                <img src="imgs/bank.png" alt="Bank" />
            </React.Fragment>
        );
    };
}

export default Bank;
