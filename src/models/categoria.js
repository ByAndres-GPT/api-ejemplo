import Sequelize from "sequelize";
import db from "../db/db.js";
import Entrenador from "./entrenador.js";

const Categoria = db.define(
  "categorias",
  {
    id_categoria: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_entrenador: {
      type: Sequelize.INTEGER,
    },
  },

  {
    timestamps: false,
    tableName: "categorias",
  }
);

// Relación con la tabla de entrenadores.
Categoria.belongsTo(Entrenador, {
  foreignKey: "id_entrenador",
  as: "entrenador",
});

Entrenador.hasMany(Categoria, {
  foreignKey: "id_entrenador",
  as: "categorias",
});

export default Categoria;
