// src/components/SplitDropDown.js

import React from 'react';
import { SplitButton } from 'react-bootstrap';

var  SplitDropDown = React.createClass({
    getInitialState: function() {
        return ({
            items: []
        });
    },

    render: function() {
        return (
                <SplitButton
                bsStyle={'default'}
                title={'Jan'}>
                </SplitButton>
               );
    }
});
export default SplitDropDown;
