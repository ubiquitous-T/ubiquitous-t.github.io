// src/components/TallyComponent.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import TitleBar from './TitleBar';
import Display from './Display';
import {Grid, Row, Col} from 'react-bootstrap';

class TallyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Tally',
            count: 0
        }
        this.increment = this.increment.bind(this);
    }

    ComponentWillMount() {
        // Add necessary event listeners
    }

    ComponentDidMount() {
        // Perform necessary actions
    }

    increment() {
        this.setState((prevState) =>
                ({ count: prevState.count + 1 }));
        // perform action to update data on backend
    }
    
    render() {
        return (
                <div className={'text-center'}>
                    <TitleBar title={this.props.title} />
                    <Grid>
                        <Row>
                            <Col xs={1} md={3}>
                            </Col>
                            <Col xs={10} md={6}>
                                <Display count={this.props.count} />
                            </Col>
                            <Col xs={1} md={3}>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} md={3}>
                            </Col>
                            <Col xs={10} md={6}>
                                <button onClick={this.increment} className={'form-control'} type={'button'}>
                                    Increment Tally
                                </button>
                            </Col>
                            <Col xs={1} md={3}>
                            </Col>
                        </Row>
                    </Grid>
                </div>
               );
    }
}
export default TallyComponent;
