const express = require('express');
const app = express();
const { connection } = require('./connection.js');

const pool = connection;

// fetch all brands
app.get('/', function(req, res) {
    pool.query('SELECT * FROM brands', (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/:id', function(req, res) {
    const { id } = req.params;
    pool.query('SELECT * FROM brands WHERE "brandId"=' + id, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/paginate', function(req, res) {
    const { limit, skip } = req.query;
    console.log(limit);

    pool.query('SELECT * FROM brands LIMIT ' + limit + ' OFFSET ' + skip, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.listen(3000);