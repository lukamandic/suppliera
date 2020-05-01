const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./schemas/schemas.js');
const { calls } = require('./apiCalls.js');

const app = express();

const middl = (req, res, next) => {
    req.headers['Authorization'] = 'Basic token'
    
    next();
}

app.use('/suppliera', middl, (req, res) =>  graphqlHTTP({
    schema: schema,
    rootValue: calls,
    graphiql: true,
    context: req.headers
    })(req, res));

app.listen(3000);
