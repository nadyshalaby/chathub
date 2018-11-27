import { Router } from "express";

const secureRouter = Router();

secureRouter.use("/profile", require("./profile"));

module.exports = secureRouter;
