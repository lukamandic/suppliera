const types = `
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
`

module.exports = { types }