/* src/components/Display.js
 *
 */

import React from 'react';

var Display = React.createClass( {

    render: function() {
        return (
                <div className={'jumbotron text-center'}>
                    <div className={'text-center'}>
                        <h1>{this.props.count}</h1>
                    </div>
                </div>
               );
    }
})
export default Display;
