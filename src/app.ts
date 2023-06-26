import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { readFileSync } from 'fs';
import resolvers from './resolvers';

const app = express();

const typeDefs = gql(readFileSync('schema.graphql', 'utf-8'));

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
