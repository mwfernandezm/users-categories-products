import { Producto } from "../models/Producto.js";

export async function getProductos(req, res) {
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
      order: [["id", "DESC"]],
    });

    res.json(productos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createProducto(req, res) {
  const { nombre, precio_unitario, estado, categoria_id, usuario_id } =
    req.body;
  try {
    const newProducto = await Producto.create({
      categoria_id,
      usuario_id,
      nombre,
      precio_unitario,
      estado,
    });
    res.json(newProducto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProducto(req, res) {
  const { id } = req.params;
  try {
    const producto = await Producto.findOne({
      where: { id },
    });
    return res.json(producto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateProducto(req, res) {
  const { id } = req.params;

  try {
    const producto = await Producto.findOne({
      attributes: [
        "nombre",
        "categoria_id",
        "usuario_id",
        "precio_unitario",
        "estado",
        "id",
      ],
      where: { id },
    });

    producto.set(req.body);

    await producto.save();

    return res.json(producto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteProducto(req, res) {
  const { id } = req.params;
  try {
    await Producto.destroy({
      where: { categoria_id: id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
