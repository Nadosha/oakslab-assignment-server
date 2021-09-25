import { gql } from "apollo-server-express";

export const startupProgress = gql`
  scalar Void
  type Todo {
    id: ID
    title: String
    completed: Boolean
  }

  type Step {
    id: ID
    title: String
    isCompleted: Boolean
    toDo: [Todo]
  }

  type Query {
    getProgress: [Step]
  }

  input TodoInput {
    id: ID
    title: String
    completed: Boolean
  }

  type createProgressPayload {
    steps: [Step]
  }

  input StepsInput {
    id: ID
    title: String
    isCompleted: Boolean
    toDo: [TodoInput]
  }

  input UpdateStepsInput {
    stepId: ID
    todoId: String
    value: Boolean
  }

  type Mutation {
    createProgress(steps: [StepsInput!]!): [Step]
    updateProgress(step: UpdateStepsInput): Step
  }
`;
