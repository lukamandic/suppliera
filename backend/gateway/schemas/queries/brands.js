const brandSchema = `
    brands: [Brand],

    brandsPagination (limit: Int!, skip: Int!): [Brand],

    getBrandById (id: Int!): [Brand],
    
    deleteBrand (
        brandId: Int!,
    ): [Brand],

    updateBrand (
        brandId: Int!,
        brandName: String
    ): [Brand],

    createBrand (
        brandName: String,
    ): [Brand],
`

module.exports = { brandSchema };