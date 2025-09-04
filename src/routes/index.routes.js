import express from "express";

// Importar todas as rotas
import houseRouter from "./house.routes.js";
import characterRouter from "./character.routes.js";

const router = express.Router();

router.use("/houses", houseRouter);
router.use("/characters", characterRouter);


export default router;