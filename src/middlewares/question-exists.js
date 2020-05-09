import { Question } from '../models';

export default async (req, res, next) => {
  let question;
  try {
    question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
  } catch (e) {
    return res.status(404).json({ message: 'Question not found' });
  }

  req.currentQuestion = question;
  next();
}
