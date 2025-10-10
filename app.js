import express from "express";
import gameRouter from "./routes/gameRouter.js";
import characterRouter from "./routes/characterRouter.js";
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Hello, world!"));

app.use("/settings", gameRouter);
app.use("/characters", characterRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`MyExpress app - listening on port ${PORT}!`);
});