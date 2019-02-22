const { User } = require('../app/models')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await User.findById(id).first();
        },

        async getUsers() {
            return await User.findAll();
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const result = await User.create({
                name: input.name,
                email: input.email,
                password: input.password,
                createdAt: new Date(),
                updatedAt: new Date()
            })

            return await result;
        }
    }
}