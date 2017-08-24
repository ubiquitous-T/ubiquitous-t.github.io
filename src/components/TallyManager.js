// src/components/TallyComponent.js

import 'normalize.css/normalize.css';
//import[ s]'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TallyActions from '../actions/TallyActions';
import TallyStore from '../stores/TallyStore';
import TitleBar from './TitleBar';
import TallyDisplay from './TallyDisplay';
import TallyDisplaySpecial from './TallyDisplaySpecial';
import IncrementButton from './IncrementButton';
import IncrementExtraButton from './IncrementExtraButton';
import {Grid, Row, Col} from 'react-bootstrap';

var TallyManager = React.createClass({
        getInitialState: function() {
            return ({
                title: this.props.title,
                count: this.props.count,
                extraCount: this.props.extraCount,
                id: this.props.id,
                key: this.props.countKey,
                extraCountKey: this.props.extraCountKey
            });
        },
/*
        componentWillReceiveProps: function(nextProps) {
            console.debug('componentWillReceiveProps: %s', nextProps);
        },

        shouldComponentUpdate: function(newProps, newState) {
            console.debug('shouldComponentUpdate');
            return true;
        },

        componentWillUpdate: function(newProps, newState) {
        },
        
        componentDidUpdate: function(prevProps, prevState) {
        },
*/
        increment: function() {
            // perform action to update data on backend
            TallyActions.updateTally({
                id: this.state.id,
                key: this.state.key,
                value: (parseInt(this.state.count) + 1) });
            // get count in local storage
            var tallyValue = TallyStore.getLocalTallyValue(this.state.key);
            console.log('tallyValue: %s', parseInt(tallyValue));
            var countKey = this.state.key
            // set updated count in local storage
            TallyStore.setLocalTallyValues(countKey, (parseInt(tallyValue)+1));
            // update count state
            this.setState(function(prevState) {
                return ({ count: parseInt(prevState.count) + 1 });
            })
        },
        
        incrementExtra: function() {
            // perform action to update data on backend
            TallyActions.updateTally({
                id: this.state.id,
                key: this.state.extraCountKey,
                value: (parseInt(this.state.extraCount) + 1)});
            // get count in local storage
            var extraCount = TallyStore.getLocalTallyValue(this.state.extraCountKey);
            //var extraCountKey = this.state.extraCountKey
            // set updated count in local storage
            TallyStore.setLocalTallyValues(this.state.extraCountKey, (parseInt(extraCount) + 1));
            // update count state
            this.setState(function(prevState) {
                return ({ extraCount: parseInt(prevState.extraCount) + 1 });
            })
        },

        render: function() {
            return (
                    <div className={'text-center'}>
                        <TitleBar title={this.state.title} />
                        <Grid>
                            <Row>
                                <Col xs={1} md={1}>
                                </Col>
                                <Col xs={3} md={2}>
                                   /* <TallyDisplaySpecial extraCount={this.state.extraCount} />*/
                                <div className={'text-center'}>
                                    <h1>{this.props.extraCount}</h1>
                                </div>
                                </Col>
                                <Col xs={8} md={9}>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1} md={3}>
                                </Col>
                                <Col xs={10} md={6}>
                                   /* <TallyDisplay count={this.state.count} />*/
                                    <div className={'jumbotron text-center'}>
                                        <div className={'text-center'}>
                                            <h1>{this.props.count}</h1>
                                        </div>
                                    </div>
 </Col>
                                <Col xs={1} md={3}>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={1} md={3}>
                                </Col>
                                <Col xs={10} md={6}>
                                    <IncrementExtraButton
                                        incrementExtra={this.incrementExtra} />
                                    <IncrementButton
                                        increment={this.increment} />
                                </Col>
                                <Col xs={1} md={3}>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                   );
        }
    
    });
export default TallyManager;
