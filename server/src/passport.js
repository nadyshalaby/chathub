import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { User } from "./models";

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
passport.use(
  new JwtStrategy(opts, (payload, done) => {
    User.findByPk(payload.id).then(user => {
      if (user) {
        return done(null, user);
      }
      return done("User not found.", false);
    });
  })
);

/**
 * Passport middleware for authenticating users by their (username, password) credentials
 */
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    (email, password, done) => {
      User.findOne({ where: { email } }).then(user => {
        if (!user) return done("User not found", false);
        if (bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        }
        return done("Your credentials is incorrect");
      });
    }
  )
);

export default passport;
