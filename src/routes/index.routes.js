import express from "express";

// Importar todas as rotas
import houseRouter from "./house.routes.js";

const router = express.Router();

router.use("/houses", houseRouter);


export default router;