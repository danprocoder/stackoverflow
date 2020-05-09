import { User, Question } from '../models';

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
    
    res.status(200).json({
      message: `${result.length} results found`,
      data: result
    });
  },

  searchUsers(req, res) {
    const { query } = req.query;

    User.find({
      displayName: {
        $regex: query
      }
    })
  },

  searchAnswer(req, res) {
    const { query } = req.query;
  }
};
