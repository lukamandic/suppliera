const express = require('express');
const app = express();

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

app.listen(3000);