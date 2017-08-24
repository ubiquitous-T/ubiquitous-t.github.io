// src/stores/AuthStore.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';
import  { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// Use local storage for database emulation
function setUser(user, token) {
    if (!localStorage.getItem('id_token')) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('id_token', token);
    }
}

function removeUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('id_token');
}

class AuthStoreClass extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    isAuthenticated() {
        if (localStorage.getItem('id_token')) {
            return true;
        }
        return false;
    }

    getUser() {
        return localStorage.getItem('user');
    }
    
    getTally() {
        return localStorage.getItem('tally');
    }

    getJwt() {
        return localStorage.getItem('id_token');
    }
}

const AuthStore = new AuthStoreClass();

AuthStore.dispatchToken = AppDispatcher.register(action => {
    switch(action.actionType) {
        case AuthConstants.LOGIN_USER:
            setUser(action.profile, action.token);
            AuthStore.emitChange();
            break;
        
        case AuthConstants.LOGOUT_USER:
            removeUser();
            AuthStore.emitChange();
            break;
       
       default:
    }
});
export default AuthStore;
