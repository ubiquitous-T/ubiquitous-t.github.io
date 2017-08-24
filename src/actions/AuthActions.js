// src/actions/AuthActions.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

export default {

    logUserIn: (profile, token) => {
        //AuthAPI
            //.authenticate(tallyUrlGlobal, token)
            //.then(token => {
                AppDispatcher.dispatch({
                    actionType: AuthConstants.LOGIN_USER,
                    profile: profile,
                    token: token
                });
            //})
            /*.catch(message => {
                AppDispatcher.dispatch({
                    actionType: AuthConstants.LOGIN_USER,
                    message: message
                });
            });*/
    },

    logUserOut: () => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGOUT_USER
        });
    }
}
