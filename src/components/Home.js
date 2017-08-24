// src/components/Home.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // Lifecycle methods
    componentWillMount() {
        this.lock = new Auth0Lock('I5ykxpV50zoiIsK1yEoeMMCBiA6wOvIg', 'scott-todd-portfolio.auth0.com');
    }

    // Specs
    render() {
        return (
                <div>
                    <Header lock={this.lock}>
                    </Header>
                        <Grid>
                            <Row>
                                <Col xs={12} md={12}>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                </Col>
                            </Row>
                        </Grid>
                </div>
               );
    }
}
export default Home;
