import { Schema, Types } from 'mongoose';

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return "my date!";
      }
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

export default reactionSchema;