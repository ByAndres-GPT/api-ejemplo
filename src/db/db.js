import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Para una base de datos remota, por ejemplo, en Railway.
// const sequelize = new Sequelize(process.env.MYSQL_URL, {
//   define: { timestamps: false },
// });

//Para una base de datos local.
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
