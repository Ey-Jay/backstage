require('dotenv').config();
const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');

const tours = require('./api/tours');
const shows = require('./api/shows');
const errorHandler = require('./middleware/error');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { Tour, Show } = require('./graphql/sources');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/tours', tours);
app.use('/shows', shows);
app.use(errorHandler);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    tour: new Tour(),
    show: new Show(),
  }),
});

server.applyMiddleware({ app });

app.get('*', (_, res) => {
  res.send('BACKSTAGE API - SHOW ME YOUR PASS');
});

app.listen(PORT, () => {
  console.log(`🚀 server running on port ${PORT}`);
});
