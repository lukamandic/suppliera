const categorySchema = `
    categories: [Category],

    categoriesPagination (limit: Int!, skip: Int!): [Category],

    getCategoryById (id: Int!): [Category],

    createCategory (
        categoryName: String
    ): [Category],

    deleteCategory (
        categoryId: Int!
    ): [Category],

    updateCategory (
        categoryId: Int!,
        categoryName: String
    ): [Category],
`

module.exports = { categorySchema };