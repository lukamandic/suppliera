const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        users: [User],
        brands: [Brand],
        products: [Product],
        categories: [Category],
        orders: [Order]
    }
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
        productName: Int,
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
`);

module.exports = {
    schema
}