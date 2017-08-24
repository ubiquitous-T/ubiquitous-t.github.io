/*
 * src/components/TallyDisplaySpecial.js
 */

import React from 'react';

var TallyDisplaySpecial = React.createClass( {
/*
    getInitialState: function(props) {
        return ({
            extraCount: this.props.extraCount
        });
    },
*/
    componentWillMount: function() {
        this.setState(() => ({ extraCount: this.props.extraCount }));
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
                <div className={'text-center'}>
                    <h1>{this.props.extraCount}</h1>
                </div>
               );
    }
})
export default TallyDisplaySpecial;

