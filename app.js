import express from "express";
import 'dotenv/config'
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`MyExpress app - listening on port ${PORT}!`);
});