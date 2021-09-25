import { Steps } from "./model";

export const Query = {
  getProgress: async () => {
    return Steps.find();
  },
};

export const Mutation = {
  createProgress: async (parent, args, context, info) => {
    const { steps } = args;
    Steps.insertMany(steps).catch((err) => console.log(err));
    return Steps.find();
  },

  updateProgress: async (parent, args, context, info) => {
    const { stepId, todoId, value } = args.step;
    let updatedDoc = await Steps.findOneAndUpdate(
      { _id: stepId, "toDo._id": todoId },
      {
        $set: {
          "toDo.$.completed": value,
        },
      },
      { returnOriginal: false }
    );
    // TODO should simplify this logic
    // if all todos completed or not update Step to completed or not
    const doc = await Steps.findOne({ _id: stepId });
    const isCompleted = doc.toDo.every((val) => val.completed === true);
    updatedDoc = await Steps.findOneAndUpdate(
      { _id: stepId },
      {
        $set: {
          isCompleted: isCompleted,
        },
      },
      { returnOriginal: false }
    );

    return updatedDoc;
  },
};
