const orderSchema = `
    orders: [Order],

    ordersPagination (limit: Int!, skip: Int!): [Order],

    getOrderById (id: Int!): [Order],

    deleteOrder (
        orderId: Int!
    ): [Order],
    
    createOrder (
        userId: Int!,
        productId: Int!
    ): [Order],
`

module.exports = { orderSchema };