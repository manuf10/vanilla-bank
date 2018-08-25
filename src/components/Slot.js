import React, { Component } from 'react';
import './Slot.css';
import classNames from 'classnames';

class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = { isHovered: false, stock: 0,  };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        let slotClass = classNames(
            'item-medium',
            'border-medium', {
            'border-medium-hi': this.state.isHovered,
        });

        return (
            // <div className="slot-0-0">
            <div className={`slot-${this.props.col}-${this.props.row}`}>
                <div className={slotClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                    <img className="icon-img" src={"/imgs/medium/" + this.props.icon} alt="icon"/>
                    <span class="item-count">{this.props.stock}</span>
                </div>
            </div>
        );
    }
}

 export default Slot;