// src/components/IncrementButton.js

import React from 'react';

var IncrementButton =  React.createClass( {

    render: function() {
        return (
                <button onClick={this.props.increment} className={'form-control'} type={'button'}>
                    {this.props.label}
                </button>
               );
    }
});
export default IncrementButton;
