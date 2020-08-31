const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();

const PORT = process.env.PORT || 3000;

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀 server running on localhost:${PORT}`);
});
