// src/components/IncrementExtraAdult.js

import React from 'react';
import IncrementButton from './IncrementButton';

var IncrementExtraAdult = React.createClass({
    render: function() {
        return (
                <IncrementButton increment={this.props.increment}
                 label={this.props.label} />
               );
    }
});
export default IncrementExtraAdult;
