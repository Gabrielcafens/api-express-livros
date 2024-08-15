// server.js
import "dotenv/config";
import express from "express";
import livrosRoutes from "./src/routes/livrosRoutes.js";

const app = express();

app.use(express.json());
app.use('/api', livrosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
