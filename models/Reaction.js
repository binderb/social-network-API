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
        if (date) return date.toLocaleString('en-us', { year:"numeric", month:"short", day:"numeric", hour12:"true", hour:"numeric", minute:"numeric"});
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