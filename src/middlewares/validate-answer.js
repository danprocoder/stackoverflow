import { check } from 'express-validator';

export default [
  check('answer')
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Answer is required'),
]
