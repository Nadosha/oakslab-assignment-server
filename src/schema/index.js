import { makeExecutableSchema } from "graphql-tools";
import { startupProgress } from "../startup-progress/schema";
import resolvers from "./resolvers";

export default makeExecutableSchema({
  typeDefs: [startupProgress],
  resolvers,
});
