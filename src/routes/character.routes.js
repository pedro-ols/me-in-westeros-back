import express from "express";
import characterController from "../controllers/character.controller.js";

const characterRouter = express.Router();

characterRouter.get("/", characterController.getAllCharacters);

characterRouter.get("/:id", characterController.getCharacterById);

characterRouter.post("/", characterController.createCharacter);

characterRouter.put("/:id", characterController.updateCharacter);

characterRouter.delete("/:id", characterController.deleteCharacter);

export default characterRouter;