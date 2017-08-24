// src/components/ReportForm.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Grid, Row, Col, Label, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import SplitDropDown from './SplitDropDown';

var ReportForm = React.createClass({
    getInitialState: function() {
        return ({
        title: 'Cybernaut Report' });
    },

    componentWillMount: function() {
    },

    componentDidMount: function() {
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
            {/* First Name   Last Name    Branch Location    Current Date */}
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
                </FormGroup>
                {/* Reporting Period     Hours Worked*/ }
                <FormGroup>
                    <Col xs={8} componentClass={ControlLabel}>
                        Branch
                        <FormControl type={'input'} placeholder={'Branch'} />
                    </Col>
                    <Col xs={4} componentClass={ControlLabel}>
                        Today's Date
                        <FormControl type={'input'} placeholder={'mm/dd/yyyy'} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs={6} componentClass={ControlLabel}>
                        Reporting Period
                        <SplitDropDown />
                    </Col>
                    <Col xs={2}>
                    </Col>
                    <Col xs={3} componentClass={ControlLabel}>
                    Hours
                        <FormControl type={'input'} placeholder={'Hours Worked'} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs={3} componentClass={ControlLabel}>
                        Adult
                        <FormControl type={'input'} placeholder={'Adult Count'} />
                    </Col>
                    <Col xs={3} componentClass={ControlLabel}>
                        Adult 5+
                    <FormControl type={'input'} placeholder={'Adult 5+ Minutes'} />
                    </Col>
                    <Col xs={3} componentClass={ControlLabel}>
                        Youth
                    <FormControl type={'input'} placeholder={'Youth Count'} />
                    </Col>
                    <Col xs={3} componentClass={ControlLabel}>
                        Youth 5+
                        <FormControl type={'input'} placeholder={'Youth 5+ Minutes'} />
                    </Col>
                </FormGroup>
            </Form>
         {/*
             Optional fields for # Classes     # Patrons in classes    Topics Discussed
             Narrative Description
             5+ Minutes Description
             Optional Descriptions:
             Classes Description
             Anecdotal Description
             Benefits received Description
             Suggestions
         */}
        </div>
        );
    }

});
export default ReportForm;
