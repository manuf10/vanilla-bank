import React, { Component } from 'react';
import './Bank.css'
import Slot from './Slot.js';
import Tab from './Tab.js';
import * as ItemPicker from '../utils/ItemPicker';

class Bank extends Component {
    constructor(props) {
        super(props);
        this.createSlotsTable = this.createSlotsTable.bind(this);
        this.state = {
            stock: 999,
            id: ItemPicker.getRandomId()
        };
    }

    createSlots() {
        let slots = [];
        for (let col = 0; col < 14; col++) {
            for (let row = 0; row < 7; row++) {
                if (ItemPicker.getRandomStock() % 4 === 2)
                //if (col <= 4)
                    slots.push(<Slot key={`${col}${row}`} id={ItemPicker.getRandomId()} col={col} row={row} stock={this.state.stock} />);
                else
                    slots.push(<Slot key={`${col}${row}`} id='' col={col} row={row} stock='' />);
            }
        }
        return slots;
    }

    createSlotsTable() {
        this.setState((state) => ({ stock: state.stock + 1 }))
    }

    createTabs() {
        return <Tab />;
    }

    render() {
        return (
            <React.Fragment>
                <input type="button" value="Refresh" onClick={this.createSlotsTable}/>
                <div className="bank-container">
                    <img id="bank-img" src="/imgs/bank.png" alt="Bank" />
                    {this.createTabs()}
                    {this.createSlots()}
                </div>
            </React.Fragment>
        );
    };
}

export default Bank;
