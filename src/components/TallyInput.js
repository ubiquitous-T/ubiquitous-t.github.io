// src/components/TallyInput.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './Header';
import Input from './InputComponent';
import TallyStore from '../stores/TallyStore';
import TallyActions from '../actions/TallyActions';
import {Grid, Row, Col} from 'react-bootstrap';

class TallyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTitle: ''
        }
        // Bind this object to onChange
        this.onChange = this.onChange.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    // Lifecycle methods
    componentWillMount() {
        TallyStore.addChangeListener(this.onChange);
        //TallyStore.addKeyListener(this.keyDown);
    }

    componentWillUnmount() {
        TallyStore.removeChangeListener(this.onChange);
        //TallyStore.removeKeyListener(this.keyDown);
    }

    onChange(event) {
        var target = event.target;
        var value = target.value;
        this.setState(() => ({ newTitle: value }));
    }
    
    keyDown(event) {
        var pressedKey = event.keyCode;
        if (pressedKey === 13) {
            TallyActions.createTally({title: this.state.newTitle});
        }
    }
    
    render() {
        return (
                React.createElement('div', {},
                    React.createElement(Header, {}, null),
                    React.createElement(Grid, {},
                        React.createElement(Row,
                            {className: 'text-center'},
                            React.createElement(Col,
                                {xs: 1, md: 3}, null),
                            React.createElement(Col,
                                {xs: 10, md: 6},
                                React.createElement(Input,
                                    {onChange: this.onChange,
                                     onKeyDown: this.keyDown},
                                     null)),
                            React.createElement(Col,
                                {xs: 1, md: 3}, null)
                        )
                    )
                )
        );
    }
}
export default TallyInput;
