const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connection } = require('./connection.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const pool = connection;

// fetch all categories
app.get('/', function(req, res) {
    pool.query('SELECT * FROM categories', (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/one/:id', function(req, res) {
    const { id } = req.params;
    pool.query('SELECT * FROM categories WHERE "categoryId"=' + id, (err, data) => {
        if (!err) {
            console.log(data.rows);
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/paginate', function(req, res) {
    const { limit, skip } = req.query;

    pool.query('SELECT * FROM categories LIMIT ' + limit + ' OFFSET ' + skip, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.post('/insert', function(req, res) {
    const {
        categoryName
     } = req.body.args;

    const query = `INSERT into categories(
        "categoryName"
    ) VALUES ($1) RETURNING *`;

    const values = [
        categoryName
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
        categoryId, 
        categoryName 
    } = req.body.args;

    const values = [
        categoryName,
        categoryId
    ];

    pool.query('UPDATE categories SET "categoryName" = $1 WHERE "categoryId" = $2', values, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.delete('/delete', function(req, res) {

    const parsedJSON = JSON.parse(req.query.args)
    const { cateogryId } = parsedJSON;

    pool.query('DELETE FROM categories WHERE "categoryId" = $1', [categoryId], (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.listen(3000);