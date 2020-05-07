import mongoose, { Schema } from 'mongoose';

const QuestionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    upvotes: {
      type: Number,
      default: 0
    },
    downvotes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Question = mongoose.model('questions', QuestionSchema);

export default Question;
