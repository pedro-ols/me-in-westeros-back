import prisma from "../../prisma/prisma.js";

class AtributeModel {
  async getAllAtributes() {
    const atributes = await prisma.atribute.findMany();
    return atributes;
  }
  async getAtributeById(id) {
    const atribute = await prisma.atribute.findUnique({
      where: { id: Number(id) },
    });

    return atribute;
  }
  async createAtribute(atribute) {
    const createdAtribute = await prisma.atribute.create({
      data: atribute,
    });

    return createdAtribute;
  }
  async updateAtribute(id, atribute){
    const updatedAtribute = await this.getAtributeById(id);
    
    await prisma.atribute.update({
      where: { id: Number(id) },
      data: atribute,
    });
    return updatedAtribute;
  }

  async deleteAtribute(id) {
    const deletedAtribute = await this.getAtributeById(id);

    if (!deletedAtribute) {
      return null;
    }

    await prisma.atribute.delete({
      where: {
        id: Number(id),
      },
    });

    return deletedAtribute;
  }
}
 
export default new AtributeModel;

