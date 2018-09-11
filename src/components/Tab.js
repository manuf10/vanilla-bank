import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
    render() {
        return (
            <div className="tabs unselectable">
                <div className="other">
                    <img src="/tab_add.png" alt="tab" />
                </div>
            </div>
        );
    }
}

 export default Tab;