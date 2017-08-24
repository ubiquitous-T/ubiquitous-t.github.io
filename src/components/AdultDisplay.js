// src/components/AdultDisplay.js

import React, {Component} from 'react';
import Display from './Display';
import Counter from './Counter';

class AdultDisplay extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            adultCount: 139
        }
    }

    // Lifecycle methods
    ComponentDidMount() {
        this.setState({ count: this.state.adultCount });
    }

    render() {
        return (
            <Display>
                <Counter />
            </Display>
               );
    }
}
export default AdultDisplay;
