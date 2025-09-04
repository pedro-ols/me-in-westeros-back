import prisma from "../../prisma/prisma.js";

class HouseModel {
  async getAllHouses() {
    const houses = await prisma.house.findMany();
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
  async updateHouse(id){
    const updatedHouse = await prisma.house.update({
      where: { id: Number(id) },
      data: house,
    });
    return updatedHouse;
  }
  async delete(id) {
    const deletedHouse = await this.findById(id);

    if (!deletedHouse) {
      return null;
    }

    await prisma.house.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}
 
export default new HouseModel;