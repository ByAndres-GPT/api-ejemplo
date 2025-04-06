import Jugador from "../models/jugador.js";
import Categoria from "../models/categoria.js";
import Entrenador from "../models/entrenador.js";

class JugadorService {
  // Registrar un nuevo jugador
  async crearJugador({ id_jugador, nombre, apellido, id_categoria }) {
    if (!id_jugador || !nombre || !apellido || !id_categoria) {
      throw new Error("Faltan datos para registrar el jugador");
    }

    // Validar que la categoría exista
    const existeCategoria = await Categoria.findByPk(id_categoria);
    if (!existeCategoria) {
      throw new Error("La categoria no existe");
    }

    const jugador = await Jugador.create({
      id_jugador,
      nombre,
      apellido,
      id_categoria,
    });

    if (!jugador) {
      throw new Error("Error al registrar el jugador");
    }

    return jugador;
  }

  // Obtener todos los jugadores
  async obtenerTodos() {
    const jugadores = await Jugador.findAll({
      include: [
        {
          model: Categoria,
          as: "categoria",
          include: [
            {
              model: Entrenador,
              as: "entrenador",
            },
          ],
        },
      ],
    });

    if (!jugadores) {
      throw new Error("Error al obtener los jugadores");
    }

    return jugadores;
  }

  // Obtener un jugador por ID
  async obtenerPorId(id_jugador) {
    if (!id_jugador) {
      throw new Error("Faltan datos para obtener el jugador");
    }

    const jugador = await Jugador.findByPk(id_jugador, {
      include: [
        {
          model: Categoria,
          as: "categoria",
          include: [
            {
              model: Entrenador,
              as: "entrenador",
            },
          ],
        },
      ],
    });

    if (!jugador) {
      throw new Error("El jugador no existe");
    }

    return jugador;
  }

  // Actualizar un jugador
  async actualizarJugador(id_jugador, { nombre, apellido, id_categoria }) {
    if (!id_jugador || !nombre || !apellido || !id_categoria) {
      throw new Error("Faltan datos para editar el jugador");
    }

    // Validar que el jugador exista
    const existeJugador = await Jugador.findByPk(id_jugador);
    if (!existeJugador) {
      throw new Error("El jugador no existe");
    }

    // Validar que la categoría exista
    const existeCategoria = await Categoria.findByPk(id_categoria);
    if (!existeCategoria) {
      throw new Error("La categoria no existe");
    }

    const jugadorActualizado = await existeJugador.update({
      nombre,
      apellido,
      id_categoria,
    });

    if (!jugadorActualizado) {
      throw new Error("Error al editar el jugador");
    }

    return jugadorActualizado;
  }

  // Eliminar un jugador
  async eliminarJugador(id_jugador) {
    if (!id_jugador) {
      throw new Error("Faltan datos para eliminar el jugador");
    }

    const existeJugador = await Jugador.findByPk(id_jugador);
    if (!existeJugador) {
      throw new Error("El jugador no existe");
    }

    await existeJugador.destroy();
    return { id_jugador };
  }
}

export default new JugadorService();
