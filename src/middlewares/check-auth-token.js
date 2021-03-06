import jwt from 'jsonwebtoken';
import { User } from '../models';

export default async (req, res, next) => {
  const authToken = req.token;

  if (!authToken) {
    return res.status(401).json({ message: 'Authorization bearer token required' });
  }

  const decoded = jwt.decode(req.token, process.env.JWT_SECRET_KEY);
  if (!decoded) {
    return res.status(401).json({ message: 'Authorization bearer token required' });
  }
  const { _id } = decoded;
  const user = await User.findById(_id);
  if (!user) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }

  req.currentUser = user;
  next();
}
