// src/components/Header.js

import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TallyActions from '../actions/TallyActions';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

var Router = require('react-router-dom');

class HeaderComponent extends Component {

    constructor() {
        super();
        this.state = {
            authenticated: AuthStore.isAuthenticated()
        }
        // Make sure this object refers to this
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.createTally = this.createTally.bind(this);
        this.createDate = this.createDate.bind(this);
    }

    login() {
        /* The AuthLock.show method is passed down as
         * a prop allows the user to log in.
         */
        this.props.lock.show((error, profile, token) => {
            if (error) {
                alert(error);
                return;
            }
            AuthActions.logUserIn(profile, token);
            this.setState(() => ({authenticated: true}));
        });
    }

    logout() {
        AuthActions.logUserOut();
        this.setState({authenticated: false});
        // send user to default landing
        Router.browserHistory.push({ pathname: '/' });
    }

    signup() {
    }

    createTally() {
        const DEFAULT_PREFIX = 'Cybernaut Tally:';
        var tallyName = DEFAULT_PREFIX;
        var dateString = this.createDate();
        tallyName += ' '+dateString;
        TallyActions.createTally({title: tallyName,
                                  tallyName: tallyName});
    }

    createDate() {
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

    render() {
        return (
                <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/'}>TallyApp</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                    {!this.state.authenticated ?
                        (
                            <div>
                            <NavItem onClick={this.login}>
                                Login
                            </NavItem>
                            <NavItem onClick={this.signup}>
                                Sign Up 
                            </NavItem>
                            <div className={'jumbotron text-center'}>
                                <h3><p>Sign In To Tally App</p></h3>
                            </div>
                            </div>
                        )
                        :
                        (
                            <div>
                            <NavItem onClick={this.logout}>
                                Logout
                            </NavItem>
                            <h5>
                                <Label onClick={this.createTally}>
                                    Create New Tally
                                </Label>
                            </h5>
                            <Link to={'/list-all'}>
                                <h5>
                                    <Label>
                                        List Recent Tallies
                                    </Label>
                                </h5>
                            </Link>
                            <Link to={'/signup-form'}>
                                <h5>
                                    <Label>
                                        Sign Up
                                    </Label>
                                </h5>
                            </Link>
                            </div>
                        )
                    }
                    </Nav>
                </Navbar>
                </div>
               );
    }
}
export default HeaderComponent;
