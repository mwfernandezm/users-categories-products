import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Categoria } from "./Categoria.js";
import { Producto } from "./Producto.js";

export const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "nombre del usuario",
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "correo del usuario",
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "contrasena del usuario",
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      comment: "estado del usuario",
    },
  },
  {
    timestamps: false,
  }
);

Usuario.hasMany(Categoria, {
  foreignKey: "usuario_id",
  sourceKey: "id",
});

Usuario.hasMany(Producto, {
  foreignKey: "usuario_id",
  sourceKey: "id",
});

Categoria.hasMany(Producto, {
  foreignKey: "categoria_id",
  sourceKey: "id",
});

Categoria.belongsTo(Usuario, {
  foreignKey: "usuario_id",
  targetKey: "id",
});

Producto.belongsTo(Usuario, {
  foreignKey: "usuario_id",
  targetKey: "id",
});

Producto.belongsTo(Categoria, {
  foreignKey: "categoria_id",
  targetKey: "id",
});
