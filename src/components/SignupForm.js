// src/components/ReportForm.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Grid, Row, Col, Label, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import SplitDropDown from './SplitDropDown';
import SignupButton from './SignupButton';
import UserActions from '../actions/UserActions';

var SignupForm = React.createClass({
    getInitialState: function() {
        return({
            title: 'Tally Sign Up'
        });
    },

    componentWillMount: function() {
    },

    componentWillUnmount: function() {
    },

    render: function() {
        return (
        // Page Title
        <div>
            <Grid>
        <Row>
            <Col xs={3} sm={2} md={3}>
            </Col>
            <Col xs={4} sm={8} md={6}>
            <h3>
            <Label>
                {this.state.title}
            </Label>
            </h3>
            </Col>
            <Col xs={4} sm={2} md={3}>
            </Col>
        </Row>
            </Grid>
            <Form horizontal>
                <FormGroup>
                <Col xs={0}>
                </Col>
                <Col xs={6}>
                <FormControl type={'input'} placeholder={'First Name'} />
                </Col>
                <Col xs={6}>
                <FormControl type={'input'} placeholder={'Last Name'} />
                </Col>
                <Col xs={0}>
                </Col>
                <Col xs={0}>
                </Col>
                <Col xs={6}>
                <FormControl type={'email'} placeholder={'Email Address'} />
                </Col>
                <Col xs={6}>
                <FormControl type={'password'} placeholder={'Enter your password'} />
                </Col>
                <Col xs={0}>
                </Col>
                </FormGroup>
                <Row>
                <Col xs={4}>
                </Col>
                <Col xs={4}>
                    <SignupButton signup={this.createUser}/>
                </Col>
                <Col xs={4}>
                </Col>
                </Row>
            </Form>
        </div>
        );
    },

    createUser: function() {
        UserActions.createUser({
            firstName: "Scott",
            lastName: "Todd",
            emailAddress: "scotthansontodd@gmail.com"
        });
    }

});
export default SignupForm;
