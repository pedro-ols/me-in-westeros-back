import BookModel from "../models/book.model.js";

class BookController {
    async getAllBooks(req, res) {
        try {   
            const books = await BookModel.getAllBooks();
            res.status(200).json({ message: "livros encontrados com êxito", books });
        }       
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar livros" });
        }   
    }

    async getBookById(req, res) {
        const { id } = req.params;
        try {
            const book = await BookModel.getBookById(id);
            if (book) {
                res.status(200).json({ message: "livro encontrado com êxito", book });
            }   
            else {
                res.status(404).json({ error: "livro não encontrado" });
            }   
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar livro" });
        }
    }

    async createBook(req, res) {
        const bookData = req.body;
        
        try {
            if(!bookData.strength || !bookData.intelligence || !bookData.agility || !bookData.endurance || !bookData.perception || !bookData.charisma || !bookData.luck){
                return res.status(400).json({ error: "Alguma informação dos atributos está faltando" });
            }
            if(!bookData.characterId){
                return res.status(400).json({ error: "Indique a qual personagem esses atributos pertencem" });
            }

            const newBook = await BookModel.createBook(bookData);  

            res.status(200).json({ message: "livro criado com êxito", newBook });
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao criar livro" });
        }   
    }

    async updateBook(req, res) {
        const { id } = req.params;
        const bookData = req.body;
        try {
            if(!await BookModel.getBookById(id)){
                return res.status(404).json({ error: "livro não encontrado" });
            }
            const updatedBook = await BookModel.updateBook(id, bookData);
            res.status(200).json({ message: "livro atualizado com êxito", updatedBook });
        }           
        catch (error) {
            res.status(500).json({ error: "Erro ao atualizar livro" });
        }
    }

    async deleteBook(req, res) {
        const { id } = req.params;  
        try {
            if(!await BookModel.getBookById(id)){
                return res.status(404).json({ error: "livro não encontrado" });
            }
            await BookModel.deleteBook(id);
            res.status(200).json({ message: "livro deletado com êxito" });
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao deletar livro" });
        }   
    }
}

export default new BookController();