import categoriaService from "../services/categoria.service.js";

// Registrar una nueva categoría.
export const registerCategoria = async (req, res) => {
  try {
    const { nombre, descripcion, id_entrenador } = req.body;
    const categoria = await categoriaService.crearCategoria({
      nombre,
      descripcion,
      id_entrenador,
    });

    res.status(201).json({
      error: false,
      message: "Categoría registrada correctamente",
      categoria,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Editar una categoría.
export const editCategoria = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const { nombre, descripcion, id_entrenador } = req.body;

    const categoria = await categoriaService.actualizarCategoria(id_categoria, {
      nombre,
      descripcion,
      id_entrenador,
    });

    res.status(200).json({
      error: false,
      message: "Categoría editada correctamente",
      categoria,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Eliminar una categoría.
export const deleteCategoria = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    await categoriaService.eliminarCategoria(id_categoria);

    res.status(200).json({
      error: false,
      message: "Categoría eliminada correctamente",
      id_categoria,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener todas las categorías.
export const getCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.obtenerTodas();

    res.status(200).json({
      error: false,
      message: "Categorías obtenidas correctamente",
      categorias,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener una categoría por id.
export const getCategoria = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const categoria = await categoriaService.obtenerPorId(id_categoria);

    res.status(200).json({
      error: false,
      message: "Categoría obtenida correctamente",
      categoria,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};

// Obtener todos los jugadores de una categoría
export const getJugadoresByCategoria = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const jugadores = await categoriaService.obtenerJugadoresPorCategoria(
      id_categoria
    );

    res.status(200).json({
      error: false,
      message: "Jugadores de la categoría obtenidos correctamente",
      jugadores,
    });
  } catch (error) {
    const statusCode = error.message.includes("no existe") ? 404 : 400;
    res.status(statusCode).json({
      error: true,
      message: error.message,
    });
  }
};
