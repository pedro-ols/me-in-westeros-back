import express from "express";
import ActorController from "../controllers/actor.controller.js";

const actorRouter = express.Router();

actorRouter.get("/", ActorController.getAllActors);

actorRouter.get("/:id", ActorController.getActorById);

actorRouter.post("/", ActorController.createActor);

actorRouter.put("/:id", ActorController.updateActor);

actorRouter.delete("/:id", ActorController.deleteActor);

export default actorRouter;