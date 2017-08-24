// src/components/App.js

import 'normalize.css/normalize.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import TallyStore from '../stores/TallyStore';
import TallyActions from '../actions/TallyActions';
import Base from './Base';
import TitleBar from './TitleBar';
import IncrementAdult from './IncrementAdult';
import IncrementExtraAdult from './IncrementExtraAdult';
import IncrementYouth from './IncrementYouth';
import IncrementExtraYouth from './IncrementExtraYouth';
import {Grid, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.id,
            title: '',
            adultCount: '',
            adultCountKey: 'adultCount',
            adultExtraCount: '',
            adultExtraCountKey: 'adultExtraCount',
            youthCount: '',
            youthCountKey: 'youthCount',
            youthExtraCount: '',
            youthExtraCountKey: 'youthExtraCount'
        }
        // Bind this object to onChange method
        this.onChange = this.onChange.bind(this);
        this.increment = this.increment.bind(this);
    }

    componentWillMount() {
        TallyStore.addChangeListener(this.onChange);
        TallyActions.retrieveTally({id: this.props.id});
        /*
        this.lock = new Auth0Lock(
              'I5ykxpV50zoiIsK1yEoeMMCBiA6wOvIg',
              'scott-todd-portfolio.auth0.com');
        */
    }
    
    componentWillUnmount() {
        TallyStore.removeChangeListener(this.onChange);
    }

    onChange() {
        //console.debug('onChange');
        var obj = TallyStore.getLocalTally();
        !JSON.parse(obj.tally).errors ?
        (this.setState(() => ({
            _id: JSON.parse(obj.tally)._id,
            title: JSON.parse(obj.tally).title,
            adultCount: JSON.parse(obj.tally).adultCount,
            adultExtraCount: JSON.parse(obj.tally).adultExtraCount,
            youthCount: JSON.parse(obj.tally).youthCount,
            youthExtraCount: JSON.parse(obj.tally).youthExtraCount,
            tally: obj.tally })))
        :
        (this.setState(() => ({
            errorDescription: JSON.parse(obj.tally).errors.tallyName,
            errorType: JSON.parse(obj.tally).errors.tallyName.properties.type })))
         /*
         console.debug('tally object: %s', JSON.stringify(obj.tally))
         console.debug('from onChange: this.state.errorDescription.value: %s',
                        JSON.stringify(this.state.errorDescription.value))
        */
    }

    increment(key) {
        // perform action to update data on backend
        TallyActions.updateTally({
            id: this.state._id,
            key: key,
            value: (parseInt(this.state[key]) + 1) });
    }
    
    // Specs
    render() {
        return (
                <div>
                {this.state.errorType === 'unique' ? (
                    <div>
                    {setTimeout(function() {
                                   return (<BrowserRouter>
                                      <Route path='/' component={Base } />
                                      </BrowserRouter>)
                               }, 2000)}
                        <p>Oops...</p>
                        <p>Tally name: <b>{JSON.stringify(this.state.errorDescription.value)}</b>
                        <span>&nbsp;&nbsp;already exists!</span></p>
                    </div>
                     )
                    :
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className={'text-center'}>
                                    <TitleBar title={'Adult Tally'} />
                                    <Grid>
                                        <Row>
                                            <Col xs={1} md={1}>
                                            </Col>
                                            <Col xs={3} md={2}>
                                                <div className={'text-center'}>
                                                    <h1>{this.state.adultExtraCount}</h1>
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
                                                        <h1>{this.state.adultCount}</h1>
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
                                                <IncrementExtraAdult label={'Add Adult 5+ Min'}
                                                    increment={this.increment.bind(this, 'adultExtraCount')} />
                                                <IncrementAdult label={'Add Adult'}
                                                    increment={this.increment.bind(this, 'adultCount')} />
                                            </Col>
                                            <Col xs={1} md={3}>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
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
                                                <IncrementExtraYouth
                                                    label={'Add Youth 5+ Min'}
                                                    increment={this.increment.bind(this, 'youthExtraCount')} />
                                                <IncrementYouth
                                                    label={'Add Youth'}
                                                    increment={this.increment.bind(this, 'youthCount')} />
                                            </Col>
                                            <Col xs={1} md={3}>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                            
                        
                            </Col>
                        </Row>
                    </Grid>
                    }
                </div>
                );
    }
}
export default App;
