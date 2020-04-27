const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./schema.js');
const { calls } = require('./apiCalls.js');

const app = express();

var root = {
    products: calls.products(),
    brands: calls.brands(),
    users: calls.users(),
    orders: calls.orders(),
    categories: calls.categories()
}

app.use('/suppliera', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000);
