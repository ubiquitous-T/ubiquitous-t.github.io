// src/components/IncrementYouthExtraButton.js

import React from 'react';

var IncrementYouthExtraButton =  React.createClass( {

    render: function() {
        return (
                <button onClick={this.props.incrementYouthExtra} className={'form-control'} type={'button'}>
                    Youth 5+ Min
                </button>
               );
    }
});
export default IncrementYouthExtraButton;
