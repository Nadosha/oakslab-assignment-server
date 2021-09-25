import {
  Query as startupProgressQuery,
  Mutation as startupProgressMutation,
} from "../startup-progress/resolvers";

export default {
  Query: Object.assign({}, startupProgressQuery),
  Mutation: Object.assign({}, startupProgressMutation),
};
