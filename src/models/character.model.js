import prisma from "../../prisma/prisma.js";

class CharacterModel {
  async getAllCharacters() {
    const characters = await prisma.character.findMany();
    return characters;
  }
  async getCharacterById(id) {
    const character = await prisma.character.findUnique({
      where: { id: Number(id) },
    });

    return character;
  }
  async createCharacter(character) {
    const createdCharacter = await prisma.character.create({
      data: character,
    });

    return createdCharacter;
  }
  async updateCharacter(id, character){
    const updatedCharacter = await this.getCharacterById(id);
    
    await prisma.character.update({
      where: { id: Number(id) },
      data: character,
    });
    return updatedCharacter;
  }

  async deleteCharacter(id) {
    const deletedCharacter = await this.getCharacterById(id);

    if (!deletedCharacter) {
      return null;
    }

    await prisma.character.delete({
      where: {
        id: Number(id),
      },
    });

    return deletedCharacter;
  }
}
 
export default new CharacterModel;