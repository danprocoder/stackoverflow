import mongoose from 'mongoose';
import { Question } from '../models';

export default {
  create(req, res) {
    const { title, body } = req.body;

    Question.create({
      user: mongoose.Types.ObjectId(req.currentUser._id),
      title,
      body
    })
      .then(data => {
        res.send({
          message: 'Question created successfully',
          data
        });
      });
  },

  getAll(req, res) {
    Question
      .find()
      .populate('user')
      .then(data => {
        res.status(200)
          .json({
            message: `${data.length} question found`,
            data
          });
      });
  },

  getOne(req, res) {
    Question
      .findById(req.params.id)
      .populate('user')
      .then(question => {
        if (!question) {
          return res.status(404).json({
            message: 'Question not found'
          });
        }

        res.status(200).json({
          message: 'Question found',
          data: question
        });
      })
      .catch(() => {
        res.status(404).json({
          message: 'Question not found'
        });
      });
  },

  async upvote(req, res) {
    const question = await Question.findById(req.params.id);

    const voteStatus = question.votes.find(item => item.user.equals(req.currentUser._id));
    if (!voteStatus) {
      question.votes.push({
        user: mongoose.Types.ObjectId(req.currentUser._id),
        upvote: true
      });
    } else {
      voteStatus.upvote = true;
    }
    await question.save();

    res.status(200).json({
      message: 'Question upvoted',
      data: question
    });
  },

  async downvote(req, res) {
    const question = await Question.findById(req.params.id);

    const voteStatus = question.votes.find(item => item.user.equals(req.currentUser._id));
    if (!voteStatus) {
      question.votes.push({
        user: mongoose.Types.ObjectId(req.currentUser._id),
        upvote: false
      });
    } else {
      voteStatus.upvote = false;
    }
    await question.save();

    res.status(200).json({
      message: 'Question downvoted',
      data: question
    })
  }
};
