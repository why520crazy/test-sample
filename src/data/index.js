const mongoose = require('mongoose');
const UserSchema = require('../schema/user');
const db = require('../db');
const UserRepository = require('./user')

const UserModel = db.connection.model('users', UserSchema);

module.exports = {
    user: new UserRepository(UserModel)
}
