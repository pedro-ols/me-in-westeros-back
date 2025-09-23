import express from "express";

import houseRouter from "./house.routes.js";
import characterRouter from "./character.routes.js";
import castleRouter from "./castle.routes.js";
import actorRouter from "./actor.routes.js";
import bookRouter from "./book.routes.js";

const router = express.Router();

router.use("/houses", houseRouter);
router.use("/characters", characterRouter);
router.use("/castles", castleRouter);
router.use("/actors", actorRouter);
router.use("/books", bookRouter);


export default router;