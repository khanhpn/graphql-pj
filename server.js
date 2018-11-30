const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));


app.listen(4004, () => {
  console.log('listenning');
});
