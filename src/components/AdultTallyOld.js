// src/components/AdultTally.js

import React, {Component} from 'react';
import TallyManager from './TallyManager';
/*
import TitleBar from './TitleBar';
import TallyDisplay from './TallyDisplay';
import IncrementButton from './IncrementButton';
import TallyActions from '../actions/TallyActions';
import TallyStore from '../stores/TallyStore';
import {Grid, Row, Col} from 'react-bootstrap';
*/
class AdultTally extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        //this.increment = this.increment.bind(this);
    }
    
    componentWillMount() {
        this.setState(() => ({
            id: this.props.id,
            count: this.props.count }));
    }
/*
    componentDidMount() {
        console.log('ID: %s', this.state.id);
    }

    componentWillUnmount() {
        //TallyStore.removeChangeListener(this.onChange);
    }

    increment() {
        // perform action to update data on backend
        TallyActions.updateTally({ id: this.state.id,
          key:'adultCount', value: (this.state.count + 1) });
        this.setState((prevState) => ({
            count: prevState.count + 1 }));
    }
*/
    render() {
        return (
            <TallyManager countKey={this.props.countKey}
                id={this.state.id}
                title={this.props.title}
                count={this.state.count} />
            /*
            <div className={'text-center'}>
                <TitleBar title={this.props.title} />
                <Grid>
                    <Row>
                        <Col xs={1} md={3}>
                        </Col>
                        <Col xs={10} md={6}>
                            <TallyDisplay count={this.state.count} />
                        </Col>
                        <Col xs={1} md={3}>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={3}>
                        </Col>
                        <Col xs={10} md={6}>
                            <IncrementButton increment={ this.increment} />
                        </Col>
                        <Col xs={1} md={3}>
                        </Col>
                    </Row>
                </Grid>
            </div>
            */
               );
    }
}
export default AdultTally;
