import prisma from "../../prisma/prisma.js";

class HouseModel {
  async getAllHouses() {
    const houses = await prisma.house.findMany({
      include: { characters: true }
  });
    return houses;
  }
  async getHouseById(id) {
    const house = await prisma.house.findUnique({
      where: { id: Number(id) },
    });

    return house;
  }
  async createHouse(house) {
    const createdHouse = await prisma.house.create({
      data: house,
    });

    return createdHouse;
  }
  async updateHouse(id, house){
    const updatedHouse = await this.getHouseById(id);
    
    await prisma.house.update({
      where: { id: Number(id) },
      data: house,
    });
    return updatedHouse;
  }

  async deleteHouse(id) {
    const deletedHouse = await this.getHouseById(id);

    if (!deletedHouse) {
      return null;
    }

    await prisma.house.delete({
      where: {
        id: Number(id),
      },
    });

    return deletedHouse;
  }
}
 
export default new HouseModel;