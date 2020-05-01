const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const { connection } = require('./connection.js');

const pool = connection;

// fetch all users
app.get('/', function(req, res) {
    pool.query('SELECT * FROM users', (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/one/:id', function(req, res) {
    const { id } = req.params;
    pool.query('SELECT * FROM users WHERE "userId"=' + id, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/paginate', function(req, res) {
    const { limit, skip } = req.query;

    pool.query('SELECT * FROM users LIMIT ' + limit + ' OFFSET ' + skip, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.post('/insert', function(req, res) {
    const {
        userName,
        userPassword,
        userEmail,
        userFirstName,
        userLastName,
        userAddress,
        userPhone,
        userGender,
        userBirthDate } = req.body.args;

    const query = `INSERT into users(
        "userName",
        "userPassword",
        "userEmail",
        "userFirstName",
        "userLastName",
        "userAddress",
        "userPhone",
        "userGender",
        "userBirthDate"
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

    const values = [
        userName,
        userPassword,
        userEmail,
        userFirstName,
        userLastName,
        userAddress,
        userPhone,
        userGender,
        userBirthDate
    ];

    pool.query(query, values, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.put('/update', function(req, res) {
    const { 
        userId,
        userName,
        userPassword,
        userEmail,
        userFirstName,
        userLastName,
        userAddress,
        userPhone,
        userGender,
        userBirthDate 
    } = req.body.args;

    const query = `
        UPDATE users SET
        "userName" = $1,
        "userPassword" = $2,
        "userEmail" = $3,
        "userFirstName" = $4,
        "userLastName" = $5,
        "userAddress" = $6,
        "userPhone" = $7,
        "userGender" = $8,
        "userBirthDate" = $9
        WHERE "userId" = $10
    `;

    const values = [
        userName,
        userPassword,
        userEmail,
        userFirstName,
        userLastName,
        userAddress,
        userPhone,
        userGender,
        userBirthDate,
        userId
    ];

    pool.query(query, values, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.delete('/delete', function(req, res) {

    const parsedJSON = JSON.parse(req.query.args)
    const { userId } = parsedJSON;

    pool.query('DELETE FROM users WHERE "userId" = $1', [userId], (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.listen(3000);