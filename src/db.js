const mongoose = require('mongoose');
const MONGODB_SERVER = 'mongodb://127.0.0.1:27017/localTest';
mongoose.Promise = global.Promise;

const connection = mongoose.createConnection(MONGODB_SERVER, (error) => {
    if (error) {
        console.log(`connect mongodb error`);
        console.error(error);
    } else {
        console.log(`connect mongodb successfully...`);
    }
});

module.exports = {
    connection: connection
};
// db 7