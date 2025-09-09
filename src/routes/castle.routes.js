import express from "express";
import CastleController from "../controllers/castle.controller.js";

const castleRouter = express.Router();

castleRouter.get("/", CastleController.getAllCastles);

castleRouter.get("/:id", CastleController.getCastleById);

castleRouter.post("/", CastleController.createCastle);

castleRouter.put("/:id", CastleController.updateCastle);

castleRouter.delete("/:id", CastleController.deleteCastle);

export default castleRouter;