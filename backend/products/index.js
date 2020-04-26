const express = require('express');
const app = express();

const { connection } = require('./connection.js');

const pool = connection;

// fetch all products
app.get('/', function(req, res) {
    pool.query('SELECT * FROM product', (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.listen(3000);