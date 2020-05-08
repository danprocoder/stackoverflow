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
    },
    votes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        },
        upvote: {
          type: Boolean,
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

QuestionSchema.pre('save', function(next) {
  let upvotes = 0, downvotes = 0;

  this.votes.forEach(voter => {
    if (voter.upvote) {
      upvotes++;
    } else {
      downvotes++;
    }
  });

  this.upvotes = upvotes;
  this.downvotes = downvotes;

  next();
});

const Question = mongoose.model('questions', QuestionSchema);

export default Question;
