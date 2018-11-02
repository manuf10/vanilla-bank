import React, { Component } from 'react';
import './Bank.css'
import Slot from './Slot.js';
import ItemPicker from '../utils/ItemPicker';
import * as BankGenerator from '../utils/BankGenerator';
import axios from 'axios';
import socketClient from 'socket.io-client';
import TabSet from './TabSet';

const socket = socketClient('http://localhost:3333');

class Bank extends Component {
    constructor(props) {
        super(props);
        this.refreshTable = this.refreshTable.bind(this);
        this.state = {
            stock: 999,
            id: ItemPicker.getRandomId(),
            slots: this.createSlotsTable()
        };
    }

    componentDidMount() {
        socket.emit('wtfevent', 'hola');
        socket.on('chat', (message) => {
            console.log(message);
        });
    }

    createSlots() {
        let slots = [];
        for (let col = 0; col < 14; col++) {
            for (let row = 0; row < 7; row++) {
                slots.push(<Slot key={`${col}${row}`} item={this.state.slots[row][col]} col={col} row={row} disabled={false}/>);
            }
        }
        return slots;
    }

    createSlotsTable() {
        let newSlots = [];
        for (let row = 0; row < 7; row++) {
            let newRow = [];
            for (let col = 0; col < 14; col++) {
                newRow.push(BankGenerator.getRandomItem());
            }
            newSlots.push(newRow);
        }
        return newSlots;
    }

    refreshTable() {
        this.setState({ slots: this.createSlotsTable() });
    }

    render() {
        return (
            <React.Fragment>
                <span class="guild-name">{'<Hola>'}</span>
                <div className="bank-container unselectable">
                    <img id="bank-img" src="/imgs/bank.png" alt="Bank" />
                    <TabSet></TabSet>
                    {this.createSlots()}
                </div>
            </React.Fragment>
        );
    };
}

export default Bank;
