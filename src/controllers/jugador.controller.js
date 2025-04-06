import jugadorService from "../services/jugador.service.js";

// Registrar un nuevo jugador.
export const registerJugador = async (req, res) => {
  try {
    const { id_jugador, nombre, apellido, id_categoria } = req.body;
    const jugador = await jugadorService.crearJugador({
      id_jugador,
      nombre,
      apellido,
      id_categoria,
    });

    res.status(201).json({
      error: false,
      message: "Jugador registrado correctamente",
      jugador,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Editar un jugador.
export const editJugador = async (req, res) => {
  try {
    const { id_jugador } = req.params;
    const { nombre, apellido, id_categoria } = req.body;

    const jugador = await jugadorService.actualizarJugador(id_jugador, {
      nombre,
      apellido,
      id_categoria,
    });

    res.status(200).json({
      error: false,
      message: "Jugador editado correctamente",
      jugador,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Eliminar un jugador.
export const deleteJugador = async (req, res) => {
  try {
    const { id_jugador } = req.params;
    await jugadorService.eliminarJugador(id_jugador);

    res.status(200).json({
      error: false,
      message: "Jugador eliminado correctamente",
      id_jugador,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener todos los jugadores.
export const getJugadores = async (req, res) => {
  try {
    const jugadores = await jugadorService.obtenerTodos();

    res.status(200).json({
      error: false,
      message: "Jugadores obtenidos correctamente",
      jugadores,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener un jugador por id.
export const getJugador = async (req, res) => {
  try {
    const { id_jugador } = req.params;
    const jugador = await jugadorService.obtenerPorId(id_jugador);

    res.status(200).json({
      error: false,
      message: "Jugador obtenido correctamente",
      jugador,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};
