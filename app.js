import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers';

const typeDefs = importSchema('./schema.graphql');
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
