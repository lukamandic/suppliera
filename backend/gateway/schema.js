const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Brand {
        brandId: Int,
        brandName: String
    }
    type User {
        userId: Int,
        userName: String,
        userPassword: String,
        userEmail: String,
        userFirstName: String,
        userLastName: String,
        userAddress: String,
        userPhone: String,
        userGender: Boolean,
        userBirthDate: String
    }
    type Product {
        productId: Int,
        productImageSource: String,
        productCode: String,
        productName: String,
        productDescription: String,
        productStock: Int,
        productPrice: Int,
        productBrand: Int,
        productCategory: Int
    }
    type Order {
        orderId: Int,
        userId: Int,
        productId: Int
    }
    type Category {
        categoryId: Int,
        categoryName: String,
    }
    type Query {
        users: [User],
        usersPagination (limit: Int!, skip: Int!): [User],
        getUserById (id: Int!): [User],
        brands: [Brand],
        brandsPagination (limit: Int!, skip: Int!): [Brand],
        getBrandById (id: Int!): [Brand],
        products: [Product],
        productsPagination (limit: Int!, skip: Int!): [Product],
        getProductById (id: Int!): [Product],
        categories: [Category],
        categoriesPagination (limit: Int!, skip: Int!): [Category],
        getCategoryById (id: Int!): [Category],
        orders: [Order],
        ordersPagination (limit: Int!, skip: Int!): [Order],
        getOrderById (id: Int!): [Order],
    }
`);

module.exports = {
    schema
}