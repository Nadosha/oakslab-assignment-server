import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => {
      return "hello";
    },
  },
};
async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
  });
  app.use((req, res) => {
    res.send("Express server running...");
  });

  app.listen(3030, () => console.log("Server is running on port 3030"));
}
startServer();
