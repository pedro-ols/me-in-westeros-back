import prisma from "../../prisma/prisma.js";

class ActorModel {
  async getAllActors() {
    const actors = await prisma.actor.findMany();
    return actors;
  }
  async getActorById(id) {
    const actor = await prisma.actor.findUnique({
      where: { id: Number(id) },
    });

    return actor;
  }
  async createActor(actor) {
    const createdActor = await prisma.actor.create({
      data: actor,
    });

    return createdActor;
  }
  async updateActor(id, actor){
    const updatedActor = await this.getActorById(id);
    
    await prisma.actor.update({
      where: { id: Number(id) },
      data: actor,
    });
    return updatedActor;
  }

  async deleteActor(id) {
    const deletedActor = await this.getActorById(id);

    if (!deletedActor) {
      return null;
    }

    await prisma.actor.delete({
      where: {
        id: Number(id),
      },
    });

    return deletedActor;
  }
}
 
export default new ActorModel;