// src/component/TallyContainer.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import AdultTally from './AdultTally';
import YouthTally from './YouthTally';
import { Grid, Row, Col } from 'react-bootstrap';

class TallyContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('adultCount > %s', this.props.adultCount);
        return (
                <div>

                </div>
        );
    }
}
export default TallyContainer;
