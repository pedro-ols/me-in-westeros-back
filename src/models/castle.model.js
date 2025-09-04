import prisma from "../../prisma/prisma.js";

class CastleModel {
  async getAllCastles() {
    const castles = await prisma.castle.findMany();
    return castles;
  }
  async getCastleById(id) {
    const castle = await prisma.castle.findUnique({
      where: { id: Number(id) },
    });

    return castle;
  }
  async createCastle(castle) {
    console.log(castle);
    
    const createdCastle = await prisma.castle.create({
      data: castle,
    });

    return createdCastle;
  }
  async updateCastle(id, castle){
    const updatedCastle = await this.getCastleById(id);
    
    await prisma.castle.update({
      where: { id: Number(id) },
      data: castle,
    });
    return updatedCastle;
  }

  async deleteCastle(id) {
    const deletedCastle = await this.getCastleById(id);

    if (!deletedCastle) {
      return null;
    }

    await prisma.castle.delete({
      where: {
        id: Number(id),
      },
    });

    return deletedCastle;
  }
}
 
export default new CastleModel;