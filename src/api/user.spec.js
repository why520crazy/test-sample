const api = require('./index');
const assert = require('assert');
const util = require('../util');
const supertest = require('supertest');
const app = require('../app');
const agent = supertest.agent(app);
const _ = require('lodash');

describe('user-api', () => {

    it('add-user', async () => {
        const inputUser = {
            username: 'xudashen',
            email: 'xudaoshen@123.com',
            first_name: 'xu',
            last_name: 'shen'
        };
        const response = await agent.post('/api/account/user')
            .send(inputUser);
        assert.notEqual(response.body, null);
        const user = response.body.data;
        assert.notEqual(user, null);
        assert.equal(user.username, inputUser.username);
        assert.equal(user.email, inputUser.email);
        assert.equal(user.first_name, inputUser.first_name);
        assert.equal(user.last_name, inputUser.last_name);
    });

    it('get-users', async () => {
        const inputUser = {
            username: 'xudashen',
            email: 'xudaoshen@123.com',
            first_name: 'xu',
            last_name: 'shen'
        };
        const response = await agent.get('/api/account/users');
        assert.notEqual(response.body, null);
        const users = response.body.data;
        assert.notEqual(users, null);
        assert.equal(users.length >= 1, true);

        const user = _.find(users, {username: inputUser.username});
        assert.notEqual(user, null);
        assert.equal(user.username, inputUser.username);
        assert.equal(user.email, inputUser.email);
        assert.equal(user.first_name, inputUser.first_name);
        assert.equal(user.last_name, inputUser.last_name);
    });
});