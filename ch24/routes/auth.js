import express from 'express'
import { body } from 'express-validator'

import * as authController from '../controllers/auth'
const User = require('../models/user')

const router = express.Router()

router.put(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User
          .findOne({ email: value })
          .then(userDoc => {
            if (userDoc) {
              return Promise.reject(new Error('Email address already exists!'))
            }
          })
      })
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 5 }),
    body('name')
      .trim()
      .not()
      .isEmpty()
  ], authController.signup)

router.post('/login', authController.login)

module.exports = router
