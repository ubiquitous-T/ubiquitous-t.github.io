// src/components/IncrementAdult.js

import React from 'react';
import IncrementButton from './IncrementButton';

var IncrementAdult = React.createClass({
    render: function() {
        return (
                <IncrementButton increment={this.props.increment}
                 label={this.props.label} />
               );
    }
});
export default IncrementAdult;
