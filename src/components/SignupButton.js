// src/components/SignupButton.js

import React from 'react';

var SignupButton =  React.createClass( {

    render: function() {
        return (
                <button onClick={this.props.signup} className={'form-control'} type={'button'}>
                    Sign Up
                </button>
               );
    }
});
export default SignupButton;

