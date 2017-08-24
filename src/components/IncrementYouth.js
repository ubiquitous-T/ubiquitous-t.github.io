// src/components/IncrementYouth.js

import React from 'react';
import IncrementButton from './IncrementButton';

var IncrementYouth = React.createClass({
    render: function() {
        return (
                <IncrementButton increment={this.props.increment}
                 label={this.props.label} />
               );
    }
});
export default IncrementYouth;
