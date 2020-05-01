const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connection } = require('./connection.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

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

app.get('/one/:id', function(req, res) {
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

    pool.query('SELECT * FROM brands LIMIT ' + limit + ' OFFSET ' + skip, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.post('/insert', function(req, res) {
    const {
        brandName
     } = req.body.args;

    const query = `INSERT into brands(
        "brandName"
    ) VALUES ($1) RETURNING *`;

    const values = [
        brandName
    ];

    pool.query(query, values, (err, data) => {
        if (!err) {
            res.send({data: data})
        } else {
            console.log(err);
        }
    });
});

app.put('/update', function(req, res) {
    const { 
        brandId, 
        brandName 
    } = req.body.args;

    console.log(req.body.args);

    const values = [
        brandName,
        brandId
    ];

    pool.query('UPDATE brands SET "brandName" = $1 WHERE "brandId" = $2', values, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.delete('/delete', function(req, res) {

    const parsedJSON = JSON.parse(req.query.args)
    const { brandId } = parsedJSON;

    pool.query('DELETE FROM brands WHERE "brandId" = $1', [brandId], (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.listen(3000);