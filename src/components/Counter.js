// src/components/Counter.js

import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
                <h1>{this.props.count}</h1>
               );
    }
}
export default Counter;
