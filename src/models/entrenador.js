import Sequelize from "sequelize";
import db from "../db/db.js";

const Entrenador = db.define(
  "entrenadores",
  {
    id_entrenador: {
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
  },
  {
    timestamps: false,
    tableName: "entrenadores",
  }
);

export default Entrenador;
