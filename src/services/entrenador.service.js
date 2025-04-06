import Entrenador from "../models/entrenador.js";
import Categoria from "../models/categoria.js";

class EntrenadorService {
  // Registrar un nuevo entrenador
  async crearEntrenador({ id_entrenador, nombre, apellido }) {
    if (!id_entrenador || !nombre || !apellido) {
      throw new Error("Faltan datos para registrar el entrenador");
    }

    const existeEntrenador = await Entrenador.findByPk(id_entrenador);
    if (existeEntrenador) {
      throw new Error("El entrenador ya existe");
    }

    const entrenador = await Entrenador.create({
      id_entrenador,
      nombre,
      apellido,
    });

    if (!entrenador) {
      throw new Error("Error al registrar el entrenador");
    }

    return entrenador;
  }

  // Obtener todos los entrenadores
  async obtenerTodos() {
    const entrenadores = await Entrenador.findAll();
    if (!entrenadores) {
      throw new Error("Error al obtener los entrenadores");
    }
    return entrenadores;
  }

  // Obtener un entrenador por ID
  async obtenerPorId(id_entrenador) {
    if (!id_entrenador) {
      throw new Error("Faltan datos para obtener el entrenador");
    }

    const entrenador = await Entrenador.findByPk(id_entrenador);
    if (!entrenador) {
      throw new Error("El entrenador no existe");
    }

    return entrenador;
  }

  // Actualizar un entrenador
  async actualizarEntrenador(id_entrenador, { nombre, apellido }) {
    if (!id_entrenador || !nombre || !apellido) {
      throw new Error("Faltan datos para editar el entrenador");
    }

    const existeEntrenador = await Entrenador.findByPk(id_entrenador);
    if (!existeEntrenador) {
      throw new Error("El entrenador no existe");
    }

    const entrenadorActualizado = await existeEntrenador.update({
      nombre,
      apellido,
    });

    if (!entrenadorActualizado) {
      throw new Error("Error al editar el entrenador");
    }

    return entrenadorActualizado;
  }

  // Eliminar un entrenador
  async eliminarEntrenador(id_entrenador) {
    if (!id_entrenador) {
      throw new Error("Faltan datos para eliminar el entrenador");
    }

    const existeEntrenador = await Entrenador.findByPk(id_entrenador);
    if (!existeEntrenador) {
      throw new Error("El entrenador no existe");
    }

    await existeEntrenador.destroy();
    return { id_entrenador };
  }

  // Obtener categorías de un entrenador
  async obtenerCategorias(id_entrenador) {
    if (!id_entrenador) {
      throw new Error("Falta el id del entrenador");
    }

    const entrenador = await Entrenador.findByPk(id_entrenador, {
      include: [
        {
          model: Categoria,
          as: "categorias",
        },
      ],
    });

    if (!entrenador) {
      throw new Error("El entrenador no existe");
    }

    return entrenador.categorias;
  }
}

export default new EntrenadorService();
