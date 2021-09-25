import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import schema from "./schema";

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
  });
  app.use((req, res) => {
    res.send("Express server running...");
  });

  await mongoose.connect("mongodb://localhost:3001/startup", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Mongoose connected ...");
  app.listen(3030, () => console.log("Server is running on port 3030"));
};

startServer();
