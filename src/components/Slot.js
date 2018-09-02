import React, { Component } from 'react';
import './Slot.css';
import classNames from 'classnames';
import axios from 'axios';

class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = { isHovered: false, stock: 0, icon: 'inv_misc_questionmark' };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    componentDidMount() {
        axios.get(`/api/items/${this.props.id}/icon`)
        .then(res => {
          console.log(res);
          this.setState({ icon: res.data });
        })
        .catch(function(error) {
            console.log(`Request failed for item #${this.props.id} icon.`);
        });
    }

    render() {
        let slotClass = classNames(
            'item-medium',
            'border-medium', {
            'border-medium-hi': this.state.isHovered,
        });

        return (
            <div className={`slot-${this.props.col}-${this.props.row} unselectable`}>
                <div className={slotClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                    <a href={`?item=${this.props.id}`}>
                    {/* <img className="icon-img" src={"/imgs/icons/medium/" + this.props.icon} alt=""/> */}
                    <img className="icon-img" src={`/imgs/icons/medium/${this.state.icon}.jpg`} alt=""/>
                    <span className="item-count">{this.props.stock}</span>
                    </a>
                </div>
            </div>
        );
    }
}

 export default Slot;