// src/components/YouthTally.js

import React, {Component} from 'react';
import TallyActions from '../actions/TallyActions';
import TallyStore from '../stores/TallyStore';
import TallyManager from './TallyManager';
import TitleBar from './TitleBar';
import IncrementButton from './IncrementButton';
import IncrementExtraButton from './IncrementExtraButton';
import {Grid, Row, Col} from 'react-bootstrap';

class YouthTally extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.id,
            //title: '',
            //adultCount: '',
            //adultCountKey: 'adultCount',
            //adultExtraCount: '',
            //adultExtraCountKey: 'adultExtraCount',
            youthCount: this.props.youthCount,
            youthCountKey: 'youthCount',
            youthExtraCount: this.props.youthExtraCount,
            youthExtraCountKey: 'youthExtraCount',
            tally: JSON.stringify({
                _id: this.props.id,
                title: '',
                adultCount: '',
                adultExtraCount: '',
                youthCount: '',
                youthExtraCount: ''
            })

        };
        // Bind this object to methods
        this.onChange = this.onChange.bind(this);
        this.increment = this.increment.bind(this);
        this.incrementExtra = this.incrementExtra.bind(this);
    }

    componentWillMount() {
        TallyStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        TallyStore.removeChangeListener(this.onChange);
    }
/*
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.id === this.state._id)
            return false;
        console.debug('YouthTally: will update');
        return true;
    }
    
    componentWillUpDate(newProps, newState) {
        console.debug('YouthTally: updating');
    }
*/
    onChange() {
    console.debug('YouthTally.onChange');
    var obj = TallyStore.getLocalTally();
    this.setState(() => ({
        _id: JSON.parse(obj.tally)._id,
        //title: JSON.parse(obj.tally).title,
        //adultCount: JSON.parse(obj.tally).adultCount,
        //adultExtraCount: JSON.parse(obj.tally).adultExtraCount,
        youthCount: JSON.parse(obj.tally).youthCount,
        youthExtraCount: JSON.parse(obj.tally).youthExtraCount}));
    }

    increment() {
        // perform action to update data on backend
        TallyActions.updateTally({
            id: this.state._id,
            key: this.state.youthCountKey,
            value: (parseInt(this.state.youthCount) + 1) });
    }
    
    incrementExtra() {
        // perform action to update data on backend
        TallyActions.updateTally({
            id: this.state._id,
            key: this.state.youthExtraCountKey,
            value: (parseInt(this.state.youthExtraCount) + 1)});
    }

    render() {
        return (
                <div className={'text-center'}>
                    <TitleBar title={'Youth Tally'} />
                    <Grid>
                        <Row>
                            <Col xs={1} md={1}>
                            </Col>
                            <Col xs={3} md={2}>
                                <div className={'text-center'}>
                                    <h1>{this.state.youthExtraCount}</h1>
                                </div>
                            </Col>
                            <Col xs={8} md={9}>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} md={3}>
                            </Col>
                            <Col xs={10} md={6}>
                                <div className={'jumbotron text-center'}>
                                    <div className={'text-center'}>
                                        <h1>{this.state.youthCount}</h1>
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
}
export default YouthTally;
