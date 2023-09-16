import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Producto = sequelize.define("productos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "nombre del producto",
  },

  precio_unitario: {
    type: DataTypes.REAL,
    allowNull: false,
    comment: "precio del producto",
  },

  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: "estado del producto",
  },
});
