import { Categoria } from "../models/Categoria.js";
import { Producto } from "../models/Producto.js";

export async function getCategorias(req, res) {
  try {
    const categorias = await Categoria.findAll({
      attributes: ["id", "usuario_id", "nombre"],
      order: [["id", "DESC"]],
    });

    res.json(categorias);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCategoria(req, res) {
  const { nombre, usuario_id } = req.body;
  try {
    const newCategoria = await Categoria.create({
      usuario_id,
      nombre,
    });
    res.json(newCategoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getCategoria(req, res) {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findOne({
      where: { id },
    });
    return res.json(categoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateCategoria(req, res) {
  const { id } = req.params;

  try {
    const categoria = await Categoria.findOne({
      attributes: ["nombre", "usuario_id", "id"],
      where: { id },
    });

    categoria.set(req.body);

    await categoria.save();

    return res.json(categoria);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteCategoria(req, res) {
  const { id } = req.params;
  try {
    await Producto.destroy({
      where: { categoria_id: id },
    });
    await Categoria.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getCategoriaProductos(req, res) {
  const { id } = req.params;
  try {
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

export async function getCategoriasProductos(req, res) {
  try {
    const categorias = await Categoria.findAll({
      attributes: ["id", "nombre", "usuario_id"],
      include: [
        {
          model: Producto,
          attributes: [
            "id",
            "nombre",
            "precio_unitario",
            "estado",
            "categoria_id",
            "usuario_id",
          ],
          required: true,
        },
      ],
    });
    res.json(categorias);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
