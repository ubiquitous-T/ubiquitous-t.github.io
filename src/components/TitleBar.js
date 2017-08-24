// src/components/TitleBar.js

import React, {Component} from 'react';

class TitleBarComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
                <div>
                    <h3>{this.props.title}</h3>
                </div>
               );
    }
}
export default TitleBarComponent;
