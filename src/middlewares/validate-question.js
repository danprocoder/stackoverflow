import { check } from 'express-validator';

export default [
  check('title')
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title should not exceed 200 characters'),
  check('body')
    .trim()
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Body is required')
    .isLength({ min: 20 })
    .withMessage('Body should be at least 20 characters'),
];
