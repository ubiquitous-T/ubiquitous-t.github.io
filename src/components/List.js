// src/components/List.js

import React from 'react';
import { Link } from 'react-router-dom';
import TallyActions from '../actions/TallyActions';
import TallyStore from '../stores/TallyStore';

var Auth0Lock: any;

var List = React.createClass({
    getInitialState: function() {
        return ({
            listItems: [],
            checkedItems: [],
            actionBarVisible: false
        });
    },
    
    componentWillMount: function() {
        //console.debug('routes: %s', this.props.routes[0].path);
        this.lock = new Auth0Lock(
              'I5ykxpV50zoiIsK1yEoeMMCBiA6wOvIg',
              'scott-todd-portfolio.auth0.com');

        // listen for changes in data store
        TallyStore.addListChangeListener(this.onListChange);
        TallyStore.addDeleteListener(this.onDelete);
        // perform an action to retrieve a list
        TallyActions.retrieveTallies({ });
    },

    componentDidMount: function() {
    },

    componentWillUnmount: function() {
        // drop listener to data store
        TallyStore.removeListChangeListener(this.onListChange);
        TallyStore.removeDeleteListener(this.onDelete);
    },

    render: function() {
        // map each list item
        return (
                <div>
                {/*<Header lock={this.lock}></Header>*/}
                {
                    this.state.actionBarVisible
                        ?
                        (<div id={'action-bar'}>
                            <a onClick={this.deleteItem}>
                               <span className={'glyphicon glyphicon-trash'}></span>
                            </a>
                        </div>)
                        : null
                }
                {this.state.listItems.map(
                        (item) => (
                            <div>
                                <p>
                                    <span>
                                        <input type={'checkbox'} name={'todo-action'} id={item._id} onChange={this.checkHandler} />
                                        <Link to={'/show/'+item._id}>
                                            {item.title}
                                        </Link>
                                    </span>
                                </p>
                            </div>))}
                </div>
               );

    },

    // delete tally items
    deleteItem: function() {
        // delete item from database
        TallyActions.deleteTally({ id: this.state.checkedItems[0] });
    },

    // clear checkboxes
    clearChecked: function() {
        var el = document.getElementsByName('todo-action');
        for (var i = 0; i < el.length; i++) {
            el[i].checked = false;
        }
    },

    // respond to change in data store
    onDelete: function() {
        // retrieve a new list from database
        TallyActions.retrieveTallies({});
    },

    // handle list change in data store
    onListChange: function() {
        // get list object from data store
        var items = TallyStore.getTallyItems();
        // update state
        this.setState(() => ({ listItems: items }));
        // update the state of checked items
        var cache = this.state.checkedItems;
        cache.splice(0);
        this.setState(() => ({
            checkedItems: cache,
            actionBarVisible: false }));
        this.clearChecked();
    },

    // handle checkbox state
    checkHandler: function(event) {
        // get element's id
        var elementId = event.target.id;
        // copy current state of checkd items
        var temp = this.state.checkedItems;
        // add id value to array
        if (event.target.checked) {
            temp.push(elementId);
            this.setState(() => ({
                checkedItems: temp,
                actionBarVisible: (temp.length > 0)}));
        }
        // remove id value from array
        else if (!event.target.checked) {
            temp.splice(temp.indexOf(elementId, 1));
            this.setState(() => ({
                checkedItems: temp,
                actionBarVisible: (temp.length > 0) }));
        }
        else {
            // some exception occured
            console.debug('EXCEPTION');
        }
    }
});
export default List;
