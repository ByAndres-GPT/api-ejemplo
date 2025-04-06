import Categoria from "../models/categoria.js";
import Entrenador from "../models/entrenador.js";
import Jugador from "../models/jugador.js";

class CategoriaService {
  // Registrar una nueva categoría
  async crearCategoria({ nombre, descripcion, id_entrenador }) {
    if (!nombre || !descripcion || !id_entrenador) {
      throw new Error("Faltan datos para registrar la categoría");
    }

    // Validar que el entrenador exista
    const existeEntrenador = await Entrenador.findByPk(id_entrenador);
    if (!existeEntrenador) {
      throw new Error("El entrenador no existe");
    }

    const categoria = await Categoria.create({
      nombre,
      descripcion,
      id_entrenador,
    });

    if (!categoria) {
      throw new Error("Error al registrar la categoría");
    }

    return categoria;
  }

  // Obtener todas las categorías
  async obtenerTodas() {
    const categorias = await Categoria.findAll({
      include: [
        {
          model: Entrenador,
          as: "entrenador",
        },
      ],
    });

    if (!categorias) {
      throw new Error("Error al obtener las categorías");
    }

    return categorias;
  }

  // Obtener una categoría por ID
  async obtenerPorId(id_categoria) {
    if (!id_categoria) {
      throw new Error("Faltan datos para obtener la categoría");
    }

    const categoria = await Categoria.findByPk(id_categoria, {
      include: [
        {
          model: Entrenador,
          as: "entrenador",
        },
      ],
    });

    if (!categoria) {
      throw new Error("La categoria no existe");
    }

    return categoria;
  }

  // Actualizar una categoría
  async actualizarCategoria(
    id_categoria,
    { nombre, descripcion, id_entrenador }
  ) {
    if (!id_categoria || !nombre || !descripcion || !id_entrenador) {
      throw new Error("Faltan datos para editar la categoría");
    }

    // Validar que la categoría exista
    const existeCategoria = await Categoria.findByPk(id_categoria);
    if (!existeCategoria) {
      throw new Error("La categoria no existe");
    }

    // Validar que el entrenador exista
    const existeEntrenador = await Entrenador.findByPk(id_entrenador);
    if (!existeEntrenador) {
      throw new Error("El entrenador no existe");
    }

    const categoriaActualizada = await existeCategoria.update({
      nombre,
      descripcion,
      id_entrenador,
    });

    if (!categoriaActualizada) {
      throw new Error("Error al editar la categoría");
    }

    return categoriaActualizada;
  }

  // Eliminar una categoría
  async eliminarCategoria(id_categoria) {
    if (!id_categoria) {
      throw new Error("Faltan datos para eliminar la categoría");
    }

    const existeCategoria = await Categoria.findByPk(id_categoria);
    if (!existeCategoria) {
      throw new Error("La categoria no existe");
    }

    await existeCategoria.destroy();
    return { id_categoria };
  }

  // Obtener jugadores por categoría
  async obtenerJugadoresPorCategoria(id_categoria) {
    if (!id_categoria) {
      throw new Error("Falta el id de la categoria");
    }

    const categoria = await Categoria.findByPk(id_categoria, {
      include: [
        {
          model: Jugador,
          as: "jugadores",
        },
      ],
    });

    if (!categoria) {
      throw new Error("La categoría no existe");
    }

    return categoria.jugadores;
  }
}

export default new CategoriaService();
