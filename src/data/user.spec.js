const data = require('./index');
const assert = require('assert');
const util = require('../util');

describe('user-repository', () => {

    beforeEach(async () => {
        await data.user.model.remove({});
    });

    const USER_PETER = {
        username: 'peter',
        email: 'email',
        first_name: 'peter1',
        last_name: 'xu'
    };

    const addPeter = async () => {
        return await data.user.addUser(USER_PETER.username, USER_PETER.email, USER_PETER.first_name, USER_PETER.last_name);
    };

    it('add user', async () => {
        const user = await addPeter();
        assert.equal(USER_PETER.username, user.username);
        assert.equal(USER_PETER.email, user.email);
        assert.equal(USER_PETER.first_name, user.first_name);
        assert.equal(USER_PETER.last_name, user.last_name);
        assert.notEqual(user._id, null);

        const dbUser = await data.user.model.findOne({
            _id: user._id
        });

        assert.notEqual(dbUser, null);
        assert.equal(dbUser.username, user.username);
        assert.equal(dbUser.email, user.email);
        assert.equal(dbUser.first_name, user.first_name);
        assert.equal(dbUser.last_name, user.last_name);
        assert.deepEqual(dbUser._id, user._id);
    });

    it('get user by username return null', async () => {
        const dbUser = await data.user.getUserByUsername('hello');
        assert.equal(dbUser, null);
    });

    it('get user by username return peter', async () => {
        const peterUser = await addPeter();
        const dbUser = await data.user.getUserByUsername(peterUser.username);
        assert.notEqual(dbUser, null);
        assert.equal(dbUser.username, peterUser.username);
        assert.equal(dbUser.email, peterUser.email);
        assert.equal(dbUser.first_name, peterUser.first_name);
        assert.equal(dbUser.last_name, peterUser.last_name);
        assert.deepEqual(dbUser._id, peterUser._id);
    });

    it('get user by id ', async () => {
        const dbUser = await data.user.getUserById(util.generateObjectId());
        assert.equal(dbUser, null);
    });

    it('get users ', async () => {
        const users = await data.user.getUsers(1, 20);
        assert.equal(users.length, 0);
    });

});