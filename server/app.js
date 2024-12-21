import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/ping", function (req, res) {
  res.send("Pong");
});

app.use("/api/v1/user", userRoutes);

app.all("*", (req, res) => {
  res.status(400).send("OOPS!! 404 page not found");
});

//  Error this is Now =>( module.exports = app;)
export default app;
