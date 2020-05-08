import mongoose from 'mongoose';
import { Answer } from '../models';

export default {
  answerQuestion(req, res) {
    const { questionId } = req.params;
    const { answer } = req.body;

    Answer
      .create({
        question: mongoose.Types.ObjectId(questionId),
        user: mongoose.Types.ObjectId(req.currentUser._id),
        answer
      })
      .then(data => {
        res.status(201).json({
          message: 'Answer posted',
          data
        });
      });
  },

  async getQuestionAnswers(req, res) {
    const { questionId } = req.params;

    const answers =  await Answer
      .aggregate([
        {
          '$match': {
            question: mongoose.Types.ObjectId(questionId)
          }
        },
        {
          '$lookup': {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'user'
          }
        }
      ])
      .exec();

    res.status(200).json({
      message: `${answers.length} answers found for question.`,
      data: answers
    });
  }
};
