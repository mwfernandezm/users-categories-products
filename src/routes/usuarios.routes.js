import { Router } from "express";
import {
  getUsuarios,
  createUsuario,
  getUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioCategorias,
  getUsuariosCategorias,
  getUsuarioCategoriaProductos,
  getUsuariosCategoriasProductos,
} from "../controllers/usuario.controller.js";

const router = Router();

// Routes
router.get("/", getUsuarios);

router.post("/", createUsuario);

router.get("/:id", getUsuario);

router.put("/:id", updateUsuario);

router.delete("/:id", deleteUsuario);

router.get("/:id/categorias", getUsuarioCategorias);

router.get("/all/categorias/all", getUsuariosCategorias);

router.get("/:id/categorias/:id", getUsuarioCategoriaProductos);

router.get("/all/categorias/all/productos/all", getUsuariosCategoriasProductos);

export default router;
