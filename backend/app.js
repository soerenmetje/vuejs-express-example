const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); /* used for hashing psw */
const jwt = require('jsonwebtoken');

const DB = require('./db');

// ==========================================================================

const db = new DB("sqlitefile"); // TODO: replace DB in production. Only for testing purpose
const secret = 'supersecret';

const app = express();

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());

// ==========================================================================

router.post('/login', (req, res) => {
    console.log('Request /login');
    if(!req.body.name || !req.body.password) {
        res.status(401).send('missing name or password');
        return;
    }
    db.selectByName(req.body.name, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(401).send('No user found.');
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.user_pass);
        if (!passwordIsValid)
            return res.status(401).json({auth: false, token: null});
        let token = jwt.sign({id: user.id}, secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        console.log('valid credentials');
        res.status(200).json({auth: true, token: token, user: req.body.name});
    });
});

app.use(router);

let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
    console.log('Express backend server listening on port ' + port)
});
