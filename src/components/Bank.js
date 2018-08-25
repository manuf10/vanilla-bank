import React, { Component } from 'react';
import './Bank.css'
import Slot from './Slot.js';
import Tab from './Tab.js';
import * as ItemPicker from '../utils/ItemPicker';

class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Nomasdasdbrecito' };
    }
    
    createSlots() {
        let slots = [];
        for (let col = 0; col < 14; col++) {
            for (let row = 0; row < 7; row++) {
                slots.push(<Slot col={col} row={row} icon={ItemPicker.getRandomImage()} stock={ItemPicker.getRandomStock()} />);
            }
        }
        return slots;
    }

    createTabs() {
        return <Tab />;
    }

    render() {
        return (
            <div className="bank-container">
                <img id="bank-img" src="/imgs/bank.png" alt="Bank" />
                {this.createTabs()}
                {this.createSlots()}
            </div>
        );
    };
}

export default Bank;
