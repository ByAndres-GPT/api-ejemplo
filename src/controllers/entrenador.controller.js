import entrenadorService from "../services/entrenador.service.js";

// Registrar un nuevo entrenador.
export const registerEntrenador = async (req, res) => {
  try {
    const { id_entrenador, nombre, apellido } = req.body;
    const entrenador = await entrenadorService.crearEntrenador({
      id_entrenador,
      nombre,
      apellido,
    });

    res.status(201).json({
      error: false,
      message: "Entrenador registrado correctamente",
      entrenador,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};

// Editar un entrenador.
export const editEntrenador = async (req, res) => {
  try {
    const { id_entrenador } = req.params;
    const { nombre, apellido } = req.body;

    const entrenador = await entrenadorService.actualizarEntrenador(
      id_entrenador,
      { nombre, apellido }
    );

    res.status(200).json({
      error: false,
      message: "Entrenador editado correctamente",
      entrenador,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Eliminar un entrenador.
export const deleteEntrenador = async (req, res) => {
  try {
    const { id_entrenador } = req.params;
    await entrenadorService.eliminarEntrenador(id_entrenador);

    res.status(200).json({
      error: false,
      message: "Entrenador eliminado correctamente",
      id_entrenador,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener todos los entrenadores.
export const getEntrenadores = async (req, res) => {
  try {
    const entrenadores = await entrenadorService.obtenerTodos();

    res.status(200).json({
      error: false,
      message: "Entrenadores obtenidos correctamente",
      entrenadores,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener un entrenador por id.
export const getEntrenador = async (req, res) => {
  try {
    const { id_entrenador } = req.params;
    const entrenador = await entrenadorService.obtenerPorId(id_entrenador);

    res.status(200).json({
      error: false,
      message: "Entrenador obtenido correctamente",
      entrenador,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener todas las categorías de un entrenador específico.
export const getCategoriasByEntrenador = async (req, res) => {
  try {
    const { id_entrenador } = req.params;
    const categorias = await entrenadorService.obtenerCategorias(id_entrenador);

    res.status(200).json({
      error: false,
      message: "Categorías del entrenador obtenidas correctamente",
      categorias,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};
