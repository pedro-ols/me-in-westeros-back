import express from "express";
import CharacterController from "../controllers/character.controller.js";

const characterRouter = express.Router();

characterRouter.get("/", CharacterController.getAllCharacters);

characterRouter.get("/:id", CharacterController.getCharacterById);

characterRouter.post("/", CharacterController.createCharacter);

characterRouter.put("/:id", CharacterController.updateCharacter);

characterRouter.delete("/:id", CharacterController.deleteCharacter);

export default characterRouter;