import prisma from "../../prisma/prisma.js";

export const getAllHouses = async () => {
  return await prisma.house.findMany();
}
export const getHouseById = async (id) => {
  return await prisma.house.findUnique({
    where: { id: Number(id) },
  });
}
export const createHouse = async (house) => {
  return await prisma.house.create({
    data: house,
  });
}
export const updateHouse = async (id, house) => {
  return await prisma.house.update({
    where: { id: Number(id) },
    data: house,
  });
}
export const deleteHouse = async (id) => {
  return await prisma.house.delete({
    where: { id: Number(id) },
  });
}