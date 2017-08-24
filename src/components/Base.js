// src/components/Base.js

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TallyActions from '../actions/TallyActions';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';
import Header from './Header';
import Body from './Body';
import App from './App';
import List from './List';
import Default from './Default';

var Router = require('react-router');
var RouterDom = require('react-router-dom');

var Base = React.createClass({
    getInitialState: function() {
        console.log('props: %s', this.props);
        return ({
            path: '/' //this.props.routes[0].path,
            //id: this.props.routeParams['id']
        });
    },

    componentWillMount: function() {
        console.log('props: %s', this.props);
        AuthStore.addChangeListener(this.onChange);
        /*this.lock = new Auth0Lock(
            'I5ykxpV50zoiIsK1yEoeMMCBiA6wOvIg',
            'scott-todd-portfolio.auth0.com');
            */
    },

    componentWillUnmount: function() {
        AuthStore.removeChangeListener(this.onChange);
    },

    render: function() {
        console.debug('state authenticated: %s', this.state.authenticated);
        console.debug('props authenticated: %s', this.props.authenticated);
        return (
                <div>
                <Grid>
                    <Row>
                        <Col>
                            <Header
                            lock={this.lock}
                            authenticated={this.props.authenticated}>
                            </Header>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                        { !this.state.authenticated ?
                            <Default />
                                :
                            <Body authenticated={this.state.authenticated}>
                            {    this.props.routes[0].path === '/show/:id' ?
                                    <App path={this.props.routes[0].path} id={this.props.routeParams['id']} />
                                :
                                    this.props.routes[0].path === '/list-all' ?
                                    <List />
                                :
                                    <Default />
                            }
                            </Body>
                        }
                        </Col>
                    </Row>
                </Grid>
                </div>
               );
    },

    onChange: function() {
        var authenticated = AuthStore.isAuthenticated();
        console.debug('user object: %s', authenticated);
        this.setState(() => ({
            authenticated: authenticated
        }));
    },
/*
    login: function() {
*/
        /* The AuthLock.show method
         * allows the user to log in.
         */
/*
        this.lock.show((error, profile, token) => {
            if (error) {
                alert(error);
                return;
            }
            AuthActions.logUserIn(profile, token);
            this.setState({authenticated: true});
        });
    },
    logout: function() {
        AuthActions.logUserOut();
        this.setState({authenticated: false});
        // send user to default landing
        Router.browserHistory.push({ pathname: '/' });
    },
*/
    createTally: function() {
        const DEFAULT_PREFIX = 'Cybernaut Tally:';
        var tallyName = DEFAULT_PREFIX;
        var dateString = this.createDate();
        tallyName += ' '+dateString;
        TallyActions.createTally({title: tallyName,
                                  tallyName: tallyName});
    },

    createDate: function() {
        // Store month names
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // Create a string for current date
        var date = new Date();
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return (month+'-'+day+'-'+year);
    }

});
export default Base;
