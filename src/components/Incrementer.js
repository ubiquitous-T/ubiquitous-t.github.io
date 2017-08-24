// src/components/Incrementer.js

import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class IncrementComponent extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
                <button onClick={this.increment} className={'form-control'} type={'button'}>
                    Increment Tally
                </button>
               );
    }
}
export default IncrementComponent;
