// src/components/IncrementExtraButton.js

import React from 'react';

var IncrementExtraButton =  React.createClass( {

    render: function() {
        return (
                <button onClick={this.props.incrementExtra} className={'form-control'} type={'button'}>
                    {this.props.label}
                </button>
               );
    }
});
export default IncrementExtraButton;
