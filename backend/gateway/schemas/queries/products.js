const productSchema = `
    products: [Product],

    productsPagination (limit: Int!, skip: Int!): [Product],

    getProductById (id: Int!): [Product],

    createProduct (
        productCode: String,
        productName: String,
        productDescription: String,
        productStock: Int,
        productPrice: Int,
        productBrand: Int,
        productCategory: Int
    ): [Product],

    deleteProduct (
        productId: Int!
    ): [Product],

    updateProduct (
        productId: Int!
        productImageSource: String,
        productCode: String,
        productName: String,
        productDescription: String,
        productStock: Int,
        productPrice: Int,
        productBrand: Int,
        productCategory: Int
    ): [Product],
`

module.exports = { productSchema };