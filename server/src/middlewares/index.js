import { Router } from "express";
import awilix from "./awilix";

const middlewareRouter = Router();

middlewareRouter.use(awilix);

export default middlewareRouter;
