// src/Root.js

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TallyInput from './components/TallyInput';
import Base from './components/Base';
import SignupForm from './components/SignupForm';

class Root extends Component {

/*    constructor(props) {
        super(props);
    }
*/
   
    // Provide a list of routes
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Route path='/' component={Base} />
                        <Route path='/create'
                            component={TallyInput} />
                        <Route path='/show/:id'
                            component={Base} />
                        <Route path='/list-all'
                            component={Base} />
                        <Route path='/signup-form'
                            component={SignupForm} />
                        <Route path='/remove/:id'
                            component={TallyInput} />
                    </div>
                </BrowserRouter>
               );
    }
}
export default Root;
