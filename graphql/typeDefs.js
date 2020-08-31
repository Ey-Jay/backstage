const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tour {
    id: ID
    band: String!
    shows: [Show]
    name: String
  }

  type Show {
    id: ID
    date: String!
    city: String!
    venue: String!
    support: [String]!
  }

  type Query {
    tours: [Tour]
    tour(id: ID!): Tour
  }
`;

module.exports = typeDefs;
