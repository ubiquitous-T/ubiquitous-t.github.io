// src/components/InputComponent.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';

class InputComponent extends Component {

    // propTypes
    //propTypes = {}

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
                React.createElement('input', {
                    type: 'text',
                    className: 'form-control',
                    placeholder: 'Enter New Tally Name',
                    onChange: this.props.onChange,
                    onKeyDown: this.props.onKeyDown}
                )
               );
    }
}
export default InputComponent;
