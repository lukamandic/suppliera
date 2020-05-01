const { types } = require('./types/types.js');
const { brandSchema } = require('./queries/brands.js');
const { categorySchema } = require('./queries/categories.js');
const { orderSchema } = require('./queries/orders.js');
const { productSchema } = require('./queries/products.js');
const { userSchema } = require('./queries/users.js');

const { buildSchema } = require('graphql');

const mergedSchema =    types + 

                        `type Query {` +

                        brandSchema + 

                        categorySchema + 

                        orderSchema + 

                        productSchema + 

                        userSchema +
                        
                        `}`;

const schema = buildSchema(mergedSchema);

module.exports = {
    schema
}