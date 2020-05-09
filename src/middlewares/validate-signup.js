import { check } from 'express-validator';

export default [
  check('displayName')
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('Display name is required')
    .custom(value => /^[a-zA-Z_\-0-9]+( [a-zA-Z_\-0-9]+)*$/.test(value))
    .withMessage('Display name can only contain characters a-z, A-Z, 0-9, _, -, or a whitespace.'),
  check('email')
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('Email address is required')
    .isEmail()
    .withMessage('Email address is not valid'),
  check('password')
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 characters long'),
];
