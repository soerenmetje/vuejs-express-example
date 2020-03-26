const DB = require('./db');
const bcrypt = require('bcrypt'); /* used for hashing psw */


const db = new DB("sqlitefile"); // TODO: replace DB in production. Only for testing purpose
// Callback for inserting
const insertCB = (err) => {
    if (err) console.error('insert user failed' + err);
    else console.log('insert user succeeded')
};

// insert some example accounts into DB
db.insert([
    'anton',
    bcrypt.hashSync('1234', 8)
], insertCB);
db.insert([
    'viktor',
    bcrypt.hashSync('4321', 8)
], insertCB);

