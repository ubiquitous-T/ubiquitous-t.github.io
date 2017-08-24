// src/components/AltBody.js

import React from 'react';

var AltBody = React.createClass({
    getInitialState: function() {
        return ({
        });
    },

    render: function() {
        return (
                <div>
                    {this.props.children}
                </div>
               );
    }
});
export default AltBody;
