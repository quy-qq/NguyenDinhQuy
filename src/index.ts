import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./routers/product.router";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

const PORT = 3000;
const MONGODB_URI =
  "mongodb+srv://quynguyen:J1q55fVc6W2hsiSr@social.mx7nvwb.mongodb.net/interview-99tech";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
