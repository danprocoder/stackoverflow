import mongoose, { Schema } from 'mongoose';

const QuestionSchema = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
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
