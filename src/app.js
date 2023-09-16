import express from "express";
import morgan from "morgan";

const app = express();

// Import routes

import usuarioRoutes from "./routes/usuarios.routes.js";
import categoriaRoutes from "./routes/categorias.routes.js";
import productoRoutes from "./routes/productos.routes.js";

// Middlewares

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/productos", productoRoutes);

export default app;
