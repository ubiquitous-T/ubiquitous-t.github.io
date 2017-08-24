// src/components/IncrementYouthButton.js

import React from 'react';

var IncrementYouthButton =  React.createClass( {

    render: function() {
        return (
                <button onClick={this.props.incrementYouth} className={'form-control'} type={'button'}>
                    Increment Youth Tally
                </button>
               );
    }
});
export default IncrementYouthButton;
