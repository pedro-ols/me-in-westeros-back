import express from "express";
import castleController from "../controllers/castle.controller.js";

const castleRouter = express.Router();

castleRouter.get("/", castleController.getAllCastles);

castleRouter.get("/:id", castleController.getCastleById);

castleRouter.post("/", castleController.createCastle);

castleRouter.put("/:id", castleController.updateCastle);

castleRouter.delete("/:id", castleController.deleteCastle);

export default castleRouter;