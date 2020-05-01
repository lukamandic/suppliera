const userSchema = `
    users: [User],

    usersPagination (limit: Int!, skip: Int!): [User],

    getUserById (id: Int!): [User],
    
    deleteUser (
        userId: Int!
    ): [User],

    updateUser (
        userId: Int!,
        userName: String,
        userPassword: String,
        userEmail: String,
        userFirstName: String,
        userLastName: String,
        userAddress: String,
        userPhone: String,
        userGender: Boolean,
        userBirthDate: String
    ): [User],
    
    createUser (
        userName: String,
        userPassword: String,
        userEmail: String,
        userFirstName: String,
        userLastName: String,
        userAddress: String,
        userPhone: String,
        userGender: Boolean,
        userBirthDate: String
    ): [User],
`

module.exports = { userSchema };