import express from "express";
import AtributeController from "../controllers/atribute.controller.js";

const atributeRouter = express.Router();

atributeRouter.get("/", AtributeController.getAllAtributes);

atributeRouter.get("/:id", AtributeController.getAtributeById);

atributeRouter.post("/", AtributeController.createAtribute);

atributeRouter.put("/:id", AtributeController.updateAtribute);

atributeRouter.delete("/:id", AtributeController.deleteAtribute);

export default atributeRouter;