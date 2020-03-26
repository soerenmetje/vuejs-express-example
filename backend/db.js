const sqlite3 = require('sqlite3').verbose();

class Db {
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.createTable()
    }

    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id integer PRIMARY KEY, 
                name text UNIQUE, 
                user_pass text)`
        this.db.run(sql);
    }

    selectByName(name, callback) {
        return this.db.get(
            `SELECT * FROM user WHERE name = ?`,
            [name],function(err,row){
                callback(err,row)
            })
    }
    selectAll(callback) {
        return this.db.all(`SELECT * FROM user`, (err,rows) => {
            callback(err,rows);
        })
    }


    insert(user, callback) {
        return this.db.run(
            'INSERT INTO user (name,user_pass) VALUES (?,?)',
            user, (err) => {
                callback(err)
            })
    }
}

module.exports = Db;
