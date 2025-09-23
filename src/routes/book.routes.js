import express from "express";
import BookController from "../controllers/book.controller.js";

const bookRouter = express.Router();

bookRouter.get("/", BookController.getAllBooks);

bookRouter.get("/:id", BookController.getBookById);

bookRouter.post("/", BookController.createBook);

bookRouter.put("/:id", BookController.updateBook);

bookRouter.delete("/:id", BookController.deleteBook);

export default bookRouter;