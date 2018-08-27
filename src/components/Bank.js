import React, { Component } from 'react';
import './Bank.css'
import Slot from './Slot.js';
import Tab from './Tab.js';
import * as ItemPicker from '../utils/ItemPicker';

class Bank extends Component {
    createSlots() {
        let slots = [];
        for (let col = 0; col < 14; col++) {
            for (let row = 0; row < 7; row++) {
                if (ItemPicker.getRandomStock() % 4 === 2)
                    slots.push(<Slot key={`${col}${row}`} id={ItemPicker.getRandomId()} col={col} row={row} icon={ItemPicker.getRandomImage()} stock={ItemPicker.getRandomStock()} />);
            }
        }
        return slots;
    }

    createTabs() {
        return <Tab />;
    }

    componentDidMount() {
        
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
