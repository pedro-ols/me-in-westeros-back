import express from "express";
import HouseController from "../controllers/house.controller.js";

const houseRouter = express.Router();

houseRouter.get("/", HouseController.getAllHouses);

houseRouter.get("/:id", HouseController.getHouseById);

houseRouter.post("/", HouseController.createHouse);

houseRouter.put("/:id", HouseController.updateHouse);

houseRouter.delete("/:id", HouseController.deleteHouse);

export default houseRouter;