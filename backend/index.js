import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));


app.use(express.json());




app.listen(PORT, () => console.log(`The server is listening to port ${PORT}`));
