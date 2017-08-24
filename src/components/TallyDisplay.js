/* src/components/TallyDisplay.js
 *
 */

import React from 'react';

var TallyDisplay = React.createClass( {
/*
    getInitialState: function(props) {
        return ({
            count: this.props.count
        });
    },
*/
    componentWillMount: function() {
        this.setState(() => ({ count: this.props.count }));
    },
/*
    componentWillReceiveProps: function(nextProps) {
    },
*/
    shouldComponentUpdate: function(newProps, newState) {
        return true;
    },

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
export default TallyDisplay;
