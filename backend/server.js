import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import statsRoutes from "./routes/stats.routes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stats", statsRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Servidor corriendo en puerto ${process.env.PORT}`
  );
});