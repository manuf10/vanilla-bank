import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="tab">
                    <img className='tab-img' src={`/imgs/icons/medium/inv_misc_shadowegg.jpg`} alt="icon"/>
                </div>
            </React.Fragment>
        );
    }
}

 export default Tab;