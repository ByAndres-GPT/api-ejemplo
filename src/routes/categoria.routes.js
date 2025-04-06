import { Router } from "express";
import {
  registerCategoria,
  editCategoria,
  deleteCategoria,
  getCategorias,
  getCategoria,
  getJugadoresByCategoria,
} from "../controllers/categoria.controller.js";

const router = Router();

// Registrar una nueva categoria.
router.post("/", registerCategoria);

// Editar una categoria.
router.put("/:id_categoria", editCategoria);

// Eliminar una categoria.
router.delete("/:id_categoria", deleteCategoria);

// Obtener todas las categorias.
router.get("/", getCategorias);

// Obtener una categoria por id.
router.get("/:id_categoria", getCategoria);

// Obtener todos los jugadores de una categoría
router.get("/:id_categoria/jugadores", getJugadoresByCategoria);

export default router;
