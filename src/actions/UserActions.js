// src/actions/UserActions.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import UserConstants from '../constants/UserConstants';
import UserAPI from '../utils/UserAPI';

const tallyUrlLoopBack = 'http://localhost:3000/api/tallies/';
//const tallyUrlLocal = 'http://192.168.2.11:3000/api/tallies/';
//const userUrlGlobal = 'https://userapi.localtunnel.me/api/users/';

export default {
    createUser: (body) => {
        UserAPI
            .createUser(tallyUrlLoopBack, body)
            .then(data => {
                AppDispatcher.dispatch({
                    actionType: UserConstants.USER_CREATED,
                    data: data
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: UserConstants.USER_CREATED_ERROR,
                    message: message
                });
            });
    },

    retrieveUser: (body) => {
        UserAPI
            .retrieveUser(tallyUrlLoopBack + body.id, body)
            .then(data => {
                AppDispatcher.dispatch({
                    actionType: UserConstants.USER_RETRIEVED,
                    data: data
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: UserConstants.USER_RETRIEVED_ERROR,
                    message: message
                });
            });
  },

    updateUser: (data) => {
      UserAPI
         .updateUser(tallyUrlLoopBack + data.id + '/' + data.key +
                '/' + data.value, data)
         .then(data => {
             AppDispatcher.dispatch({
                 actionType: UserConstants.USER_UPDATED_ERROR,
                 data: data
             });
         })
         .catch(message => {
             AppDispatcher.dispatch({
                 actionType: UserConstants.USER_UPDATED_ERROR,
                 message: message
             });
         });
    },

    deleteUser: (body) => {
       UserAPI
          .deleteUser(tallyUrlLoopBack + body.id, body)
          .then(data => {
              AppDispatcher.dispatch({
                  actionType: UserConstants.USER_DELETED,
                  data: data
              });
          })
          .catch(message => {
              AppDispatcher.dispatch({
                  actionType: UserConstants.USER_DELETED_ERROR,
                  message: message
              });
          });
    }

}
