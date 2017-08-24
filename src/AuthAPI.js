// src/utils/AuthAPI.js

import request from 'superagent/lib/client';

export default {
    authenticate: (url, body) => {
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
    }
}
