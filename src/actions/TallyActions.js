// src/actions/TallyActions.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import TallyConstants from '../constants/TallyConstants';
import TallyAPI from '../utils/TallyAPI';

//const tallyUrlLoopBack = 'http://localhost:3000/api/tallies/';
//const tallyUrlLocal = 'http://192.168.2.11:3000/api/tallies/';
const tallyUrlGlobal = 'https://tallyapi.localtunnel.me/api/tallies/';
//const ngrokUrl = 'http://1a9b95a0.ngrok.io/api/tallies/';

export default {
    createTally: (body) => {
        TallyAPI
            .createTally(tallyUrlGlobal, body)
            .then(data => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_CREATED,
                    data: data
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_CREATED_ERROR,
                    message: message
                });
            });
    },
    retrieveTally: (body) => {
        TallyAPI
            .retrieveTally(tallyUrlGlobal + body.id, body)
            .then(data => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_RETRIEVED,
                    data: data
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_RETRIEVED_ERROR,
                    message: message
                });
            });
    },
    retrieveTallies: (body) => {
        TallyAPI
            .retrieveTallies(tallyUrlGlobal, body)
            .then(data => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLIES_RETRIEVED,
                    data: data
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLIES_RETRIEVED_ERROR,
                    message: message
                });
            });
    },
    updateTally: (data) => {
        TallyAPI
            .updateTally(tallyUrlGlobal + data.id + '/' + data.key + '/' + data.value, data)
            .then(data => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_UPDATED,
                    data: data
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_UPDATED_ERROR,
                    message: message
                });
            });
    },
    deleteTally: (body) => {
        TallyAPI
            .deleteTally(tallyUrlGlobal + body.id, body)
            .then(deletedTally => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_DELETED,
                    deletedTally: deletedTally
                });
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: TallyConstants.TALLY_DELETED_ERROR,
                    message: message
                });
            });
    }
}
