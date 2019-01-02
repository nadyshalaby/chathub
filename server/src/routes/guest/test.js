import { Router } from "express";
import { User } from "../../models";

const testRouter = Router();

testRouter.get("/", async (req, res) => {
  req.ioc.cradle.cannedMailer
    .sendResetPassword(await User.findOne())
    .then(() => res.send("Success."));

  // req.ioc.cradle.mailer
  //   .to(["name@example.com", "aaaa@DDD.cxs"])
  //   // .testConnection()
  //   .send("account-activation", { activationUrl: "https://www.google.com" })
  //   .then(() => res.send("Message sent successfully"))
  //   .catch(err => console.log(err));
});

module.exports = testRouter;
