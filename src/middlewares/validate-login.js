import { check } from 'express-validator';

export default [
  check('email')
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('Email address is required'),
  check('password')
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('Password is required'),
];
