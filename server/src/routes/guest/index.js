import { Router } from "express";

const guestRouter = Router();

guestRouter.use("/auth", require("./auth"));
guestRouter.use("/test", require("./test"));

module.exports = guestRouter;
