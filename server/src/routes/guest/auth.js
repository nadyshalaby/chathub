import { Router } from 'express';
import passport from 'passport';
import { sign as jwtSign } from 'jsonwebtoken';
import { body, validationResult } from 'express-validator/check';
import bcrypt from 'bcrypt';
import { User } from '../../models';

const authRouter = Router();
/**
 * Signup Request
 */
authRouter.post(
  '/signup',
  [
    // chech firstName is sent
    body('firstName')
      .exists()
      .withMessage('Frist name is required.'),

    // Check that email is valid & does't exist before
    body('email')
      .exists()
      .withMessage('Password is required.')
      .isEmail()
      .withMessage('Email has invalid format.')
      .custom(email =>
        User.findOne({ where: { email } }).then(user => {
          if (user) return Promise.reject(new Error('Email already registed.'));
        })
      ),

    // Validate that password is <alpha-numeric> form
    body('password')
      .exists()
      .withMessage('Password is required')
      .matches(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/, 'i')
      .withMessage(
        'Password should have at least one letter, one digit and a size of 8 chars or more.'
      ),
  ],
  async (req, res) => {
    // check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        success: false,
        payload: errors.array().map(({ param, msg }) => ({ param, msg })),
      });
    } else {
      User.create({
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10),
      }).then(user => {
        const { password, ...payload } = user.get({ plain: true });
        res.json({
          success: true,
          payload,
        });
      });
    }
  }
);

/**
 * Signin Request
 */
authRouter.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('POST', err, user);
    if (err || !user)
      return res.json({
        success: false,
        payload: err || "Can't login with empty credentials",
      });
    const token = `Barear ${jwtSign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30 days',
      }
    )}`;
    res.json({
      success: true,
      payload: {
        id: user.id,
        token,
      },
    });
  })(req, res, next);
});

module.exports = authRouter;
