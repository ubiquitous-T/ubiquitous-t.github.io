// src/utils/UserAPI.js

import request from 'superagent/lib/client';
//import AuthStore from '../stores/AuthStore';

export default {

    createUser: (url, body) => {
        return new Promise((resolve, reject) => {
            request
                .post(url)
                .type('form')
                .send(body)
                .end((error, response) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(response.text);
                })
        });
    },

    retrieveUser: (url, body) => {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .send(body)
                .end((error, response) => {
                    if (error) reject(error);
                    resolve(response.text);
                })
        });
    },

    updateUser: (url, body) => {
        return new Promise((resolve, reject) => {
            request
                .put(url)
                .type('form')
                .send(body)
                .end((error, response) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(response.text);
                })
        });
    },

    deleteUser: (url, body) => {
        return new Promise((resolve, reject) => {
            request
                .delete(url)
                .type('form')
                .send(body)
                .end((error, response) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(response.text);
                })
        });

    }

}

