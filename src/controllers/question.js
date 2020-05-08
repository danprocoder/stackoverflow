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
      .aggregate([
        {
          "$lookup": {
            "from": "users",
            "localField": "user",
            "foreignField": "_id",
            "as": "user"
          }
        }
      ])
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
      .aggregate([
        {
          '$lookup': {
            'from': 'users',
            'localField': 'user',
            'foreignField': '_id',
            'as': 'user'
          }
        },
        {
          '$match': {
            '_id': mongoose.Types.ObjectId(req.params.id)
          }
        }
      ])
      .then(question => {
        if (question.length === 0) {
          return res.status(404).json({
            message: 'Question not found'
          });
        }

        res.status(200).json({
          message: 'Question found',
          data: question[0]
        });
      })
      .catch(() => {
        res.status(404).json({
          message: 'Question not found'
        });
      });
  },

  upvote(req, res) {

  },

  downvote(req, res) {

  }
};
