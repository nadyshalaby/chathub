import { Router } from "express";
import passport from "passport";

const rootRouter = Router();

rootRouter.use(require("./guest"));

rootRouter.use(
  "/secure",
  (req, res, next) => {
    // Override the callback that is responsible for
    // reponding after the authorization process
    passport.authenticate("jwt", (err, user, info) => {
      // check if the user obj is populated with data or not
      // we should not test with err because in both cases of
      // successful login or invalid token
      // the err obj is assigned with null
      if (!user) {
        res.status(401).json({
          success: false,
          payload: err || "Unauthorized. Token may be invalid or Expired."
        });
      }
      // in case of successful login continue to the request handler
      next();
    })(req, res, next);
  },
  require("./secure")
);

export default rootRouter;
