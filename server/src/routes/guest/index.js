import { Router } from "express";

const guestRouter = Router();

guestRouter.use("/auth", require("./auth"));

module.exports = guestRouter;
