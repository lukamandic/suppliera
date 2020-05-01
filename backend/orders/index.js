const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const { connection } = require('./connection.js');

const pool = connection;

// fetch all orders
app.get('/', function(req, res) {
    pool.query('SELECT * FROM orders', (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/one/:id', function(req, res) {
    const { id } = req.params;
    pool.query('SELECT * FROM orders WHERE "orderId"=' + id, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/paginate', function(req, res) {
    const { limit, skip } = req.query;

    pool.query('SELECT * FROM orders LIMIT ' + limit + ' OFFSET ' + skip, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.post('/insert', function(req, res) {
    const {
        userId,
        productId
     } = req.body.args;

    const query = `INSERT into orders(
        "userId",
        "productId"
    ) VALUES ($1, $2) RETURNING *`;

    const values = [
        userId,
        productId
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
    const { orderId } = parsedJSON;

    pool.query('DELETE FROM orders WHERE "orderId" = $1', [orderId], (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.listen(3000);