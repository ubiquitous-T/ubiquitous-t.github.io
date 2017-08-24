// src/components/Default.js

import React from 'react';

var Default = React.createClass({

    getInitialState: function() {
        return ({
        });
    },

    render: function() {
        return (
                    <div className={'jumbotron text-center'}>
                        <h2><p>Welcome To</p></h2>
                        <h1><p>Tally App</p></h1>
                    </div>
             );
    }
});
export default Default;
