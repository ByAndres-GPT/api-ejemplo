import Sequelize from "sequelize";
import db from "../db/db.js";
import Categoria from "./categoria.js";

const Jugador = db.define(
  "jugadores",
  {
    id_jugador: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_categoria: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "jugadores",
  }
);

// Relación con la tabla de categorías.
Jugador.belongsTo(Categoria, {
  foreignKey: "id_categoria",
  as: "categoria",
});

Categoria.hasMany(Jugador, {
  foreignKey: "id_categoria",
  as: "jugadores",
});

export default Jugador;
