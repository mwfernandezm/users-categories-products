import { Router } from "express";
import {
  getCategorias,
  createCategoria,
  getCategoria,
  updateCategoria,
  deleteCategoria,
  getCategoriaProductos,
  getCategoriasProductos,
} from "../controllers/categoria.controller.js";

const router = Router();

// Routes
router.get("/", getCategorias);

router.post("/", createCategoria);

router.put("/:id", updateCategoria);

router.delete("/:id", deleteCategoria);

router.get("/:id", getCategoria);

router.get("/:id/productos", getCategoriaProductos);

router.get("/all/productos/all", getCategoriasProductos);

export default router;
