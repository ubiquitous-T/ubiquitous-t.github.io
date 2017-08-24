// src/utils/TallyAPI.js

import request from 'superagent/lib/client';
//import AuthStore from '../stores/AuthStore';

export default {

    createTally: (url, body) => {
        return new Promise((resolve, reject) => {
            request
                .post(url)
                .type('form')
                .send(body)
                //.set('Authorization', 'Bearer ' +AuthStore.getJwt().trim())
                .end((error, response) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(response.text);
                    //resolve(JSON.parse(response.text));
                })
        });
    },
    retrieveTally: (url, body) => {
        return new Promise((resolve,reject) => {
            request
                .get(url)
                .send(body)
                //.set('Authorization', 'Bearer ' +AuthStore.getJwt().trim())
                .end((error, response) => {
                    if (error) reject(error);
                    resolve(response.text);
                    //resolve(JSON.parse(response.text)[0]);
                })
        });
    },
    retrieveTallies: (url, body) => {
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
    updateTally: (url, body) => {
        return new Promise((resolve, reject) => {
            request
                .put(url)
                .type('form')
                .send(body)
                //.set('Authorization', 'Bearer ' +AuthStore.getJwt().trim())
                .end((error, response) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(response.text);
                    //resolve(JSON.parse(response.text));
                })
        });
    },
    deleteTally: (url, body) => {
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
