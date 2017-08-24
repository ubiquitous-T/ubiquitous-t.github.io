// src/components/IncrementExtraYouth.js

import React from 'react';
import IncrementButton from './IncrementButton';

var IncrementExtraYouth = React.createClass({
    render: function() {
        return (
                <IncrementButton increment={this.props.increment}
                 label={this.props.label} />
               );
    }
});
export default IncrementExtraYouth;
