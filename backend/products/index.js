const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

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

app.get('/one/:id', function(req, res) {
    const { id } = req.params;
    pool.query('SELECT * FROM product WHERE "productId"=' + id, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.get('/paginate', function(req, res) {
    const { limit, skip } = req.query;

    pool.query('SELECT * FROM product LIMIT ' + limit + ' OFFSET ' + skip, (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.post('/insert', function(req, res) {
    const {
        productImageSource,
        productCode,
        productName,
        productDescription,
        productStock,
        productPrice,
        productBrand,
        productCategory } = req.body.args;

    const query = `INSERT into product(
        "productImageSource",
        "productCode",
        "productName",
        "productDescription",
        "productStock",
        "productPrice",
        "productBrand",
        "productCategory"
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

    const values = [
        productImageSource,
        productCode,
        productName,
        productDescription,
        productStock,
        productPrice,
        productBrand,
        productCategory];

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
        productId,
        productImageSource,
        productCode,
        productName,
        productDescription,
        productStock,
        productPrice,
        productBrand,
        productCategory
    } = req.body.args;

    console.log(req.body.args);

    const query = `UPDATE product SET 
        "productImageSource" = $1,
        "productCode" = $2,
        "productName" = $3,
        "productDescription" = $4,
        "productStock" = $5,
        "productPrice" = $6,
        "productBrand" = $7,
        "productCategory" = $8
        WHERE "productId" = $9`;

    const values = [
        productImageSource,
        productCode,
        productName,
        productDescription,
        productStock,
        productPrice,
        productBrand,
        productCategory,
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
    const { productId } = parsedJSON;

    pool.query('DELETE FROM product WHERE "productId" = $1', [productId], (err, data) => {
        if (!err) {
            res.send({data: data.rows})
        } else {
            console.log(err);
        }
    });
});

app.listen(3000);