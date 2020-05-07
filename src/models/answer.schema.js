import mongoose, { Schema } from 'mongoose';

const AnswerSchema = new Schema(
  {
    question: {
      type: Schema.Types.ObjectId,
      ref: 'questions'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    answer: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Answer = mongoose.model('answers', AnswerSchema);

export default Answer;
