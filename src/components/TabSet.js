import React, { Component } from 'react';
import './TabSet.css';
import Tab from './Tab.js'

class TabSet extends Component {
    render() {
        return (
            <div className="tabs unselectable">
                <Tab name="General" icon="inv_ammo_bullet_02.jpg"></Tab>
                <div className="tab add">
                    <img src="/imgs/tab_add.png" alt="Add tab" />
                </div>
            </div>
        );
    }
}

 export default TabSet;