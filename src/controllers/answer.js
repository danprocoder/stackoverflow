import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import { Answer } from '../models';

export default {
  answerQuestion(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { answer } = req.body;

    Answer
      .create({
        question: mongoose.Types.ObjectId(req.currentQuestion._id),
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
    const answers = await Answer
      .find({
        question: mongoose.Types.ObjectId(req.currentQuestion._id)
      })
      .populate('user');

    res.status(200).json({
      message: `${answers.length} answers found for question.`,
      data: answers
    });
  }
};
