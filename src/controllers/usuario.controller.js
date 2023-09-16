import { Usuario } from "../models/Usuario.js";
import { Categoria } from "../models/Categoria.js";
import { Producto } from "../models/Producto.js";

export async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      attributes: ["id", "nombre", "correo", "contrasena", "estado"],
    });

    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  console.log("Creando un usuario", req.body);
  const { nombre, correo, contrasena, estado } = req.body;
  try {
    const newUsuario = await Usuario.create(
      {
        nombre,
        correo,
        contrasena,
        estado,
      },
      {
        fields: ["nombre", "correo", "contrasena", "estado"],
      }
    );
    return res.json(newUsuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findOne({
      where: { id },
    });
    return res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateUsuario(req, res) {
  const { id } = req.params;
  const { nombre, correo, contrasena, estado } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    usuario.nombre = nombre;
    usuario.correo = correo;
    usuario.contrasena = contrasena;
    usuario.estado = estado;

    await usuario.save();

    return res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await Producto.destroy({
      where: { categoria_id: id },
    });
    await Categoria.destroy({
      where: { usuario_id: id },
    });
    await Usuario.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuarioCategorias(req, res) {
  const { id } = req.params;
  try {
    const categorias = await Categoria.findAll({
      attributes: ["id", "usuario_id", "nombre"],
      where: { usuario_id: id },
    });
    return res.json(categorias);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuariosCategorias(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      attributes: ["id", "nombre", "correo", "contrasena", "estado"],
      include: [
        {
          model: Categoria,
          attributes: ["id", "nombre"],
          required: true,
        },
      ],
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuarioCategoriaProductos(req, res) {
  const { id } = req.params;
  try {
    const categorias = await Categoria.findAll({
      attributes: ["id", "usuario_id", "nombre"],
      where: { usuario_id: id },
    });
    const productos = await Producto.findAll({
      attributes: [
        "id",
        "categoria_id",
        "usuario_id",
        "nombre",
        "precio_unitario",
        "estado",
      ],
      where: { categoria_id: id },
    });
    return res.json(productos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuariosCategoriasProductos(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      attributes: ["id", "nombre", "correo", "contrasena", "estado"],
      include: [
        {
          model: Categoria,
          attributes: ["id", "nombre"],
          required: true,
        },
        {
          model: Producto,
          attributes: [
            "id",
            "categoria_id",
            "usuario_id",
            "nombre",
            "precio_unitario",
            "estado",
          ],
          required: true,
        },
      ],
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
