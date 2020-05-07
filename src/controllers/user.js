import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models';

export default {
  addNewUser(req, res) {
    const { displayName, email, password } = req.body;

    User.create({ displayName, email, password })
      .then(user => {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
        
        res.status(201).json({
          message: 'User created successfully',
          data: { token, user }
        })
      });
  },

  async authenticateUser(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: 'Incorrect email/password combination'
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Incorrect email/password combination'
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);

    res.status(200).json({
      message: 'Authentication successful',
      data: { token, user }
    })
  }
}
