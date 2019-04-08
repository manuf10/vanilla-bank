import React, { Component } from 'react';
import './Slot.css';
import classNames from 'classnames';

export default class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = { iconLoaded: false, isHovered: false, stock: 0, icon: props.item ? 'inv_misc_questionmark' : '', disabled: props.disabled };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleIconLoaded = this.handleIconLoaded.bind(this);
    }

    handleMouseOver() {
        this.setState({isHovered: true});
    }

    handleMouseLeave() {
        this.setState({isHovered: false});
    }

    handleIconLoaded() {
        this.setState({iconLoaded: true});
    }

    renderIcon() {
        let iconClasses = classNames(
            'icon-img', {
            'hidden': !this.state.iconLoaded
        });

        let previewClasses = classNames(
            'icon-img', {
            'hidden': this.state.iconLoaded
        });
        return (
            <React.Fragment>
                <img onLoad={this.handleIconLoaded} className={iconClasses} src={`/imgs/icons/medium/${this.props.item.icon}.jpg`} alt="icon"/>
                <img className={previewClasses} src={`/imgs/icons/medium/inv_misc_questionmark.jpg`} alt="icon"/>
            </React.Fragment>
        );
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
                            {this.renderIcon()}
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
