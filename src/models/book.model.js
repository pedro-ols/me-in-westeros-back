import prisma from "../../prisma/prisma.js";

class BookModel {
    async getAllBooks() {
        const books = await prisma.book.findMany();
        return books;
    }
    async getBookById(id) {
        const book = await prisma.book.findUnique({
            where: { id: Number(id) },
        });

        return book;
    }
    async createBook(book) {
        const createdBook = await prisma.book.create({
            data: book,
        });

        return createdBook;
    }
    async updateBook(id, book){
        const updatedBook = await this.getBookById(id);
        
        await prisma.book.update({
            where: { id: Number(id) },
            data: book,
        });
        return updatedBook;
    }

    async deleteBook(id) {
        const deletedBook = await this.getBookById(id);

        if (!deletedBook) {
            return null;
        }

        await prisma.book.delete({
            where: {
                id: Number(id),
            },
        });

        return deletedBook;
    }
}
 
export default new BookModel;