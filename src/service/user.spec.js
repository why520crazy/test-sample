const mockery = require('mockery');
const assert = require('assert');
const util = require('../util');

class UserRepositoryMock {
    constructor(model) {
        this.model = model;
    }

    async addUser(username, email, first_name, last_name) {
        return {
            _id: util.generateObjectId(),
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name
        }
    }

    getUserByUsername(username) {
        if (username === 'lily') {
            return true;
        } else {
            return false;
        }
    }

    getUserById(id) {
        return {

        }
    }

    getUsers(page, size) {
        return [{
                username: 'haifeng',
                email: 'haifeng@123.com',
                first_name: 'haifeng',
                last_name: 'xu'
            }
        ]
    }
}

describe('user-service', () => {
    before(function () {

        mockery.registerMock('../data', {
            user: new UserRepositoryMock()
        });
        // mockery.registerAllowable('./index', true);
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false,
            // useCleanCache: true
        });


    });

    after(function () {
        mockery.disable();
        mockery.resetCache();
        mockery.deregisterAll();
    });

    it('add user', async () => {
        const service = require('./index');
        const inputUser = {
            username: 'xxxxx',
            email: 'xxx@123.com',
            first_name: 'first',
            last_name: 'last'
        }
        const user = await service.user.addUser(inputUser.username, inputUser.email, inputUser.first_name, inputUser.last_name);

        assert.notEqual(user, null);
        assert.equal(user.username, inputUser.username);
        assert.equal(user.email, inputUser.email);
        assert.equal(user.first_name, inputUser.first_name);
        assert.equal(user.last_name, inputUser.last_name);

    });


    it('add user with exist username', async () => {
        const service = require('./index');
        const inputUser = {
            username: 'lily',
            email: 'xxx@123.com',
            first_name: 'first',
            last_name: 'last'
        }
        try {
            const user = await service.user.addUser(inputUser.username, inputUser.email, inputUser.first_name, inputUser.last_name);
        } catch (error) {
            assert.notEqual(error, null);
            assert.equal('username has already been registered', error.message)
        }
    });

    it('get users', async () => {
        const service = require('./index');
        const users = await service.user.getUsers();
        assert.equal(users.length, 1);
    });

});