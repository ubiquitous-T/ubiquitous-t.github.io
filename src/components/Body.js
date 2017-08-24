// src/components/Body.js

import React from 'react';
import Default from './Default';

var Body = React.createClass({
    getInitialState: function() {
        return ({
        });
    },

    render: function() {
        console.debug('authenticated: %s', this.props.authenticated);
        return (
                <div>
                    {this.props.children}
                </div>
               );
    }
});
export default Body;
