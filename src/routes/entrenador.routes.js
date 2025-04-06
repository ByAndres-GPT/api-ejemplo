import { Router } from "express";
import {
  registerEntrenador,
  editEntrenador,
  deleteEntrenador,
  getEntrenadores,
  getEntrenador,
  getCategoriasByEntrenador,
} from "../controllers/entrenador.controller.js";

const router = Router();

// Registrar un nuevo entrenador.
router.post("/", registerEntrenador);

// Editar un entrenador.
router.put("/:id_entrenador", editEntrenador);

// Eliminar un entrenador.
router.delete("/:id_entrenador", deleteEntrenador);

// Obtener todos los entrenadores.
router.get("/", getEntrenadores);

// Obtener un entrenador por id.
router.get("/:id_entrenador", getEntrenador);

// Obtener todas las categorías de un entrenador específico.
router.get("/:id_entrenador/categorias", getCategoriasByEntrenador);

export default router;
