import { Router } from "express";

const profileRouter = Router();

profileRouter.post("/", (req, res) => {
  res.send("Profile Home Page.");
});

module.exports = profileRouter;
