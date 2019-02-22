const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./app/models')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', bodyParser.json(), graphqlHTTP({
    schema,
    graphiql: true
}))

// User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456', createdAt: new Date(), updatedAt: new Date() });

app.get('/Users', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
});

app.listen(3000);