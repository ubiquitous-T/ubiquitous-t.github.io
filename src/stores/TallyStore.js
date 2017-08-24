// src/stores/TallyStore.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import TallyConstants from '../constants/TallyConstants';
import { EventEmitter } from 'events';

var Router = require ('react-router');

const CHANGE_EVENT = 'change';
const KEY_DOWN_EVENT = 'keydown';
const LIST_CHANGE_EVENT = 'change';
const DELETE_EVENT = 'delete';

let _tally = {};
let _error = {};
let _localTally = {};
let _tallyList = [];
let _tallyItems = {};

function _setTally(tally) {
    _tally = tally;
}

function _setTallyList(parsedObj) {
    _tallyList = parsedObj;
}

function _extractData(dataList) {
    _tallyItems = dataList.map(function(item) {
        return ({
            '_id': item._id,
            'title': item.title,
            'updatedAt': item.updatedAt });
    });
}

function _setLocalTally(tally) {
    _localTally = tally;
    localStorage.clear();
    localStorage.setItem('tally', _localTally);
}

function _setLocalTallyValues(key, value) {
    localStorage.setItem(key, value);
}

function _setError(error) {
    _error = error;
}

function _printError() {
    //console.log('error: %s', _error);
}

class TallyStoreEmitter extends EventEmitter {


    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    emitKeyChange() {
        this.emit(KEY_DOWN_EVENT);
    }

    emitListChange() {
        this.emit(LIST_CHANGE_EVENT);
    }

    emitDeleteChange() {
        this.emit(DELETE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }
    
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback)
    }
    
    addKeyListener(callback) {
        this.on(KEY_DOWN_EVENT, callback)
    }
    
    removeKeyListener(callback) {
        this.removeListener(KEY_DOWN_EVENT, callback)
    }

    addListChangeListener(callback) {
        this.on(LIST_CHANGE_EVENT, callback);
    }

    removeListChangeListener(callback) {
        this.removeListener(LIST_CHANGE_EVENT, callback);
    }

    addDeleteListener(callback) {
        this.on(DELETE_EVENT, callback);
    }

    removeDeleteListener(callback) {
        this.removeListener(DELETE_EVENT, callback);
    }

    setLocalTally(tally) {
        _setLocalTally(tally);
    }

    setLocalTallyValues(key, value) {
        _setLocalTallyValues(key, value);
    }

    getTallies() {
    }

    getTally() {
        return _tally;
    }

    getTallyItems() {
        return _tallyItems;
    }
    
    getLocalTally() {
        return ({tally: localStorage.getItem('tally')});
    }
    
    getLocalTallyValue(key) {
        return localStorage.getItem(key);
    }

}

const TallyStore = new TallyStoreEmitter();

// Register a callback for the dispatcher
// and look for various action types
TallyStore.dispatchToken = AppDispatcher.register((action) => {
    
    switch(action.actionType) {
        case TallyConstants.TALLY_CREATED:
            _setTally(action.data);
            TallyStore.setLocalTally(action.data);
            const createdTally = JSON.parse(TallyStore.getTally());
            Router.browserHistory.push({pathname: '/show/' +createdTally._id});
            TallyStore.emitChange();
            break;

        case TallyConstants.TALLY_RETRIEVED:
            TallyStore.setLocalTally(action.data);
            _setTally(action.data);
            TallyStore.emitChange();
            break;
         
        case TallyConstants.TALLIES_RETRIEVED:
            _setTallyList(JSON.parse(action.data));
            _extractData(_tallyList);
            TallyStore.emitListChange();
            break;

        case TallyConstants.TALLY_UPDATED:
            TallyStore.setLocalTally(action.data);
            _setTally(action.data);
            TallyStore.emitChange();
            break;

        case TallyConstants.TALLY_DELETED:
            TallyStore.emitDeleteChange();
            break;

        case TallyConstants.TALLY_CREATED_ERROR:
            _setError(action.message);
            //console.log('TALLY_CREATED_ERROR: %s', JSON.stringify(action.message));
            _printError();
            break;

        case TallyConstants.TALLY_RETRIEVED_ERROR:
            _setError(action.message);
            //console.log('TALLY_RETRIEVED_ERROR: %s', JSON.stringify(action.message));
            _printError();
            break;

        case TallyConstants.TALLY_UPDATED_ERROR:
            _setError(action.message);
            _printError();
            break;

        case TallyConstants.TALLY_DELETED_ERROR:
            break;

        default:
            return true;
    }
    //TallyStore.emitChange();
});
export default TallyStore;
