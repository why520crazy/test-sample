const User = require('./user');
module.exports = {
    initialize: (app) => {
        User.initialize(app);
    }
};