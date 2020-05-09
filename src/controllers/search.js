import { User, Question, Answer } from '../models';

export default {
  async searchQuestions(req, res) {
    const { query } = req.query;

    const result = await Question
      .find({
        title: {
          $regex: query,
          $options: 'i'
        }
      })
      .populate('user');
    
    res.send({
      message: `${result.length} questions found for query`,
      data: result
    });
  },

  async searchUsers(req, res) {
    const { query } = req.query;

    const result = await User
      .find({
        displayName: {
          $regex: query,
          $options: 'i'
        }
      });

    res.send({
      message: `${result.length} users found for query`,
      data: result
    });
  },

  async searchAnswer(req, res) {
    const { query } = req.query;

    const result = await Answer
      .find({
        answer: {
          $regex: query,
          $options: 'i'
        }
      })
      .populate('question')
      .populate('user');
    
    res.json({
      message: `${result.length} answers found`,
      data: result
    });
  }
};
