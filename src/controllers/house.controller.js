import houseModel from "../models/house.model.js";

class HouseController {
    async getAllHouses(req, res) {
        try {   
            const houses = await houseModel.getAllHouses();
            res.json(houses);
        }       
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar casas" });
        }   
    }

    async getHouseById(req, res) {
        const { id } = req.params;
        try {
            const house = await houseModel.getHouseById(id);
            if (house) {
                res.json(house);
            }   
            else {
                res.status(404).json({ error: "Casa não encontrada" });
            }   
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar casa" });
        }
    }

    async createHouse(req, res) {
        const houseData = req.body;
        try {
            const newHouse = await houseModel.createHouse(houseData);
            res.status(201).json(newHouse);
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao criar casa" });
        }   
    }

    async updateHouse(req, res) {
        const { id } = req.params;
        const houseData = req.body;
        try {
            const updatedHouse = await houseModel.updateHouse(id, houseData);
            res.json(updatedHouse);
        }           
        catch (error) {
            res.status(500).json({ error: "Erro ao atualizar casa" });
        }
    }

    async deleteHouse(req, res) {
        const { id } = req.params;  
        try {
            await houseModel.deleteHouse(id);
            res.status(204).end();
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao deletar casa" });
        }   
    }
}

export default new HouseController();