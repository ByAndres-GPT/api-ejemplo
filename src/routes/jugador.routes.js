import { Router } from "express";
import {
  registerJugador,
  editJugador,
  deleteJugador,
  getJugadores,
  getJugador,
} from "../controllers/jugador.controller.js";

const router = Router();

// Registrar un nuevo jugador.
router.post("/", registerJugador);

// Editar un jugador.
router.put("/:id_jugador", editJugador);

// Eliminar un jugador.
router.delete("/:id_jugador", deleteJugador);

// Obtener todos los jugadores.
router.get("/", getJugadores);

// Obtener un jugador por id.
router.get("/:id_jugador", getJugador);

export default router;
