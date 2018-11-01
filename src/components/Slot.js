import React, { Component } from 'react';
import './Slot.css';
import classNames from 'classnames';
import axios from 'axios';

export default class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = { isHovered: false, stock: 0, icon: props.item ? 'inv_misc_questionmark' : '', disabled: props.disabled };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {

    }

    handleMouseOver() {
        this.setState({isHovered: true});
    }

    handleMouseLeave() {
        this.setState({isHovered: false});
    }

    render() {
        let slotClass = classNames(
            'item-medium',
            'border-medium', {
            'border-medium-hi': this.state.isHovered,
            'grayed': this.state.disabled
        });

        if (this.props.item) {
            return (
                <div className={`slot-${this.props.col}-${this.props.row} unselectable`}>
                    <div onMouseLeave={this.handleMouseLeave} onMouseOver={this.handleMouseOver} className={slotClass}>
                        <a className="parent-size" href={`https://classicdb.ch/?item=${this.props.item.id}`}>
                            <img className="icon-img" src={`/imgs/icons/medium/${this.props.item.icon}.jpg`} alt=""/>
                            <span className="item-count">{this.state.stock}</span>
                        </a>
                    </div>
                </div>
            );
        } else {
            return (null);
        }
    }
}
