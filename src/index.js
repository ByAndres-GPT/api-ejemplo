import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

import db from "./db/db.js";
import entrenadorRoutes from "./routes/entrenador.routes.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import jugadorRoutes from "./routes/jugador.routes.js";

console.log("db index", process.env.DB);

const app = express();

// Configurar el middleware de CORS.
app.use(
  cors({
    origin: "*",
  })
);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base de datos.
db.authenticate()
  .then(() => console.log("Databse connection successful"))
  .catch((error) => console.log("Connection error: ", error));

// Para crear las tablas a partir de los modelos
db.sync()
  .then(() => console.log("Database synchronized"))
  .catch((error) => console.log("Error synchronizing database: ", error));

// Endpoint de la API.
app.use("/entrenadores", entrenadorRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/jugadores", jugadorRoutes);

// Puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
