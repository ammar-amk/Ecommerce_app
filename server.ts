import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema.graphql';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
