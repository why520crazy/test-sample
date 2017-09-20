const UserService = require('./user');
const data = require('../data');

module.exports = {
    user: new UserService(data.user)
};