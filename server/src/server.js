import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import morgan from "morgan";
import "./init";
import passport from "./passport";
import routes from "./routes";

const app = express();
const port = process.env.PORT;
// register logger middleware
// only when debug is true
if (process.env.DEBUG) app.use(morgan("combined"));

// register middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(passport.initialize());
app.use(routes);

// testing express server
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
